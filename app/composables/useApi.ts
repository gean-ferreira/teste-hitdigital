export function useApi<T>(path: string) {
  const { apiBase } = useRuntimeConfig().public

  return useFetch<T>(`${apiBase}${path}`, {
    key: path,
    getCachedData(key, nuxtApp) {
      return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
    },
  })
}
