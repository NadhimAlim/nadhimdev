import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const langkahBelajar = [
  {
    nomor: "1",
    judul: "Pilih Jalur Belajarmu",
    deskripsi:
      "Temukan jalur belajar yang sesuai dengan minat dan tujuanmu",
  },
  {
    nomor: "2",
    judul: "Mulai Belajar",
    deskripsi:
      "Ikuti panduan step-by-step yang mudah diikuti dan nggak bikin bingung",
  },
  {
    nomor: "3",
    judul: "Bangun Skill & Portofolio",
    deskripsi:
      "Bangun portofolio dan kuasai skill siap kerja bareng mentor profesional",
  },
];

export default function LangkahBelajar() {
  return (
    <section className="py-20 bg-teal-800 text-white" style={{ background: "black"}} id="langkah">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Bagaimana Cara Memulainya?
        </h2>
        <p className="mb-12 text-gray-200">
          Ikuti 3 langkah mudah untuk belajar di Komunitas DevNalim
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {langkahBelajar.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-teal-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl font-bold text-teal-300 mb-4">
                {step.nomor}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.judul}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {step.deskripsi}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Info tambahan */}
        <p className="mt-12 text-sm text-gray-200 max-w-3xl mx-auto">
          Di <span className="font-semibold">Komunitas DevNalim</span>, kamu bisa belajar
          bersama mentor praktisi dengan materi yang selalu up-to-date.  
          Akses komunitas ini berlaku <span className="text-teal-300 font-bold">selamanya</span>,  
          jadi kamu tetap bisa diskusi, networking, dan upgrade skill kapanpun tanpa batas waktu.
        </p>

        {/* Tombol Join Sekarang */}
        <motion.a
          href="#join" // arahkan ke section lain (misalnya form pendaftaran / harga)
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-yellow-300 transition"
        >
          Join Sekarang
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <FaArrowDown />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
