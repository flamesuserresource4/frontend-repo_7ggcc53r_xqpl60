import { useState } from 'react'

function Composer({ onCreate }) {
  const [content, setContent] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    if (!content.trim()) return
    try {
      const body = {
        user_id: 'demo-user',
        content: content.trim(),
        image_url: null,
        like_count: 0,
        comment_count: 0,
      }
      const res = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error('Failed to post')
      const data = await res.json()
      setContent('')
      onCreate?.(data)
    } catch (e) {
      console.error(e)
      alert('Could not create post')
    }
  }

  return (
    <form onSubmit={submit} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 backdrop-blur">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Share something..."
        className="w-full bg-slate-900/60 text-slate-100 placeholder-slate-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
      />
      <div className="flex justify-end mt-3">
        <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition">
          Post
        </button>
      </div>
    </form>
  )
}

export default Composer
