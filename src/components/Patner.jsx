"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// import style swiper
import "swiper/css";

export default function Partner() {
  const partners = [
    { name: "Google.org", logo: "/img/google.png" },
    { name: "AVPN", logo: "/img/avpn.png" },
    { name: "ADB", logo: "/img/adb.png" },
    { name: "Kemnaker", logo: "/img/kemnaker.png" },
    { name: "Kemenkeu", logo: "/img/kemenkeu.png" },
  ];

  return (
    <section id="partner" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
          Suara Teknologi Dipercaya Oleh Banyak Institusi, Brand Besar, <br />
          Dan Komunitas Teknologi Untuk Membangun Ekosistem Yang Berdampak.
        </h2>

        {/* Slider Partner */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000} // makin kecil makin cepat
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="mb-10"
        >
          {partners.concat(partners).map((partner, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Deskripsi kecil */}
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Penghargaan ini jadi bukti komitmen kami bukan cuma bikin program
          belajar, tapi membangun ekosistem teknologi yang berdampak.
        </p>
      </div>
    </section>
  );
}
