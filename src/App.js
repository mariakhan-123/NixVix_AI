import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import './App.css';
import Navbar from "./Common/Navbar/Navbar";
import Services from "./Services/Services";
import TechStack from "./Tech_Stack/Tech_Stack";
import Solutions from "./Solutions/Solutions";
import Footer from "./Common/Footer/Footer";
import ContactUs from "./Contact/ContactUs";
import CaseStudies from "./Case_Studies/CaseStudies";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact-us" element={<ContactUs />} />
         <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
