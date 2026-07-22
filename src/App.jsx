import { toast, ToastContainer } from "react-toastify";
import { Suspense } from "react";
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

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Model modelPromise={modelPromise} />
      </Suspense>
      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
