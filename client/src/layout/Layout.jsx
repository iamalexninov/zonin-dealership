import { Routes, Route, useLocation } from "react-router-dom";

import { Navbar } from "../components/navbar/Navbar";
// import { Footer } from "../components/footer/Footer";

import { Home } from "../pages/Home/Home";
import { Footer } from "../components/footer/Footer";
// import { About } from "../pages/about/About";
// import { Catalogue } from "../pages/Catalogue/Catalogue";
// import { Reviews } from "../pages/reviews/Reviews";
// import { Blog } from "../pages/blog/Blog";
// import { Contact } from "../pages/contact/Contact";
//
// import { Login } from "../pages/auth/Login";
// import { Register } from "../pages/auth/Register";
// import { UserProfile } from "../pages/UserProfile/UserProfile";

export const Layout = () => {
  const location = useLocation();
  const hideNavbarFooter =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/catalogue" element={<Catalogue />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/profile" element={<UserProfile />} /> */}
          {/* <Route path="/signin" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Register />} /> */}
        </Routes>
      </main>
      <Footer />
      {/* {!hideNavbarFooter && <Footer />} */}
    </>
  );
};
