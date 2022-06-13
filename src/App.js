import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing/Pricing";
import HomeDashboard from "./pages/HomeDashboard/HomeDashboard";
import BookInterview from "./pages/BookInterview/BookInterview";
import BuyCredits from "./pages/BuyCredits/BuyCredits";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="dashboard" element={<HomeDashboard />} />
        <Route path="book-interview" element={<BookInterview />} />
        <Route path="buy-credits" element={<BuyCredits />} />
        <Route path="my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
