import { useEffect, useState } from 'react'

async function fetchData<T>(resource: string): Promise<T[]> {
  const response = await fetch(`/${resource}.json`)
  if (!response.ok) {
    throw new Error(`Erro ao buscar ${resource}`)
  }
  return await response.json()
}

export function useFetchData<T>(resource: string) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)

    Promise.all([
      fetchData<T>(resource),
      new Promise((resolve) => setTimeout(resolve, 1000))
    ])
      .then(([res]) => {
        if (isMounted) setData(res as T[])
      })
      .catch((err) => {
        console.error(`Erro ao carregar ${resource}:`, err)
        if (isMounted) setError(err.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [resource])

  return { data, loading, error }
}
