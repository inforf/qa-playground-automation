# QA Playground Automation

Automação de testes end-to-end criada para validar, reproduzir e
analisar comportamentos do **QA Playground**, um ambiente
propositalmente construído com falhas funcionais semelhantes às
encontradas em sistemas reais.

O objetivo deste projeto não é apenas executar testes automatizados.

É demonstrar o ciclo completo de qualidade:

**observar → reproduzir → automatizar → interpretar → prevenir**

------------------------------------------------------------------------

## O que este projeto demonstra

Este repositório simula a atuação de QA após a identificação de
comportamentos suspeitos em um sistema.

A automação:

-   reproduz cenários de erro
-   valida fluxos críticos
-   coleta evidências
-   gera relatórios estruturados
-   envia os resultados para análise inteligente

Ou seja, não é somente automação de clique.

É suporte à decisão de qualidade.

------------------------------------------------------------------------

## Integração com análise por IA (Ollama)

Após a execução dos testes, o relatório gerado pelo Playwright é enviado
para uma **IA local executando via Ollama**.

A IA interpreta:

-   padrões de falha
-   recorrência de erros
-   impacto funcional
-   risco para o usuário
-   prioridade de correção

O resultado não é apenas um relatório técnico.

É uma **análise contextualizada do risco do sistema**.

Isso simula um cenário próximo do mundo real:\
a equipe não precisa somente saber *o que falhou*, mas *o que pode
acontecer com o cliente*.

------------------------------------------------------------------------

## Tecnologias utilizadas

-   Playwright
-   JavaScript / Node.js
-   Relatórios HTML do Playwright
-   Integração com LLM local via Ollama
-   Testes E2E orientados a comportamento

------------------------------------------------------------------------

## Estrutura dos testes

Os testes cobrem:

-   login
-   navegação
-   formulários
-   persistência de estado
-   validações incorretas
-   inconsistências de fluxo

O foco não é apenas verificar se a página responde.

O foco é validar se **o usuário consegue concluir a tarefa**.

------------------------------------------------------------------------

## Como executar

Instalar dependências: ```  npx playwright install```

Executar testes: ```  npx playwright test```

Abrir relatório: ```  npx playwright show-report```

------------------------------------------------------------------------

## O que deve ser observado no relatório

Mais importante que "teste passou" ou "teste falhou" é entender:

-   qual fluxo foi impactado
-   qual ação o usuário não consegue concluir
-   qual risco existe se for liberado

Qualidade não é apenas detectar defeitos.

É impedir impacto ao usuário final.

------------------------------------------------------------------------

## Objetivo do projeto

Este projeto demonstra que automação de testes não deve servir apenas
para bloquear deploy.

Ela deve:

-   antecipar problemas
-   orientar decisões
-   apoiar desenvolvimento
-   reduzir risco em produção

Quanto mais cedo o risco é identificado, menor o custo e maior a
confiança na entrega.

------------------------------------------------------------------------

## Autor

Ronaldo Ferreira\
https://github.com/inforf
