'use client';

import { useState } from 'react';

export default function Chatbox() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();

    const botMessage = { from: 'bot', text: data.reply };
    setMessages((prev) => [...prev, botMessage]);
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow mt-10">
      <h2 className="text-xl font-bold mb-2">💬 AI Chatbot</h2>
      <div className="h-64 overflow-y-auto bg-white p-2 border rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`my-1 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-1 rounded ${msg.from === 'user' ? 'bg-blue-200' : 'bg-green-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1"
          placeholder="Tanya sesuatu..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="ml-2 px-4 py-1 bg-blue-500 text-white rounded">
          Kirim
        </button>
      </div>
    </div>
  );
}
