import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const templates = [
  {
    title: "Template Landing Page Portofolio",
    description:
      "Cocok Untuk Yang Sedang Belajar Coding Bisa Menggunakan Template Ini.",
    price: "Rp149.000",
    demo: "https://nadhim-alim10.vercel.app/",
    image: "./img/websiteportofolio1.png",
    category: "website",
  },
  {
    title: "Template Landing Page Portofolio",
    description:
      "Cocok Untuk Yang Sedang Belajar Coding Bisa Menggunakan Template Ini.",
    price: "Rp55.000",
    demo: "https://sicepat-express-btxg72k7r-nadhimalims-projects.vercel.app/",
    image: "./img/websiteportophp.png",
    category: "website",
  },
  {
    title: "Template Figma Sekolah Integrasi Guru, Siswa, Orang Tua",
    description: "Tampilkan karya dan pengalamanmu dengan desain elegan.",
    price: "Rp160.000",
    demo: "https://www.figma.com/design/Tqf27zxaEISAJctdanlxSn/Untitled?node-id=1-2",
    image: "./img/desainfigma.png",
    category: "desain",
  },
  {
    title: "Template Website Landing Page Les Privat",
    description:
      "Untuk kursus online, pelatihan, dan kelas privat berbasis web.",
    price: "Rp120.000",
    demo: "https://edutech-lcpq80t6s-nadhimalims-projects.vercel.app/",
    image: "./img/websiteportofolio2.png",
    category: "website",
  },
  {
    title: "Template Organisasi HIPMI PT UAD",
    description:
      "Template modern untuk organisasi dan UMKM, dilengkapi sistem WordPress untuk berita dan landing page profesional.",
    price: "Rp299.000",
    demo: "",
    image: "img/websiteorganisasihipmi.png",
    category: "website",
  },
  {
    title: "Template Portofolio Penjualan Tiket",
    description: "Tampilkan karya dan pengalamanmu dengan desain elegan.",
    price: "Rp129.000",
    demo: "https://www.figma.com/design/oVYAui8lffJ0yeSBApbmgS/Untitled?node-id=0-1",
    image: "./img/desainfigma2.png",
    category: "desain",
  },
];

export default function KatalogTemplate() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter
  const filteredTemplates = templates.filter((t) => {
    const matchKeyword =
      t.title.toLowerCase().includes(keyword.toLowerCase()) ||
      t.description.toLowerCase().includes(keyword.toLowerCase());
    const matchCategory = category === "all" || t.category === category;
    return matchKeyword && matchCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTemplates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredTemplates.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-4 mt-10">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Katalog Template
          </h2>

          {/* Filter & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <input
              type="text"
              placeholder="Cari template..."
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                setCurrentPage(1);
              }}
            />
            <select
              className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">Semua Kategori</option>
              <option value="website">Website</option>
              <option value="desain">Desain</option>
            </select>
          </div>

          {/* Katalog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((t, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition"
              >
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {t.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{t.description}</p>
                  <p className="text-blue-700 font-bold text-lg mb-4">
                    {t.price}
                  </p>
                  <div className="mt-auto space-y-2">
                    <a
                      href={t.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
                    >
                      Lihat Demo
                    </a>
                    <a
                      href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                        `Halo saya mau pesan ${t.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-md transition"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md text-sm font-medium border ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Request Harga Section */}
          {/* Request Harga Section */}
          <section className=" py-20 mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Request <span className="text-blue-600">Harga & Paket</span>
              </h2>
              <p className="text-gray-600 mb-12">
                Wujudkan ide kreatifmu lewat layanan kami — website & UI/UX,
                plus desain grafis media sosial yang profesional.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Website Landing Page */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Website Landing Page
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">
                    Mulai Rp 500.000
                  </p>
                  <ul className="text-left text-gray-700 space-y-3 mb-6">
                    <li>✔ Landing page profesional</li>
                    <li>✔ Responsive di semua device</li>
                    <li>✔ Integrasi form & CTA</li>
                    <li>✔ 2x Revisi gratis</li>
                  </ul>
                  <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    Request Sekarang
                  </button>
                </div>

                {/* Website E-Commerce */}
                <div className="bg-white border-2 border-blue-600 rounded-2xl shadow-lg p-8 flex flex-col relative hover:shadow-xl transition">
                  <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg">
                    Terpopuler
                  </span>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Website E-Commerce
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">
                    Mulai Rp 2.000.000
                  </p>
                  <ul className="text-left text-gray-700 space-y-3 mb-6">
                    <li>✔ Toko online custom</li>
                    <li>✔ Fitur pembayaran & keranjang</li>
                    <li>✔ Dashboard admin</li>
                    <li>✔ Support teknis 1 bulan</li>
                  </ul>
                  <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    Request Sekarang
                  </button>
                </div>

                {/* UI/UX & Desain */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    UI/UX & Desain Grafis
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">
                    Mulai Rp 300.000
                  </p>
                  <ul className="text-left text-gray-700 space-y-3 mb-6">
                    <li>✔ UI/UX untuk aplikasi & website</li>
                    <li>✔ Desain feed & poster sosial media</li>
                    <li>✔ Brand kit sederhana</li>
                    <li>✔ 3x Revisi gratis</li>
                  </ul>
                  <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    Request Sekarang
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer className="mt-20 w-full" />
    </div>
  );
}
