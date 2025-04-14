'use client'

import { useState } from 'react'

const CommentForm = ({ onNewComment }) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !message) return

    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ name, message }),
      headers: { 'Content-Type': 'application/json' },
    })

    setName('')
    setMessage('')
    onNewComment()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Your comment"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit Comment
      </button>
    </form>
  )
}

export default CommentForm
