"use client";

import Navbar from "../components/Navbar"; // Mengimpor Navbar dari folder components
import Home from "./Home"; // Mengimpor Home dari folder pages
import About from "./About"; // Mengimpor About dari folder pages
import Services from "./Services"; // Mengimpor Services dari folder pages

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
      </main>
    </div>
  );
}
