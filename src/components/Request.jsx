import React from "react";
import { motion } from "framer-motion";

const paketHarga = [
  {
    nama: "Starter Web",
    harga: "Rp 499.000",
    fitur: [
      "Landing Page Siap Pakai",
      "Mobile Friendly & Fast Loading",
      "Domain .my.id Gratis",
      "Siap Upload ke Hosting",
    ],
  },
  {
    nama: "Smart Seller",
    harga: "Rp 999.000",
    fitur: [
      "Website Katalog Template",
      "Halaman Produk + Checkout Manual",
      "Domain .com 1 Tahun",
      "SEO & Mobile Optimized",
    ],
  },
  {
    nama: "UI/UX Design",
    harga: "Rp 799.000",
    fitur: [
      "Desain Website/Template Eksklusif",
      "Figma File + Preview Interaktif",
      "2x Revisi Desain",
      "Siap Dipakai Developer/Sendiri",
    ],
  },
];


export default function Harga() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200" id="harga">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Paket Pembuatan Website</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {paketHarga.map((paket, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 border-t-4 border-blue-600 hover:border-yellow-400 p-8"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{paket.nama}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-6">{paket.harga}</p>
              <ul className="text-left space-y-2 mb-8 text-gray-700">
                {paket.fitur.map((fitur, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500">✔️</span>
                    <span>{fitur}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20paket%20${paket.nama}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-yellow-400 text-white font-medium py-2 px-6 rounded-full transition"
              >
                Beli Sekarang
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
