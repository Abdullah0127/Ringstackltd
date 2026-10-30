import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/AboutUs";
import Technology from "../pages/Technology/Technology";
import Advertiser from "../pages/Advertiser/Advertiser";
import Publisher from "../pages/Publisher/Publisher";
import Offers from "../pages/Offers/Offers";
import BPO from "../pages/BPO/BPO";
import Resources from "../pages/Resources/Resources";
import Article from "../pages/Resources/Article";
import EDMNews from "../pages/EDMNews/EDMNews";
import Industries from "../pages/Industries/Industries";
import Insurance from "../pages/Industries/Insurance";
import FinancialServices from "../pages/Industries/FinancialServices";
import HomeServices from "../pages/Industries/HomeServices";
import Legal from "../pages/Industries/Legal";
import Travel from "../pages/Industries/Travel";
import RealEstate from "../pages/Industries/RealEstate";
import AdvertiserLogin from "../logins/AdvertiserLogin";
import PublisherLogin from "../logins/PublisherLogin";
import AdvertiserRegister from "../logins/AdvertiserRegister";
import PublisherRegister from "../logins/PublisherRegister";
import AdvertiserDashboard from "../pages/dashboard/AdvertiserDashboard";
import PublisherDashboard from "../pages/dashboard/PublisherDashboard";
import Contact from "../pages/Contact/Contact";
import NotFoundPage from "../pages/NotFound/NotFound";
import { AuthProvider, useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/advertiser-login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/advertiser-login" replace />;
  }

  return children;
}

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <Routes>
          {/* Public website pages use MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/advertiser" element={<Advertiser />} />
            <Route path="/publisher" element={<Publisher />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/bpo-services" element={<BPO />} />
            <Route path="/news" element={<EDMNews />} />
            <Route path="/edm-news" element={<Navigate to="/news" replace />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/insurance" element={<Insurance />} />
            <Route
              path="/industries/financial-services"
              element={<FinancialServices />}
            />
            <Route
              path="/industries/home-services"
              element={<HomeServices />}
            />
            <Route path="/industries/legal" element={<Legal />} />
            <Route path="/industries/travel" element={<Travel />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/page/:page" element={<Resources />} />
            <Route path="/:slug" element={<Article />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/advertiser-dashboard"
              element={
                <ProtectedRoute role="advertiser">
                  <AdvertiserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/publisher-dashboard"
              element={
                <ProtectedRoute role="publisher">
                  <PublisherDashboard />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Login/register pages do not use MainLayout */}
          <Route path="/advertiser-login" element={<AdvertiserLogin />} />
          <Route path="/publisher-login" element={<PublisherLogin />} />
          <Route path="/advertiser-register" element={<AdvertiserRegister />} />
          <Route path="/publisher-register" element={<PublisherRegister />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
