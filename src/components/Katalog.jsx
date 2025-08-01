import { useState } from "react";

const templates = [
  {
    title: "Template Landing Page Portofolio",
    description:
      "Cocok Untuk Yang Sedang Belajar Coding Bisa Menggunakan Template Ini.",
    price: "Rp149.000",
    demo: "https://nadhim-alim10.vercel.app/",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Bisnis",
    image: "./img/websiteportofolio1.png",
    category: "website",
  },
  {
    title: "Template Landing Page Portofolio",
    description:
      "Cocok Untuk Yang Sedang Belajar Coding Bisa Menggunakan Template Ini.",
    price: "Rp55.000",
    demo: "https://sicepat-express-btxg72k7r-nadhimalims-projects.vercel.app/",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Bisnis",
    image: "./img/websiteportophp.png",
    category: "website",
  },
  {
    title: "Template Figma Sekolah Integrasi Guru, Siswa, Orang Tua",
    description: "Tampilkan karya dan pengalamanmu dengan desain elegan.",
    price: "Rp160.000",
    demo: "https://www.figma.com/design/Tqf27zxaEISAJctdanlxSn/Untitled?node-id=1-2&t=KBHxrfCx1NHNV8aw-0",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Portofolio",
    image: "./img/desainfigma.png",
    category: "desain",
  },
  {
    title: "Template Website Landing Page Les Privat",
    description:
      "Untuk kursus online, pelatihan, dan kelas privat berbasis web.",
    price: "Rp120.000",
    demo: "https://edutech-lcpq80t6s-nadhimalims-projects.vercel.app/",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Edukasi",
    image: "./img/websiteportofolio2.png",
    category: "website",
  },
  {
    title: "Template Organisasi HIPMI PT UAD",
    description:
      "Template modern untuk organisasi dan UMKM, dilengkapi sistem WordPress untuk berita dan landing page profesional.",
    price: "Rp299.000",
    demo: "",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Bisnis",
    image: "img/websiteorganisasihipmi.png",
    category: "website",
  },
  {
    title: "Template Portofolio Penjualan Tiket",
    description: "Tampilkan karya dan pengalamanmu dengan desain elegan.",
    price: "Rp129.000",
    demo: "https://www.figma.com/design/oVYAui8lffJ0yeSBApbmgS/Untitled?node-id=0-1&t=uPmDxEMfR0tGxEd9-1",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Portofolio",
    image: "./img/desainfigma2.png",
    category: "desain",
  },
  {
    title: "Template Edukasi",
    description:
      "Untuk kursus online, pelatihan, dan kelas privat berbasis web.",
    price: "Rp179.000",
    demo: "https://najualtemplate.vercel.app/demo/edukasi",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Edukasi",
    image: "https://source.unsplash.com/600x400/?education,landingpage",
    category: "website",
  },
  {
    title: "Template Bisnis",
    description:
      "Cocok untuk UMKM, personal branding, dan landing page profesional.",
    price: "Rp149.000",
    demo: "https://najualtemplate.vercel.app/demo/bisnis",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Bisnis",
    image: "https://source.unsplash.com/600x400/?website,design",
    category: "website",
  },
  {
    title: "Template Portofolio",
    description: "Tampilkan karya dan pengalamanmu dengan desain elegan.",
    price: "Rp129.000",
    demo: "https://najualtemplate.vercel.app/demo/portofolio",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Portofolio",
    image: "https://source.unsplash.com/600x400/?portfolio,website",
    category: "desain",
  },
  {
    title: "Template Edukasi",
    description:
      "Untuk kursus online, pelatihan, dan kelas privat berbasis web.",
    price: "Rp179.000",
    demo: "https://najualtemplate.vercel.app/demo/edukasi",
    wa: "https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Template%20Edukasi",
    image: "https://source.unsplash.com/600x400/?education,landingpage",
    category: "website",
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
    <section id="katalog" className="py-20 bg-gray-100">
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
      </div>
    </section>
  );
}
