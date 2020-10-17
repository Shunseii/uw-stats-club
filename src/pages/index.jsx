import React from "react";

import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Post from "../components/Post.jsx";
import Container from "../components/Container.jsx";

const IndexPage = () => {
  return (
    <div>
      <Navbar active="Home" />
      <Container>
        <div className="pb-10">
          <Header title="Announcements" />
          <Post title="An Announcement">
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
            <p>
              Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Massa
              tincidunt nunc pulvinar sapien et. Et sollicitudin ac orci
              phasellus egestas tellus rutrum. Enim neque volutpat ac tincidunt
              vitae semper quis. Viverra maecenas accumsan lacus vel facilisis
              volutpat est velit egestas. Nibh nisl condimentum id venenatis a
              condimentum vitae sapien pellentesque. Sollicitudin tempor id eu
              nisl nunc mi ipsum. Integer quis auctor elit sed. Sed adipiscing
              diam donec adipiscing tristique risus nec. Felis eget velit
              aliquet sagittis id consectetur purus ut.
            </p>
          </Post>
        </div>
        <div>
          <Header title="Current Club Events" />
        </div>
      </Container>
    </div>
  );
};

export default IndexPage;
