import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  HomePage from  './components/Home'
import  AboutPage from  './components/About'
import  ContactPage from  './components/Contact'


function App() {
  return (
    <BrowserRouter>
    
     <div >
        <Navbar />
    </div>
    <Routes>

      <Route path="/" element={ <HomePage />} />
      <Route path="/about" element={ <AboutPage />} />
      <Route path="/contact" element={ <ContactPage />} />
      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
