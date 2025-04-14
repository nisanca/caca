'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Hi, Aku Nisa, seorang mahasiswa sistem informasi dengan kemampuan mendesain UI/UX.</p>
      <ul>
        <li><strong>Age:</strong> 20</li>
        <li><strong>Email:</strong> nna633720@gmail.com</li>
        <li><strong>Location:</strong> Bandung, Indonesisia</li>
        <li><strong>Education:</strong> S1 Sistem Informasi</li>
        <li><strong>Experience:</strong> Menjadi Panitia di Acara 17 Agustus</li>
        <li>Menjadi anggota Osis</li>
      </ul>

      <style jsx>{`
        section {
          padding: 80px 20px;
          background: linear-gradient(to right, #eaf4ec, #dcebe2);
          color: #2f4f4f;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          max-width: 900px;
          margin: 60px auto;
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h2 {
          font-size: 36px;
          text-align: center;
          color: #4f6f52;
          margin-bottom: 20px;
          position: relative;
        }

        h2::after {
          content: "";
          display: block;
          width: 60px;
          height: 4px;
          background: #a3b18a;
          margin: 10px auto 0;
          border-radius: 2px;
        }

        p {
          font-size: 20px;
          text-align: center;
          color: #607d5a;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        li {
          font-size: 18px;
          color: #4e6655;
          background: #f6fdf7;
          padding: 16px 20px;
          border-left: 6px solid #8fb996;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        li:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          section {
            padding: 50px 15px;
          }

          h2 {
            font-size: 30px;
          }

          p {
            font-size: 18px;
          }

          li {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 26px;
          }

          p {
            font-size: 16px;
          }

          li {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
