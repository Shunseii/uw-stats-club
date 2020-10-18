import React from "react";

import Container from "../components/Container.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <Container>Page not found.</Container>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
