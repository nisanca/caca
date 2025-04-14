'use client'

import { useEffect, useState } from 'react'

const CommentList = () => {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const res = await fetch('/api/comments')
    const data = await res.json()
    setComments(data.reverse()) // Tampilkan terbaru di atas
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="border p-3 rounded mb-2">
          <p className="font-semibold">{comment.name}</p>
          <p className="text-sm text-gray-600">{new Date(comment.createdAt).toLocaleString()}</p>
          <p>{comment.message}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentList
