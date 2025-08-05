import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100); // kasih delay agar halaman benar-benar sudah pindah
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-blue-700">NadhimDev</span>
        </div>

        <ul className="hidden md:flex gap-6 items-center text-gray-800 font-medium">
          <li>
            <button
              onClick={() => handleScrollTo("beranda")}
              className="hover:text-blue-600 transition"
            >
              Beranda
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("katalog")}
              className="hover:text-blue-600 transition"
            >
              Katalog Template
            </button>
          </li>
          <li>
            <Link
              to="/berita"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition"
            >
              Berita
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("testimoni")}
              className="hover:text-blue-600 transition"
            >
              Kata Mereka
            </button>
          </li>
        </ul>

        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20template%20website"
          target="_blank"
          className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition shadow"
        >
          Beli via WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? (
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 bg-white shadow">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <li>
              <a href="#beranda" onClick={() => setOpen(false)}>
                Beranda
              </a>
            </li>
            <li>
              <a href="#katalog" onClick={() => setOpen(false)}>
                Katalog Template
              </a>
            </li>
            <li>
              <Link
                to="/berita"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Berita
              </Link>
            </li>

            <li>
              <a href="#testimoni" onClick={() => setOpen(false)}>
                Kata Mereka
              </a>
            </li>
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
