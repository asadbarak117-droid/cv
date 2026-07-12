import React from "react";
import Headera from "./Headera";
import Personlintr from "./Personlintr";
import Skiledu from "./Skiledu";
import Goul from "./Goul";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="flex flex-col gap-20">
      <Headera />
      <Personlintr />
      <Skiledu />
      <Goul />
      <Footer />
    </div>
  );
};

export default About;
