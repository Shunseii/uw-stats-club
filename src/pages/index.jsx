import React from "react";
import Navbar from "../components/Navbar.jsx";

const IndexPage = () => {
  return (
    <div>
      <Navbar active="Home" />
      <main className="px-80">Home Page</main>
    </div>
  );
};

export default IndexPage;
