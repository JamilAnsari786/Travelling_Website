import "./App.css";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import MoonYatriPage from "./components/aboutus/MoonYatriPage";
import TripDetails from "./components/trips/TripDetails";
import PrivacyPolicyPage from "./components/PrivacyPolicy/Privacypolicy";
import TermsConditionsPage from "./components/TermsConditionsPage/TermsConditionsPage";
import PricingPolicyPage from "./components/PricingPolicy/PricingPolicyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus/moonyatri" element={<MoonYatriPage />} />
        <Route path="/details/:id" element={<TripDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/pricing-policy" element={<PricingPolicyPage />} />
      </Routes>
    </>
  );
}

export default App;
