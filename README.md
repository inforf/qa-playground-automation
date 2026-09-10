# QA Playground Automation

Suíte E2E em Playwright criada para reproduzir automaticamente os cenários do **QA Playground**.

🔗 Playground: https://inforf.github.io/qa-playground/

Este projeto é separado do site e tem uma responsabilidade clara: transformar falhas observadas manualmente em testes reproduzíveis de regressão.

---

## Cenários automatizados

A suíte atual cobre os três cenários existentes no Playground:

1. **Modal que não fecha**
   - abre o modal
   - verifica se o fluxo consegue retornar ao estado esperado

2. **API lenta / carregamento infinito**
   - inicia o carregamento
   - verifica se a interface permanece presa no estado de espera

3. **Formulário com validação incorreta**
   - envia email inválido e idade negativa
   - verifica se a aplicação rejeita o estado indevido

Os testes usam `expect.soft` para continuar a execução e coletar evidências mesmo quando um cenário falha.

---

## Objetivo

O ciclo demonstrado é:

**explorar manualmente → reproduzir → automatizar → coletar evidências → analisar**

O Playground serve para investigação manual.

Este repositório serve para regressão automatizada dos mesmos comportamentos.

---

## Relatórios e IA local

O projeto inclui um script de análise em `scripts/ai-report.js` e documentação em `docs/relatorio-execucao.md`.

A proposta é utilizar os resultados do Playwright como entrada para análise contextual com uma LLM local via Ollama, transformando evidência técnica em informação mais útil para avaliação de risco.

---

## Tecnologias

- Playwright
- JavaScript / Node.js
- Relatórios HTML do Playwright
- Ollama / LLM local
- Testes E2E orientados a comportamento

---

## Como executar

Instale as dependências:

```bash
npm install
```

Instale os browsers do Playwright:

```bash
npx playwright install
```

Execute os testes:

```bash
npx playwright test
```

Abra o relatório:

```bash
npx playwright show-report
```

---

## Estrutura

```text
tests/
  qa-playground.spec.ts

scripts/
  ai-report.js

docs/
  relatorio-execucao.md
```

---

## Autor

Ronaldo Ferreira  
https://github.com/inforf
