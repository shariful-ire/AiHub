import { ToastContainer } from "react-toastify";
import { Suspense, useState } from "react";
import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Model from "./components/AiModel/Model";


function App() {
  const getModel = async () => {
    const res = await fetch("./AiData.json");
    return res.json();
  };

  const modelPromise = getModel();


  const [modelCard, setModelCard] = useState("Model");

  return (
    <>
      <NavBar />
      <Banner />

      <div className="flex justify-center gap-3 my-8">
        <button
          onClick={() => setModelCard("Model")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            modelCard === "Model"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Model
        </button>

        <button
          onClick={() => setModelCard("Cart")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            modelCard === "Cart"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Cart
        </button>
      </div>

      {modelCard === "Model" ? (
        <Suspense fallback={<h2 className="text-center">Loading...</h2>}>
          <Model modelPromise={modelPromise} />
        </Suspense>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold">Selected Models</h2>

        </div>
      )}

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;