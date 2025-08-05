import { FaInstagram, FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8  border-t border-gray-200 ">
      <div className="container mx-auto px-4 text-center">
        <h5 className="text-2xl font-bold text-gray-800">NadhimDev</h5>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Template website modern dan profesional untuk bisnismu. Mudah digunakan, bisa di-custom, dan cocok untuk semua kalangan.
        </p>

        <div className="flex justify-center gap-6 mt-6 text-gray-600 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaWhatsapp />
          </a>
          <a href="https://najualtemplate.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaGlobe />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} NAJualTemplate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
