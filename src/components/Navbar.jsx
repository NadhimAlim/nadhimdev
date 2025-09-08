import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const menuItems = [
    { label: "Beranda", action: () => handleScrollTo("beranda") },
    { label: "Course", link: "/course" },
    { label: "News", link: "/berita" },
    { label: "Jual Template", link: "/katalog" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-blue-700">Suara Teknologi</span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 items-center text-gray-800 font-medium">
          {menuItems.map((item, i) => (
            <li key={i}>
              {item.link ? (
                <Link
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={item.action}
                  className="text-white hover:text-blue-600 transition"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/login"
          className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition shadow"
        >
          Login Sekarang
        </Link>

        {/* Mobile Toggle */}
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

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white shadow">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            {menuItems.map((item, i) => (
              <li key={i}>
                {item.link ? (
                  <Link
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className="hover:text-blue-600 transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="w-full text-left hover:text-blue-600 transition"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/login"
            className="mt-4 block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition shadow"
          >
            Login Sekarang
          </Link>
        </div>
      )}
    </nav>
  );
}
