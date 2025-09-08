"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// import style swiper
import "swiper/css";
import "swiper/css/navigation";

export default function ProgramSection() {
  const programs = [
    {
      title: "KelasFullstack",
      desc: "Platform seperti Netflix untuk belajar coding, semua yang kamu butuhkan untuk belajar coding web development.",
      img: "/img/fullstack.jpg",
    },
    {
      title: "KelasFullstack",
      desc: "Platform seperti Netflix untuk belajar coding, semua yang kamu butuhkan untuk belajar coding web development.",
      img: "/img/fullstack.jpg",
    },
    {
      title: "KelasFullstack",
      desc: "Platform seperti Netflix untuk belajar coding, semua yang kamu butuhkan untuk belajar coding web development.",
      img: "/img/fullstack.jpg",
    },
    {
      title: "JagoanSiber",
      desc: "Belajar jadi white hacker mulai dari dasar dibimbing mentor profesional tersertifikasi internasional.",
      img: "/img/cyber.jpg",
    },
    {
      title: "RuangAI",
      desc: "Beasiswa belajar Generative AI secara online untuk siapapun yang ingin naik level di era AI.",
      img: "/img/ai.jpg",
    },
    {
      title: "Developer Handal",
      desc: "Kompetisi dan beasiswa belajar coding online yang berhadiah puluhan juta rupiah.",
      img: "/img/dev.jpg",
    },
  ];

  return (
    <section className="relative py-16 bg-[#F3FAFB]">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
            
            Pilih Program Belajar yang Sesuai <br/>dengan Rencana Masa Depanmu
          </h2>

          <button className="border border-teal-500 text-teal-600 px-5 py-2 rounded-full hover:bg-teal-50 transition w-full sm:w-auto text-center">
            Lihat Semua Event
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 4 }, // desktop
          }}
        >
          {programs.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden mt-6">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800">{p.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{p.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol navigasi */}
        <button className="btn-prev absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-3 hover:bg-gray-100 transition z-10">
          <FaChevronLeft className="text-teal-600" />
        </button>
        <button className="btn-next absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-3 hover:bg-gray-100 transition z-10">
          <FaChevronRight className="text-teal-600" />
        </button>
      </div>
    </section>
  );
}
