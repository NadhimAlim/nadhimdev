import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KatalogTemplate from "./components/Katalog";
import Testimoni from "./components/Testimoni";
import Request from "./components/Request";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />
      <KatalogTemplate />
      <Request />
      <Testimoni />
      <Footer />
      
    </div>
  );
}

export default App;
