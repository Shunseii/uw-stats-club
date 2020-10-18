import React from "react";

import Navbar from "../components/Navbar.jsx";
import Container from "../components/Container.jsx";
import Footer from "../components/Footer.jsx";

const ResourcesPage = () => {
  return (
    <div>
      <Navbar active="Resources" />
      <Container>Resources Page</Container>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
