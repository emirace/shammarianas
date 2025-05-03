import { useEffect } from "react";
import Navbar2 from "./Components/Navbar2";
import "./assets/Styles/Tab.css";
import "./assets/Styles/Style.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import View from "./Pages/View";
import Footer from "./Components/Footer";
import Upload from "./Pages/Upload";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login/Login";
import Checkout from "./Pages/Checkout";
import { FilterProvider } from "./Context/FilterContext";
import Profile from "./Pages/Profile";

import Logout from "./Pages/Logout";
import Library from "./Pages/Library";
import TextureViewer from "./Components/TextureViewer";
import PasswordReset from "./Pages/Login/PasswordReset";
import Group from "./Pages/Group";
import Analytics from "./Pages/Analytics";
// import Trade from "./Pages/Trade";
import TradePage from "./Pages/Trade";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Blogs from "./Pages/Blog-details";
import Portfolio from "./Pages/portfolio";
import PortfolioDetails from "./Pages/project-details";
// import LoadingScreen from "./common/loader";
import Support from "./Pages/Support";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/services";

import StockPage from "./Pages/Stock";
import MyDownloads from "./Pages/MyDownloads";
import Favorites from "./Pages/Favorites";
import Admin from "./Pages/Admin";

// Services Route
import Branding from "./Pages/services/Branding";
import UIUXDesign from "./Pages/services/UIUXDesign";
import WebDesign from "./Pages/services/Web-Services";
import Ecommerce from "./Pages/services/Ecommerce";
import Content from "./Pages/services/Content";
import Product from "./Pages/services/Product-Design";
import Digital from "./Pages/services/DigitalMarketer";
import VFX from "./Pages/services/VfxAndCGIAds";
import VideoProduction from "./Pages/services/Photography";
import Printing from "./Pages/services/PrintMediaSolutions";

// import Video from "./Pages/Types/Video";
// import VideoTemplate from "./Pages/Types/VideoTemplate";
// import Models from "./Pages/Types/Models";
// import Hot from "./Pages/Types/Hot";
// import Images from "./Pages/Types/Image";
// import Printables from "./Pages/Types/Printables";
// import Textures from "./Pages/Types/Textures";
// import Scripts from "./Pages/Types/Scripts";
// import Shader from "./Pages/Types/Shaders";
// import HDRIs from "./Pages/Types/HDRIs";
// import Plugins from "./Pages/Types/Plugins";

import Success from "./Pages/Success";

import CategoryTemplate from "./Pages/Types/CategoryTemplate";
import PageTeam from "./Pages/Page-team";
import Error from "./Pages/Error";
// CategoryTemplate.js

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export const AppRoutes = () => (
  <Routes>
    <Route path="/Login" element={<Login />} />
    <Route path="/Admin" element={<Admin />} />
    <Route path="/Reset" element={<PasswordReset />} />
    <Route path="/Logout" element={<Logout />} />
    <Route path="/Profile/:id" element={<Profile />} />
    <Route path="/" element={<Home />} />
    <Route path="/Trade" element={<TradePage />} />
    <Route path="/Cart" element={<Cart />} />
    {/* <Route path="/Hot" element={<Hot />} />
    <Route path="/Image" element={<Images />} />
    <Route path="/videos" element={<Video />} />
    <Route path="/Models" element={<Models />} />
    <Route path="/Printable" element={<Printables />} />
    <Route path="/Textures" element={<Textures />} />
    <Route path="/Scripts" element={<Scripts />} />
    <Route path="/Shaders" element={<Shader />} />
    <Route path="/HDRIs" element={<HDRIs />} />
    <Route path="/templates" element={<VideoTemplate />} />
    <Route path="/Plugins" element={<Plugins />} /> */}
    <Route path="/:Category" element={<CategoryTemplate />} />
    <Route path="/View/:id" element={<View />} />
    <Route path="/Groups" element={<Group />} />
    <Route path="/Upload" element={<Upload />} />
    <Route path="/Checkout" element={<Checkout />} />
    <Route path="/Library" element={<Library />} />
    <Route path="/MyDownloads" element={<MyDownloads />} />
    <Route path="/Favorites" element={<Favorites />} />
    <Route path="/Texture" element={<TextureViewer />} />
    <Route path="/analytics" element={<Analytics />} />
    <Route path="/Terms" element={<Terms />} />
    <Route path="/Privacy" element={<Privacy />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog-details/:id" element={<Blogs />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/project-details/:id" element={<PortfolioDetails />} />
    <Route path="/Support" element={<Support />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/page-team" element={<PageTeam />} />
    <Route path="/stock" element={<StockPage />} />
    <Route path="/services" element={<Services />} />
    <Route path="/success" element={<Success />} />
    {/* <Route path="/services/:slug" element={<Services />} />
    <Route path="/page-services-details" element={<ServicesDetails />} /> */}

    {/* Static individual service pages */}
    <Route path="/services/branding" element={<Branding />} />
    <Route path="/services/uiux-design" element={<UIUXDesign />} />
    <Route path="/services/web-design" element={<WebDesign />} />
    <Route path="/services/ecommerce" element={<Ecommerce />} />
    <Route path="/services/content" element={<Content />} />
    <Route path="/services/product" element={<Product />} />
    <Route path="/services/digital" element={<Digital />} />
    <Route path="/services/video-production" element={<VideoProduction />} />
    <Route path="/services/vfx" element={<VFX />} />
    <Route path="/services/printing" element={<Printing />} />
    {/* Optional: 404 fallback */}
    <Route path="*" element={<Error />} />
  </Routes>
);

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        {/* <Navbar /> */}
        <Navbar2 />
        <FilterProvider>
          <AppRoutes />
        </FilterProvider>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
