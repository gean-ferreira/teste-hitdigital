<script setup lang="ts">
const { data: posts, status, error } = usePosts().list()
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-highlighted mb-8">Posts</h1>

    <div v-if="status === 'pending'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <USkeleton v-for="i in 6" :key="i" class="h-40 rounded-lg" />
    </div>

    <UAlert
      v-else-if="error"
      color="error"
      title="Erro ao carregar posts"
      :description="error.message"
      icon="i-lucide-alert-circle"
    />

    <div v-else-if="posts?.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink
        v-for="post in posts"
        :key="post.id"
        :to="`/posts/${post.id}`"
        class="block"
      >
        <UCard class="h-full hover:ring-2 hover:ring-primary">
          <h2 class="font-semibold text-highlighted mb-2 line-clamp-2 capitalize">
            {{ post.title }}
          </h2>
          <p class="text-sm text-muted line-clamp-3">
            {{ post.body }}
          </p>
        </UCard>
      </NuxtLink>
    </div>

    <p v-else class="text-muted text-center py-8">
      Nenhum post encontrado.
    </p>
  </div>
</template>
