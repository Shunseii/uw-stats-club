import React from "react";

import Navbar from "../components/Navbar.jsx";
import Container from "../components/Container.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const ResourcesPage = () => {
  return (
    <div className="relative pb-12 md:static md:pb-0">
      <Navbar />
      <Container>
        <Header title="Helpful Resources" />

        <h3 className="text-3xl mb-4 font-medium">
          Official UWaterloo Resources
        </h3>
        <ul className="mb-10">
          <li>
            <a href="https://uwaterloo.ca/statistics-and-actuarial-science/">
              Statistics Department
            </a>
          </li>
          <li>
            <a href="https://uwaterloo.ca/math/">Mathematics Faculty</a>
          </li>
          <li>
            <a href="http://ugradcalendar.uwaterloo.ca/group/MATH-Statistics-1">
              Program Information
            </a>
          </li>
          <li>
            <a href="https://uwaterloo.ca/statistics-and-actuarial-science/current-undergraduate-students/academic-advising">
              Academic Advisors
            </a>
          </li>
          <li>
            <a href="http://www.ucalendar.uwaterloo.ca/2021/COURSE/course-STAT.html">
              Statistics Courses
            </a>
          </li>
        </ul>

        <h3 className="text-3xl font-medium">External Links</h3>
      </Container>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
