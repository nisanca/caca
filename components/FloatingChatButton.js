'use client';

import React, { useState } from 'react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, from: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'Terima kasih! Kami akan segera menghubungi Anda.', from: 'bot' }]);
      }, 800);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-3">
          <h2 className="font-semibold text-gray-800 dark:text-white mb-2">Chat dengan Kami</h2>
          <div className="h-48 overflow-y-auto flex flex-col gap-2 text-sm mb-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[75%] px-3 py-2 rounded-lg ${
                  msg.from === 'user'
                    ? 'bg-blue-600 text-white self-end'
                    : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              className="flex-1 px-3 py-1 rounded-lg border dark:bg-gray-700 dark:text-white"
              placeholder="Tulis pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700"
            >
              Kirim
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 text-2xl"
      >
        💬
      </button>
    </div>
  );
}
