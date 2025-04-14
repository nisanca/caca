'use client'
import { FaComments } from 'react-icons/fa'

export default function ChatIconButton() {
  return (
    <button
      className="fixed top-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      title="Chatbot"
    >
      <FaComments className="text-xl" />
    </button>
  )
}
