'use client'

import { useEffect, useState } from 'react'

export default function RatingDisplay() {
  const [ratings, setRatings] = useState([])

  const fetchRatings = async () => {
    const res = await fetch('/api/ratings')
    const data = await res.json()
    setRatings(data)
  }

  useEffect(() => {
    fetchRatings()
  }, [])

  const average = ratings.length
    ? (ratings.reduce((sum, r) => sum + r.stars, 0) / ratings.length).toFixed(1)
    : '0.0'

  return (
    <div className="my-4 text-lg font-semibold">
      Rating: {average} (from {ratings.length} voters)
    </div>
  )
}
