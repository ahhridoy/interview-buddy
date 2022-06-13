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
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="dashboard">
            <Route index element={<HomeDashboard />} />
          </Route>
          <Route path="book-interview">
            <Route index element={<BookInterview />} />
          </Route>
          <Route path="buy-credits">
            <Route index element={<BuyCredits />} />
          </Route>
          <Route path="my-profile">
            <Route index element={<MyProfile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
