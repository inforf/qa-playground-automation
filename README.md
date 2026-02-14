# QA Automation Portfolio

Este repositório demonstra a **validação contínua de qualidade** por
meio de automação, integração e análise de resultados.

Aqui o foco não é apenas executar testes automatizados --- é **usar
automação para apoiar decisão de entrega**.

O objetivo é mostrar como testes deixam de ser uma atividade isolada e
passam a integrar o fluxo real de desenvolvimento.

------------------------------------------------------------------------

## Objetivo

Garantir que mudanças no sistema possam ser avaliadas rapidamente quanto
a:

-   risco funcional
-   impacto de regressão
-   comportamento do usuário
-   estabilidade do fluxo principal

A automação aqui funciona como **instrumento de prevenção**, permitindo
identificar problemas antes que cheguem ao usuário final.

------------------------------------------------------------------------

## O que este projeto demonstra

Este projeto evidencia competências práticas em:

-   automação de testes E2E
-   testes de API
-   organização de cenários de validação
-   geração de relatórios
-   execução em pipeline CI
-   análise de falhas
-   apoio à decisão de release

A proposta não é substituir o QA humano --- e sim **ampliar sua
capacidade de análise**.

------------------------------------------------------------------------

## Estrutura

Os testes são organizados por comportamento da aplicação:

    tests/
     ├─ login
     ├─ navegação
     ├─ carrinho / fluxo principal
     ├─ validações
     └─ API

Cada cenário busca validar o que realmente importa:\
se o usuário consegue concluir sua tarefa.

------------------------------------------------------------------------

## Tecnologias Utilizadas

-   Playwright
-   JavaScript / Node.js
-   GitHub Actions (CI)
-   Relatórios HTML
-   Estrutura Page Object
-   Execução headless

------------------------------------------------------------------------

## Pipeline de Integração Contínua

A cada execução:

1.  o ambiente é preparado automaticamente
2.  os testes são executados
3.  falhas são registradas
4.  relatórios são gerados
5.  a equipe pode avaliar o risco da alteração

A automação passa então a participar diretamente da decisão:

> liberar ou não liberar uma versão

------------------------------------------------------------------------

## Execução Local

Instalação:

    npm install
    npx playwright install

Executar testes:

    npx playwright test

Abrir relatório:

    npx playwright show-report

------------------------------------------------------------------------

## Relatórios

Os relatórios não servem apenas para indicar "passou" ou "falhou".\
Eles permitem entender:

-   onde o fluxo quebrou
-   qual ação causou a falha
-   qual funcionalidade foi impactada

Ou seja, a automação fornece **informação para decisão**, não apenas um
resultado binário.

------------------------------------------------------------------------

## Papel deste projeto no Portfólio

Enquanto outros projetos mostram análise de comportamento e reprodução
de falhas, este repositório mostra:

**validação contínua e prevenção de problemas**.

Ele representa a etapa em que a qualidade passa a ser parte do processo
de entrega --- não uma verificação tardia.

Qualidade não é uma fase após o desenvolvimento.\
É um mecanismo que acompanha a evolução do sistema.

------------------------------------------------------------------------

## Autor

Ronaldo Ferreira\
https://github.com/inforf
