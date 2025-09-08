import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = [
  {
    title: "Security For Developer (Bangun aplikasimu menjadi super aman)",
    date: "30 Agustus 2025",
    type: "EVENT ONLINE",
    status: "Selesai",
    price: "IDR 100.000",
    image: "./img/websiteportofolio1.png",
  },
  {
    title: "Webinar Launching Beasiswa RuangAI Chapter #1",
    date: "28 Mei 2025",
    type: "EVENT ONLINE",
    status: "Selesai",
    price: "Gratis",
    image: "./img/websiteportophp.png",
  },
  {
    title: "Beasiswa Belajar AI dari Nol Chapter #1 dari CODEPOLITAN",
    date: "21 Januari 2025",
    type: "EVENT ONLINE",
    status: "Selesai",
    price: "Gratis",
    image: "./img/desainfigma.png",
  },
  {
    title: "Event AI Terbesar di Awal 2025, Alibaba Cloud Developer Summit",
    date: "21 Januari 2025",
    type: "EVENT OFFLINE",
    status: "Selesai",
    price: "Gratis",
    image: "./img/websiteorganisasihipmi.png",
  },
];

export default function EventList() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("terbaru"); // default terbaru

  // Konversi tanggal ke format Date agar bisa diurutkan
  const parseDate = (dateStr) => {
    const bulan = {
      Januari: 0,
      Februari: 1,
      Maret: 2,
      April: 3,
      Mei: 4,
      Juni: 5,
      Juli: 6,
      Agustus: 7,
      September: 8,
      Oktober: 9,
      November: 10,
      Desember: 11,
    };

    const [day, month, year] = dateStr.split(" ");
    return new Date(year, bulan[month], parseInt(day));
  };

  // Filter berdasarkan search
  const filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  // Urutkan berdasarkan pilihan
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    return sortOrder === "terbaru"
      ? dateB - dateA // descending
      : dateA - dateB; // ascending
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-1 py-20 px-4 max-w-7xl mx-auto mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Ikuti Berbagai Event Komunitas Yang Bikin <br />
          Kamu Tetap Relevan Di Industri
        </h2>

        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="🔍 Cari event berdasarkan judul..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Sort Button */}
          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder("terbaru")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                sortOrder === "terbaru"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Terbaru
            </button>
            <button
              onClick={() => setSortOrder("terlama")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                sortOrder === "terlama"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Terlama
            </button>
          </div>
        </div>

        {/* Grid Card */}
        {sortedEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedEvents.map((e, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col transition transform hover:-translate-y-2"
              >
                {/* Gambar */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Badge Tipe Event */}
                  <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {e.type}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {e.title}
                  </h3>

                  <p className="text-sm text-gray-600 flex items-center gap-2 mb-3">
                    📅 {e.date}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    {/* Harga */}
                    <p className="text-red-500 font-semibold">{e.price}</p>

                    {/* Status */}
                    <span
                      className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                        e.status === "Selesai"
                          ? "bg-gray-200 text-gray-700"
                          : "bg-green-200 text-green-700"
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>

                  {/* Tombol */}
                  <a
                    href="#"
                    className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium text-center px-4 py-2 rounded-lg transition"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            🙏 Event tidak ditemukan.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
