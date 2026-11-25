# Naruto Dex

Projeto acadêmico (TCD) de uma página com catálogo de personagens e vilas ninja do universo Naruto, feito com React, TypeScript e Tailwind CSS.

**Site publicado:** https://math99991.github.io/projeto-narutodex/

## Autor

Matheus Fernandes

## Como executar o projeto

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal (por padrão `http://localhost:5173/projeto-narutodex/`).

Outros comandos: `npm run build` (gera a pasta `dist`), `npm run lint` e `npm run deploy` (publica no GitHub Pages).

## Fonte dos dados

- **Listagem principal (personagens):** arquivo JSON externo em `public/personagens.json`, carregado com `fetch` dentro de um `useEffect` (função `buscarPersonagens` em `src/data/buscarPersonagens.ts`). A interface mostra um estado de carregando enquanto os dados não chegam e uma mensagem de erro, com botão "Tentar novamente", se a requisição falhar.
- **Listagem secundária (vilas):** vetor de objetos local em `src/data/vilas.ts`.

## Funcionalidades

- Layout responsivo (mobile first) com adaptações para tablet (`md:`) e desktop (`lg:`).
- Favoritar personagens, filtrar por TODOS/FAVORITOS e buscar por nome, clã, vila ou habilidade.
- Menu responsivo no mobile e botão "ver todos" nas duas listagens.
- Modo escuro com Tailwind (`dark:`), controlado por estado.
- Site publicado no GitHub Pages.

## Estrutura

```
src/
├── components/   componentes da página
├── data/         tipos, vetor de vilas e função de acesso aos dados
├── App.tsx       estado da aplicação e composição dos componentes
public/
├── images/       imagens
└── personagens.json
docs/             wireframes (Fase 1)
```