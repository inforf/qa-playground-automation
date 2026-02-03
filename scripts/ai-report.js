import fs from "fs";
import path from "path";

const REPORT_PATH = path.resolve("reports/report.json");
const OUTPUT_PATH = path.resolve("docs/relatorio-execucao.md");
const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
const MODEL = "phi3:mini";

if (!fs.existsSync(REPORT_PATH)) {
  console.error("Arquivo report.json não encontrado.");
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf-8"));
const failures = [];

function traverseSuites(suite) {
  for (const spec of suite.specs || []) {
    for (const test of spec.tests || []) {
      if (test.status === "unexpected") {
        for (const result of test.results || []) {
          if (result.error) {
            failures.push({
              scenario: test.title,
              error: result.error.message,
            });
          }
          for (const err of result.errors || []) {
            failures.push({
              scenario: test.title,
              error: err.message,
            });
          }
        }
      }
    }
  }

  for (const child of suite.suites || []) {
    traverseSuites(child);
  }
}

for (const suite of report.suites || []) {
  traverseSuites(suite);
}

if (failures.length === 0) {
  console.log("Nenhuma falha encontrada no relatório.");
  process.exit(0);
}

const prompt = `
IMPORTANTE:
- Responda EXCLUSIVAMENTE em português do Brasil.
- NÃO utilize inglês em nenhuma parte do relatório.
- Use linguagem profissional de QA, clara, objetiva e sem jargões desnecessários.

Você é um QA Sênior analisando resultados de testes automatizados executados com Playwright
em um ambiente de QA com falhas intencionais.

Seu objetivo é transformar falhas técnicas em informação clara para tomada de decisão.

Instruções:
- Agrupe falhas semelhantes dentro do mesmo cenário
- Identifique o tipo de defeito (funcional, usabilidade, integração, validação, performance)
- Classifique a severidade (Baixa, Média, Alta, Crítica)
- Explique o impacto real para o usuário final

Estruture o relatório com:
1. Resumo Executivo
2. Análise por Cenário
3. Conclusão Técnica

Falhas detectadas:
${failures
  .map((f, i) => `${i + 1}. Cenário: ${f.scenario}\nErro: ${f.error}`)
  .join("\n\n")}
`;

async function generateReport() {
  let response;

  try {
    response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        prompt,
        stream: true,
      }),
    });
  } catch (err) {
    console.error("Erro ao conectar no Ollama.");
    process.exit(1);
  }

  if (!response.ok || !response.body) {
    console.error("Resposta inválida do Ollama.");
    process.exit(1);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let fullResponse = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk.split("\n").filter(Boolean);

    for (const line of lines) {
      try {
        const json = JSON.parse(line);
        if (json.response) {
          fullResponse += json.response;
        }
      } catch {
        
      }
    }
  }

  fs.writeFileSync(
    OUTPUT_PATH,
    `# Relatório de Execução – QA Playground\n\n${fullResponse}`
  );

  console.log("Relatório gerado em docs/relatorio-execucao.md");
}

generateReport();
