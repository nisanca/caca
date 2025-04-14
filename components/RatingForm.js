'use client'

import { useState } from 'react'

export default function RatingForm({ onNewRating }) {
  const [stars, setStars] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (stars < 1 || stars > 5) return

    await fetch('/api/ratings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stars }),
    })

    setStars(0)
    onNewRating()
  }

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            onClick={() => setStars(n)}
            className={`cursor-pointer text-3xl ${n <= stars ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Submit Rating
      </button>
    </form>
  )
}
