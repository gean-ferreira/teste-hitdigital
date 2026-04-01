import type { Post } from '~/types/post'

export function usePosts() {
  function list() {
    return useApi<Post[]>('/posts')
  }

  function getById(id: string) {
    return useApi<Post>(`/posts/${id}`)
  }

  return { list, getById }
}
