import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./shared/components/layout/Navbar/Navbar";
import Footer from "./shared/components/layout/Footer";
import Home from "./features/cgpa-calculator/pages/Home";
import About from "./features/documentation/pages/About";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
