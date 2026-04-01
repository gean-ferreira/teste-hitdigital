<script setup lang="ts">
const { id } = useRoute().params
const { data: post, status, error } = usePosts().getById(id as string)
</script>

<template>
  <div>
    <UButton
      to="/"
      variant="ghost"
      icon="i-lucide-arrow-left"
      label="Voltar"
      class="mb-6"
    />

    <div v-if="status === 'pending'" class="max-w-prose mx-auto space-y-4">
      <USkeleton class="h-8 w-3/4" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-2/3" />
    </div>

    <UAlert
      v-else-if="error"
      color="error"
      title="Erro ao carregar post"
      :description="error.message"
      icon="i-lucide-alert-circle"
    />

    <UCard v-else-if="post" class="max-w-prose mx-auto">
      <h1 class="text-2xl font-bold text-highlighted mb-4 capitalize">
        {{ post.title }}
      </h1>
      <p class="text-default leading-relaxed whitespace-pre-line">
        {{ post.body }}
      </p>
    </UCard>
  </div>
</template>
