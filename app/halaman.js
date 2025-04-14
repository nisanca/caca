'use client'

import { useState } from 'react'
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'
import RatingForm from './components/RatingForm'
import RatingDisplay from './components/RatingDisplay'

export default function Home() {
  const [reload, setReload] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const handleNewComment = () => {
    setReload(!reload) // Paksa CommentList untuk refresh
  }

  const refreshDisplay = () => {
    setRefresh(!refresh) // Paksa RatingDisplay untuk refresh
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      {/* Rating Section */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Beri Rating Website Ini</h1>
        <RatingForm onNewRating={refreshDisplay} />
        <RatingDisplay key={refresh.toString()} />
      </section>

      {/* Comment Section */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Leave a Comment</h1>
        <CommentForm onNewComment={handleNewComment} />
        <CommentList key={reload.toString()} />
      </section>
    </main>
  )
}
