import { useState } from "react";

export default function Hero() {
  return (
    <section id="beranda" className="pt-24 md:pt-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Teks */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Jual Template Website{" "}
            <span className="text-blue-700">Modern & Profesional</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Dapatkan berbagai template website siap pakai untuk bisnismu. Desain
            menarik, harga terjangkau, dan mudah disesuaikan!
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#katalog"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition shadow"
            >
              Lihat Katalog
            </a>
            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20template%20anda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition shadow"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        {/* Ilustrasi */}
        <div className="flex-1 flex justify-center">
          {/* Wrapper gradasi */}
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-yellow-400 to-yellow-500 w-full max-w-sm transition-all duration-500 hover:rotate-[-1deg] hover:scale-105 hover:shadow-2xl transform">
            {/* Isi kartu */}
            <div className="relative bg-white rounded-xl overflow-hidden w-full h-full shadow-lg">
              <img
                src="/img/foto.png"
                alt="Ilustrasi Template Website"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <h3 className="text-white text-lg font-semibold">
                  Muhammad Nadhim Alim
                </h3>
                <p className="text-white text-sm">
                  Fullstack Web Developer & Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
