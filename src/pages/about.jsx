import React from "react";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx"
import Post from "../components/Post.jsx"
import Members from "../components/Members.jsx"

const AboutPage = () => {
  return (
    <div>
      <Navbar active="About" />
      <main>
        <Header title="UW Statistic Club" />
        <Post title="Who We Are">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum. Platea dictumst vestibulum rhoncus est pellentesque. Risus pretium quam vulputate dignissim suspendisse in. Nec ultrices dui sapien eget mi. Id cursus metus aliquam eleifend mi. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Arcu cursus vitae congue mauris rhoncus aenean vel. Donec et odio pellentesque diam. Integer malesuada nunc vel risus commodo viverra maecenas. Id porta nibh venenatis cras sed felis eget velit.</p>
        </Post>
        <Post title="How to Join">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum. Platea dictumst vestibulum rhoncus est pellentesque. Risus pretium quam vulputate dignissim suspendisse in. Nec ultrices dui sapien eget mi. Id cursus metus aliquam eleifend mi. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Arcu cursus vitae congue mauris rhoncus aenean vel. Donec et odio pellentesque diam. Integer malesuada nunc vel risus commodo viverra maecenas. Id porta nibh venenatis cras sed felis eget velit.</p>
        </Post>
        <Header title="Our Members" />
        <Members />
      </main>
    </div>
  );
};

export default AboutPage;
