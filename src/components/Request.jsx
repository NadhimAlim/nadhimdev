import { FaTags } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const paketMember = [
  {
    nama: "Free Member",
    harga: "Rp 0",
    fitur: [
      "Akses grup komunitas Telegram",
      "Ikut sharing session bulanan",
      "Update info & artikel teknologi",
      "Networking dengan sesama member",
    ],
    paid: false,
  },
  {
    nama: "Premium Member",
    harga: "Rp 99.000 / bulan",
    fitur: [
      "Semua fitur Free Member",
      "Mentoring 1-on-1 tiap bulan",
      "Project kolaborasi komunitas",
      "Akses event & workshop eksklusif",
      "Prioritas networking dengan praktisi industri",
    ],
    paid: true,
  },
];

export default function HargaJoin() {
  const [kode, setKode] = useState("");

  return (
    <section className="py-20 bg-black" id="harga">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Paket Join Komunitas DevNalim
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {paketMember.map((paket, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600 hover:border-yellow-400 p-8 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {paket.nama}
              </h3>
              <p
                className={`text-3xl font-bold mb-6 ${
                  paket.harga === "Rp 0" ? "text-green-600" : "text-blue-600"
                }`}
              >
                {paket.harga}
              </p>
              <ul className="text-left space-y-2 mb-8 text-gray-700 flex-1">
                {paket.fitur.map((fitur, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500">✔️</span>
                    <span>{fitur}</span>
                  </li>
                ))}
              </ul>

              {/* Khusus berbayar ada kode promo */}
              {paket.paid && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 bg-blue-200 border border-blue-500 rounded-lg px-3 py-2">
                    <FaTags className="text-blue-400" />
                    <input
                      type="text"
                      value={kode}
                      onChange={(e) => setKode(e.target.value)}
                      placeholder="Masukkan Kode Promo"
                      className="flex-1 bg-transparent outline-none text-black placeholder-blue-300"
                    />
                  </div>
                </div>
              )}

              <a
                href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20join%20${
                  paket.nama
                }${paket.paid && kode ? "%20dengan%20kode%20" + kode : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block font-medium py-2 px-6 rounded-lg transition ${
                  paket.harga === "Rp 0"
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-blue-600 hover:bg-yellow-400 text-white"
                }`}
              >
                {paket.harga === "Rp 0" ? "Join Gratis" : "Join Sekarang"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
