"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// import style swiper
import "swiper/css";
import "swiper/css/navigation";

export default function EventSection() {
  const events = [
    {
      title: "Security For Developer (Bangun aplikasimu menjadi super aman)",
      date: "30 Agustus 2025",
      type: "EVENT ONLINE",
      status: "Selesai",
      price: "Gratis",
      img: "/img/websiteportofolio1.png",
    },
    {
      title: "Webinar Launching Beasiswa RuangAI Chapter #1",
      date: "28 Mei 2025",
      type: "EVENT ONLINE",
      status: "Selesai",
      price: "Gratis",
      img: "/img/websiteportophp.png",
    },
    {
      title: "Beasiswa Belajar AI dari Nol Chapter #1 dari CODEPOLITAN",
      date: "21 Januari 2025",
      type: "EVENT ONLINE",
      status: "Selesai",
      price: "Gratis",
      img: "/img/desainfigma.png",
    },
    {
      title: "Event AI Terbesar di Awal 2025, Alibaba Cloud Developer Summit",
      date: "21 Januari 2025",
      type: "EVENT OFFLINE",
      status: "Selesai",
      price: "Gratis",
      img: "/img/websiteorganisasihipmi.png",
    },
  ];

  return (
    <section className="relative py-16 bg-[#F3FAFB]">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
            Ikuti Berbagai Event Komunitas Yang Bikin <br />
            Kamu Tetap Relevan Di Industri
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
          {events.map((e, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden mt-6 flex flex-col border border-gray-100">
                {/* Gambar + badge */}
                <div className="relative">
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {e.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2">
                    {e.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center mb-3">
                    📅 {e.date}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <p className="text-red-500 font-semibold text-sm uppercase">
                      {e.price}
                    </p>
                    <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                      {e.status}
                    </span>
                  </div>
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
