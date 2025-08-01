import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-blue-700">NadhimDev</span>
        </div>

        <ul className="hidden md:flex gap-6 items-center text-gray-800 font-medium">
          <li><a href="#beranda" className="hover:text-blue-600 transition">Beranda</a></li>
          <li><a href="#katalog" className="hover:text-blue-600 transition">Katalog Template</a></li>
          <li><a href="#testimoni" className="hover:text-blue-600 transition">Testimoni</a></li>
        </ul>

        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20template%20website"
          target="_blank"
          className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition shadow"
        >
          Beli via WhatsApp
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-800">
          {open ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 bg-white shadow">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <li><a href="#beranda" onClick={() => setOpen(false)}>Beranda</a></li>
            <li><a href="#katalog" onClick={() => setOpen(false)}>Katalog Template</a></li>
            <li><a href="#harga" onClick={() => setOpen(false)}>Harga</a></li>
            <li><a href="#testimoni" onClick={() => setOpen(false)}>Testimoni</a></li>
            <li><a href="#kontak" onClick={() => setOpen(false)}>Kontak</a></li>
          </ul>
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20template%20website"
            target="_blank"
            className="mt-4 block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition shadow"
          >
            Beli via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
