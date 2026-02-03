# QA Playground – Automação e Análise de Risco

Este repositório contém um projeto de automação de testes E2E desenvolvido com Playwright, utilizando cenários com falhas intencionais para demonstrar não apenas a execução dos testes, mas principalmente a análise de impacto, severidade e risco para o negócio.

O objetivo do projeto é evidenciar uma atuação de QA focada em qualidade de ponta a ponta, indo além do “teste passou ou falhou”.

## Objetivo do Projeto

- Demonstrar automação de testes em cenários reais de falha
- Executar testes sem interrupção mesmo diante de erros
- Coletar evidências automaticamente
- Gerar relatório técnico com análise de impacto para usuário e negócio
- Simular um fluxo próximo ao utilizado em ambientes corporativos

## Cenários Automatizados

Os testes automatizados cobrem os seguintes cenários com falhas intencionais:

- Modal que não fecha
- API com resposta lenta
- Formulário com validação incorreta

Os cenários estão localizados em:
tests/qa-playground.spec.ts

## Automação e Execução

- Framework: Playwright
- Linguagem: TypeScript
- Execução contínua dos testes, mesmo com falhas
- Geração automática de evidências

Para executar os testes:
npx playwright test

## Relatório de Execução

Após a execução dos testes, é gerado um relatório técnico contendo:

- Resumo executivo
- Análise por cenário
- Classificação de severidade
- Impacto para o usuário
- Risco para o negócio

Relatório disponível em:
docs/relatorio-execucao.md

## Análise com IA Local

O projeto inclui um script que analisa os resultados do Playwright e gera o relatório técnico utilizando uma LLM local (Ollama), sem dependência de serviços externos.

Script:
scripts/ai-report.js

Execução:
node scripts/ai-report.js

## Estrutura do Projeto

```text
qa-playground-automation/
├── README.md
├── docs/
│   └── relatorio-execucao.md
├── reports/
│   └── report.json
├── scripts/
│   └── ai-report.js
├── tests/
│   └── qa-playground.spec.ts
├── playwright.config.ts
└── package.json

## Considerações Finais

Este projeto demonstra uma abordagem madura de QA, com foco em automação, análise crítica de falhas e comunicação clara de riscos para o negócio.
