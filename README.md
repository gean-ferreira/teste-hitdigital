# Hit Digital - Teste Frontend

Aplicação Nuxt 4 que consome a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com) para listagem e detalhamento de posts.

## Decisoes tecnicas

- **SSR nativo** — `useFetch` roda no servidor, entregando HTML pronto ao browser
- **Cache SWR** — `getCachedData` no composable base evita refetch ao revisitar páginas
- **Composables** — `useApi` (generico) e `usePosts` (dominio) separando responsabilidades
- **Nuxt UI** — componentes prontos com dark mode e tokens de tema
- **TypeScript** — tipagem em todas as camadas

## Estrutura

```
app/
  composables/
    useApi.ts         # fetch generico com cache SWR
    usePosts.ts       # operacoes de posts (list, getById)
  pages/
    index.vue         # listagem de posts
    posts/[id].vue    # detalhe do post
  types/
    post.ts           # interface Post
  app.vue             # layout global com header
  error.vue           # pagina de erro (404/500)
```

## Rodando o projeto

```bash
bun install
bun run dev
```

Acesse `http://localhost:3000`.

## Build de producao

```bash
bun run build
bun run preview
```
