// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Berita() {
//   const [berita, setBerita] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("terbaru");
//   const [page, setPage] = useState(1);
//   const beritaPerPage = 6;

//   // Ganti dengan URL WordPress kamu
//   const wordpressAPI = "http://localhost/wordpressjualweb/wp-json/wp/v2/posts?_embed";

//   useEffect(() => {
//     axios.get(wordpressAPI).then((res) => {
//       setBerita(res.data);
//     });
//   }, []);

//   const filtered = berita
//     .filter((b) =>
//       b.title.rendered.toLowerCase().includes(search.toLowerCase())
//     )
//     .sort((a, b) =>
//       sort === "terbaru"
//         ? new Date(b.date) - new Date(a.date)
//         : new Date(a.date) - new Date(b.date)
//     );

//   const totalPages = Math.ceil(filtered.length / beritaPerPage);
//   const startIndex = (page - 1) * beritaPerPage;
//   const currentPageData = filtered.slice(startIndex, startIndex + beritaPerPage);

//   return (
//     <>
//       <Navbar />
//       <main className="mt-[100px] pb-24 px-4 max-w-7xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold text-blue-700">Kumpulan Berita</h1>

//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Cari berita..."
//               className="border px-3 py-1 rounded-md"
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setPage(1);
//               }}
//             />

//             <select
//               className="border px-2 py-1 rounded-md"
//               value={sort}
//               onChange={(e) => {
//                 setSort(e.target.value);
//                 setPage(1);
//               }}
//             >
//               <option value="terbaru">Terbaru</option>
//               <option value="terlama">Terlama</option>
//             </select>
//           </div>
//         </div>

//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {currentPageData.map((berita) => (
//             <article key={berita.id} className="bg-white rounded shadow">
//               <img
//                 src={
//                   berita._embedded["wp:featuredmedia"]
//                     ? berita._embedded["wp:featuredmedia"][0].source_url
//                     : "https://via.placeholder.com/400x300"
//                 }
//                 alt={berita.title.rendered}
//                 className="w-full h-48 object-cover rounded-t"
//               />
//               <div className="p-4">
//                 <h2
//                   className="text-xl font-semibold"
//                   dangerouslySetInnerHTML={{ __html: berita.title.rendered }}
//                 />
//                 <p
//                   className="text-gray-700 mt-2 line-clamp-3"
//                   dangerouslySetInnerHTML={{ __html: berita.excerpt.rendered }}
//                 />
//                 <a
//                   href={berita.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 inline-block text-blue-600 hover:underline"
//                 >
//                   Baca Selengkapnya →
//                 </a>
//               </div>
//             </article>
//           ))}
//         </section>

//         <div className="flex justify-center mt-8 space-x-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               className={`px-3 py-1 border rounded ${
//                 i + 1 === page
//                   ? "bg-blue-600 text-white"
//                   : "hover:bg-blue-100"
//               }`}
//               onClick={() => setPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }
