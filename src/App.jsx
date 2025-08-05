import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import KatalogTemplate from "./components/Katalog";
import Testimoni from "./components/Testimoni";
import Request from "./components/Request";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Berita from "./pages/Berita"; // <-- halaman baru

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <KatalogTemplate />
      <Request />
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
      </Routes>
    </Router>
  );
}

export default App;
