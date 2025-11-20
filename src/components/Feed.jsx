import { useEffect, useState, useCallback } from 'react'

function Feed() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true)
      const res = await fetch(`${baseUrl}/posts`)
      const data = await res.json()
      setPosts(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [baseUrl])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const like = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/posts/${id}/like`, { method: 'POST' })
      if (!res.ok) return
      const updated = await res.json()
      setPosts((prev) => prev.map((p) => (p.id === id ? updated : p)))
    } catch (e) {
      console.error(e)
    }
  }

  if (loading) {
    return <div className="text-slate-300">Loading feed...</div>
  }

  if (!posts.length) {
    return (
      <div className="text-slate-300">
        No posts yet. Try seeding demo content on the test page.
      </div>
    )
  }

  return (
    <ul className="space-y-4">
      {posts.map((p) => (
        <li key={p.id} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500" />
            <div className="flex-1">
              <div className="text-slate-200 font-semibold">@demo-user</div>
              <div className="text-slate-100 mt-1 whitespace-pre-wrap">{p.content}</div>
              <div className="mt-3 flex items-center gap-4 text-slate-400 text-sm">
                <button onClick={() => like(p.id)} className="hover:text-blue-400 transition">❤️ {p.like_count}</button>
                <span>💬 {p.comment_count}</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Feed
