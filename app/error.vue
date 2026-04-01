<script setup lang="ts">
const props = defineProps<{
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
  <main>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <button @click="handleError">Voltar para a home</button>
  </main>
</template>
