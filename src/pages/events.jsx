import React from "react";

import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Event from "../components/Event.jsx";
import Container from "../components/Container.jsx";
import Footer from "../components/Footer.jsx";

const EventsPage = () => {
  return (
    <div className="relative pb-12">
      <Navbar active="Events" />
      <Container>
        <section className="mb-16">
          <Header title="Upcoming Events" />

          <Event title="SQL Tutorial" date="TBA" time="5:00 - 7:00 PM">
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
          </Event>
          <Event
            title="Co-op Info Panel"
            date="February 10, 2020"
            time="11:00 - 2:00 PM"
          >
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
          </Event>
          <Event title="Elections" date="February 7, 2020" time="12:00 PM">
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
          </Event>
        </section>

        <section>
          <Header title="Past Events" />

          <Event
            title="Statistics Basic"
            date="October 15, 2019"
            time="8:30 - 9:30 AM"
          >
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
          </Event>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default EventsPage;
