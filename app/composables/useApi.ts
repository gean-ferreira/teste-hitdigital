export function useApi<T>(path: string) {
  const { apiBase } = useRuntimeConfig().public

  return useFetch<T>(`${apiBase}${path}`, {
    key: path,
  })
}
