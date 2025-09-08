import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Testimoni from "./components/Testimoni";
import Request from "./components/Request";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Berita from "./pages/Berita"; // <-- halaman baru
import Kelas from "./components/Kelas"; // <-- KelasSection yang sudah ada
import Patner from "./components/Patner";
import Course1 from "./pages/course";
import Joinkomunitas from "./components/joinkomunitas";
import Courseutama from "./components/courseutama";
import "./app.css";

import Katalog1 from "./pages/Katalog";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Kelas /> 
      <Courseutama />
      <Joinkomunitas />
      <Request />
      <Patner />
      <Testimoni />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/katalog" element={<Katalog1 />} />
        <Route path="/course" element={<Course1 />} />
      </Routes>

    </Router>
  );
}

export default App;
