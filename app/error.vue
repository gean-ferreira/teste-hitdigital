<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <UApp>
    <div class="flex flex-col items-center justify-center min-h-screen gap-4">
      <p class="text-8xl font-bold text-primary">
        {{ error.statusCode }}
      </p>
      <p class="text-xl text-muted">
        {{ error.message }}
      </p>
      <UButton
        label="Voltar para a home"
        icon="i-lucide-home"
        @click="handleError"
        class="mt-4"
      />
    </div>
  </UApp>
</template>
