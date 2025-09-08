import { useState } from "react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/banner.png')" }}
    >
      {/* Overlay gelap transparan */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten */}
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 p-6">
        {/* Teks */}
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bangun{" "}
            <span className="text-yellow-400">
              Skill Digital & Karier Teknologi
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Belajar coding dengan cara praktis, ikuti kelas teknologi interaktif,
            dan dapatkan wawasan terbaru seputar dunia IT. Mulai perjalananmu
            menuju generasi digital yang siap bersaing di era masa depan!
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#katalog"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition shadow"
            >
              Mulai Belajar
            </a>
            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20kelas%20teknologi%20anda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition shadow"
            >
              Gabung Komunitas
            </a>
          </div>
        </div>

        {/* Ilustrasi */}
        <div className="flex-1 flex justify-center">
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-yellow-400 to-yellow-500 w-full max-w-sm transition-all duration-500 hover:rotate-[-1deg] hover:scale-105 hover:shadow-2xl transform">
            <div className="relative bg-white rounded-xl overflow-hidden w-full h-full shadow-lg">
              <img
                src="/img/foto.png"
                alt="Ilustrasi Website Edukasi"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <h3 className="text-white text-lg font-semibold">
                  Muhammad Nadhim Alim
                </h3>
                <p className="text-white text-sm">
                  Founder & CEO of DevNalim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


