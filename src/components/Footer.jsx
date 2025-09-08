import { FaInstagram, FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-800 mt-6">
      <div className="container mx-auto px-4 text-center">
        <h5 className="text-2xl font-bold text-white">NadhimDev</h5>
        <p className="text-gray-300 mt-2 max-w-xl mx-auto">
          Komunitas Teknologi yang modern, solid, dan terbuka untuk semua kalangan. 
          Tempat belajar, berbagi, dan berkolaborasi membangun masa depan digital.
        </p>

        <div className="flex justify-center gap-6 mt-6 text-gray-400 text-xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://najualtemplate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGlobe />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} NadhimDev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
