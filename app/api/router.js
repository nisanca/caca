// app/api/comments/route.js
import { NextResponse } from 'next/server'
import { getComments, addComment } from '@/db/db' // pastikan path ini sesuai

export async function GET() {
  return NextResponse.json(getComments())
}

export async function POST(req) {
  const data = await req.json()
  addComment(data)
  return NextResponse.json({ message: 'Comment saved' })
}
