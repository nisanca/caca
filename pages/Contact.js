"use client";
import { useState, useEffect } from "react";
import { FaStar, FaComments } from "react-icons/fa";

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(true);

    const newComment = {
      name,
      message,
      rating,
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("comments") || "[]");
    const updated = [...existing, newComment];
    localStorage.setItem("comments", JSON.stringify(updated));
    setComments(updated);

    setName("");
    setEmail("");
    setMessage("");
    setRating(0);

    setTimeout(() => setSent(false), 3000);
  };

  useEffect(() => {
    const saved = localStorage.getItem("comments");
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, []);

  const averageRating = comments.length
    ? (
        comments.reduce((sum, c) => sum + parseInt(c.rating), 0) /
        comments.length
      ).toFixed(1)
    : 0;

  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#DDEAD1] dark:bg-[#1F2B24]"
      >
        <div className="w-full max-w-4xl bg-[#E8F3E4] dark:bg-[#2F3D34] p-10 rounded-2xl shadow-lg">
          <h2 className="text-xl text-center font-normal text-black dark:text-white mb-6">
            Contact Me
          </h2>

          {sent && (
            <div className="text-center text-green-600 font-medium mb-4">
              ✅ Message sent successfully!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid gap-8 sm:grid-cols-2 justify-center"
          >
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-[#3D4A38] dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-[#3F4E44] text-black dark:text-white"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-[#3D4A38] dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-[#3F4E44] text-black dark:text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-[#3D4A38] dark:text-white mb-2">
                Message
              </label>
              <textarea
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-[#3F4E44] text-black dark:text-white"
              />
            </div>

            <div className="sm:col-span-2 text-center -mt-4">
              <p className="text-sm font-medium text-[#3D4A38] dark:text-white mb-2">
                Rate your experience:
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        className="hidden"
                      />
                      <FaStar
                        size={32}
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        className="cursor-pointer"
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#A3C9A8] hover:bg-[#8BBF90] text-black font-semibold py-3 px-6 rounded-md transition duration-300"
              >
                {sent ? "✅ Message Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <button
        onClick={() => setShowComments(!showComments)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center z-50"
      >
        <FaComments className="mr-2" /> Komentar
      </button>

      {showComments && (
        <div className="fixed bottom-20 right-6 w-[300px] max-h-[400px] bg-[#DDEAD1] dark:bg-[#2F3D34] shadow-xl rounded-xl overflow-y-auto z-50 border border-[#B3D4A0]">
          <div className="p-4">
            <p className="text-center font-semibold text-gray-800 dark:text-white">
              ⭐ {averageRating} / 5
            </p>
            <p className="text-center text-sm text-gray-500 dark:text-gray-300 mb-3">
              {comments.length} ulasan
            </p>

            {comments.length === 0 ? (
              <p className="text-center text-gray-500">No comments yet.</p>
            ) : (
              comments
                .slice()
                .reverse()
                .map((c, i) => (
                  <div key={i} className="mb-3 border-t pt-2">
                    <p className="font-medium text-black dark:text-white">
                      {c.name} ⭐ {c.rating}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {c.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(c.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        section {
          padding: 80px 20px;
          background: linear-gradient(to right, #ddead1, #e8f3e4);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .profile-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          border: 4px solid #00bcd4;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          transition: transform 0.3s ease;
          cursor: zoom-in;
        }
        .profile-image:hover {
          transform: scale(1.8);
          z-index: 10;
        }
        h1 {
          font-size: 40px;
          color: #00796b;
          margin-bottom: 16px;
        }
        p {
          font-size: 20px;
          color: #555;
          max-width: 600px;
        }
        @media (max-width: 768px) {
          section {
            padding: 50px 15px;
          }
          h1 {
            font-size: 32px;
          }
          p {
            font-size: 18px;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 26px;
          }
          p {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;
