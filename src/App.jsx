import "./App.css";
import About from "./Component/About/About";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import Slidera from "./Component/Slider/Slider";
import Test from "./Test";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24 text-center">
        <Slidera />
      </div>
      <About />

      <div className="flex justify-center items-center h-screen bg-gray-100 p-6">
        <Test />
      </div>
    </>
  );
}

export default App;
