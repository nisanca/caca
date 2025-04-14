'use client'; // Menandakan ini adalah Client Component

import React from 'react';
import Navbar from '../components/Navbar'; // Import komponen Navbar
import Home from '../pages/Home'; // Import komponen Home
import About from '../pages/About'; // Import komponen About
import Services from '../pages/Services'; // Import komponen Services
import Contact from '../pages/Contact'; // Impory Komponen Contact


export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
}