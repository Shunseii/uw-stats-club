import React from "react";

import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Post from "../components/Post.jsx";
import Members from "../components/Members.jsx";
import Container from "../components/Container.jsx";
import Footer from "../components/Footer.jsx";

const AboutPage = () => {
  return (
    <div className="relative pb-16">
      <Navbar active="About" />
      <Container>
        <section className="mb-10">
          <Header title="UW Statistics Club" />
          <div className="mb-6">
            <Post title="Who We Are">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
                diam vel quam elementum. Platea dictumst vestibulum rhoncus est
                pellentesque. Risus pretium quam vulputate dignissim suspendisse
                in. Nec ultrices dui sapien eget mi. Id cursus metus aliquam
                eleifend mi. Ut aliquam purus sit amet luctus venenatis lectus
                magna fringilla. Arcu cursus vitae congue mauris rhoncus aenean
                vel. Donec et odio pellentesque diam. Integer malesuada nunc vel
                risus commodo viverra maecenas. Id porta nibh venenatis cras sed
                felis eget velit.
              </p>
            </Post>
          </div>
          <Post title="How to Join">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              diam vel quam elementum. Platea dictumst vestibulum rhoncus est
              pellentesque. Risus pretium quam vulputate dignissim suspendisse
              in. Nec ultrices dui sapien eget mi. Id cursus metus aliquam
              eleifend mi. Ut aliquam purus sit amet luctus venenatis lectus
              magna fringilla. Arcu cursus vitae congue mauris rhoncus aenean
              vel. Donec et odio pellentesque diam. Integer malesuada nunc vel
              risus commodo viverra maecenas. Id porta nibh venenatis cras sed
              felis eget velit.
            </p>
          </Post>
        </section>
        <section>
          <Header title="Our Members" />
          <Members />
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutPage;
