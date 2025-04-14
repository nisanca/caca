"use client";

import React, { useState } from "react";

const Home = () => {
  const [image, setImage] = useState("/profil.jpeg"); // default foto

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (
    <section id="home">
      <div
        className="profile-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginBottom: "20px" }}
      />

      <h1>Welcome to My CV Online</h1>
      <p>
        Hello! Saya Nisa Nurul A'in, seorang mahasiswa Sistem Informasi yang
        bersemangat dalam dunia teknologi.
      </p>

      <style jsx>{`
        section {
          padding: 80px 20px;
          background: linear-gradient(to right, #e0f7fa, #fff);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: background 0.3s ease;
        }

        :global(body.dark) section {
          background: linear-gradient(to right, #263238, #37474f);
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
          transition: color 0.3s;
        }

        :global(body.dark) h1 {
          color: white;
        }

        p {
          font-size: 20px;
          color: #555;
          max-width: 600px;
          transition: color 0.3s;
        }

        :global(body.dark) p {
          color: #eeeeee;
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
    </section>
  );
};

export default Home;
