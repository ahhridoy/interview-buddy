import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
