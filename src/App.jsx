import { toast, ToastContainer } from "react-toastify";
import { Suspense, use ,useState} from "react";
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
      <div className="flex mx-auto gap-2 justify-center "> 
        <button className="btn btn-orange-300 p-4 rounded-full" onClick={}>Model</button>
        <button className="btn btn-orange-300 p-4 rounded-full " onClick={}>Cart</button>
      </div>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Model modelPromise={modelPromise} />
      </Suspense>
      <Footer></Footer>
     

      <ToastContainer />
    </>
  );
}

export default App;
