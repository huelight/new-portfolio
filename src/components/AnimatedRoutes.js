import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
      <Route
        path="/about"
        element={
          <About
      let_me= {personalDetails.let_me}
      meme= {personalDetails.meme}
      greeting= {personalDetails.greeting}
      motto= {personalDetails.motto}
      btn_text= {personalDetails.btn_text}
      t_name= {personalDetails.t_name}
      t_location= {personalDetails.t_location}
      avail= {personalDetails.avail}
      name={personalDetails.name}
      location={personalDetails.location}
      email={personalDetails.email}
      availability={personalDetails.availability}
      brand={personalDetails.brand}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route
        path="/contact"
        element={
          <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      />
      <Route
        path="/login"
        element={
          <Login />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
