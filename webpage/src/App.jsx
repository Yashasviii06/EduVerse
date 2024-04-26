import React from "react";
import { Route, Routes , Navigate} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App=()=>{
  return(
    <>
    <Navbar />
      {/* <h1>helloooo</h1> */}
      <Routes>
           <Route exact path="/" Component={Home} />
           <Route exact path="/about" Component={About} />
           <Route exact path="/contact" Component={Contact} />
           <Route exact path="/service" Component={Service} />
           <Route path="*" Component={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;