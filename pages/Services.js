'use client';

import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <h2>My Services</h2>
      <div className="services-container">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>Membuat website yang responsif dan menarik dengan menggunakan teknologi React, Next.js, dan Node.js.</p>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>Mendesain website yang menarik, ramah pengguna, dan memberikan pengalaman yang nyaman.</p>
        </div>
        <div className="service-item">
          <h3>SEO Optimization</h3>
          <p>Memastikan website kamu muncul di hasil pencarian dengan optimalisasi SEO yang tepat.</p>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 60px 20px;
          background: linear-gradient(to right, #eaf4ec, #dcebe2);
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          max-width: 1100px;
          margin: 60px auto;
        }

        h2 {
          font-size: 36px;
          text-align: center;
          color: #4f6f52;
          margin-bottom: 40px;
        }

        .services-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .service-item {
          background-color: #f6fdf7;
          padding: 24px;
          flex: 1 1 calc(33.333% - 20px);
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
        }

        .service-item h3 {
          font-size: 24px;
          color: #55786d;
          margin-bottom: 12px;
        }

        .service-item p {
          font-size: 16px;
          color: #607d5a;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-container {
            flex-direction: column;
            align-items: center;
          }

          .service-item {
            width: 90%;
          }

          h2 {
            font-size: 30px;
          }

          .service-item h3 {
            font-size: 22px;
          }

          .service-item p {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 26px;
          }

          .service-item h3 {
            font-size: 20px;
          }

          .service-item p {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
