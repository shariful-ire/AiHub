import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <NavBar></NavBar>
     <Banner></Banner>


     <Footer></Footer>
     
      <ToastContainer />
    </>
  );
}

export default App;
