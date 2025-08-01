import { useState } from "react";

const data = [
  {
    question: "Apakah template ini bisa di-custom sesuai brand saya?",
    detail:
      "Ingin menyesuaikan dengan warna dan logo bisnis saya.",
    answer:
      "Ya, kamu bisa ubah warna, font, dan konten sesuai brand kamu. Kami juga bisa bantu custom dengan biaya tambahan.",
  },
  {
    question: "Apakah pembayarannya sekali saja atau berlangganan?",
    detail: "Takut kena biaya bulanan atau tahunan.",
    answer:
      "Tidak, kamu hanya membayar sekali saja dan bisa gunakan template selamanya.",
  },
  {
    question: "Apakah saya bisa konsultasi setelah pembelian?",
    detail: "Saya butuh bantuan setelah beli.",
    answer:
      "Tentu! Kami sediakan support via WhatsApp untuk membantu install dan modifikasi ringan.",
  },
  {
    question: "Apakah bisa digunakan tanpa koneksi internet?",
    detail: "Saya ingin akses offline juga.",
    answer:
      "Bisa. Setelah di-download dan dipasang, template bisa digunakan secara offline.",
  },
  {
    question: "Apakah bisa digunakan untuk lebih dari 1 website?",
    detail: "Saya punya beberapa bisnis online.",
    answer:
      "Ya, template bisa digunakan di banyak website selama kamu pemiliknya sendiri.",
  },
  {
    question: "Apakah cocok untuk pemula tanpa pengalaman coding?",
    detail: "Saya belum pernah bikin website sebelumnya.",
    answer:
      "Sangat cocok! Template ini dirancang user-friendly dan tidak butuh skill teknis. Panduan lengkap tersedia.",
  },
];

export default function TestimoniAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="testimoni" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Apa Kata Mereka?
        </h2>

        <div className="space-y-4">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-md shadow-sm"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-start px-4 py-3 text-left text-gray-800 font-medium"
              >
                <span>
                  {item.question}
                  <br />
                  <small className="text-sm text-gray-500">{item.detail}</small>
                </span>
                <svg
                  className={`w-5 h-5 mt-1 transform transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
