<script setup lang="ts">
const { data: posts, status, error } = usePosts().list()
</script>

<template>
  <main>
    <h1>Posts</h1>

    <p v-if="status === 'pending'">Carregando posts...</p>

    <p v-else-if="error">Erro ao carregar posts: {{ error.message }}</p>

    <ul v-else-if="posts?.length">
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
