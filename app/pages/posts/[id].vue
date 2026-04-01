<script setup lang="ts">
const { id } = useRoute().params
const { data: post, status, error } = usePosts().getById(id as string)
</script>

<template>
  <main>
    <NuxtLink to="/">Voltar</NuxtLink>

    <p v-if="status === 'pending'">Carregando post...</p>

    <p v-else-if="error">Erro ao carregar post: {{ error.message }}</p>

    <article v-else-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </article>
  </main>
</template>
