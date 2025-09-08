import { useState } from "react";

const data = [
  {
    question: "Apa keuntungan bergabung dengan komunitas teknologi ini?",
    answer:
      "Kamu bisa menambah relasi, belajar tren teknologi terbaru, dan berkolaborasi dengan sesama anggota.",
  },
  {
    question: "Apakah komunitas ini berbayar?",
    answer:
      "Tidak, komunitas ini gratis untuk semua orang yang tertarik dengan teknologi.",
  },
  {
    question: "Apakah ada event rutin yang diadakan?",
    answer:
      "Ya, kami mengadakan meetup, workshop, dan diskusi online setiap bulan.",
  },
  {
    question: "Apakah pemula bisa ikut bergabung?",
    answer:
      "Tentu! Komunitas ini terbuka untuk semua level, baik pemula maupun profesional.",
  },
  {
    question: "Bagaimana cara saya ikut berkontribusi?",
    answer:
      "Kamu bisa berbagi artikel, jadi pembicara di event, atau membantu project open-source komunitas.",
  },
  {
    question: "Apakah ada dukungan untuk networking dan karir?",
    answer:
      "Ya, kami menyediakan channel khusus untuk peluang kerja, magang, dan kolaborasi proyek.",
  },
];


export default function TestimoniAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="testimoni" className="py-20 bg-[#F3FAFB] text-black">
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
