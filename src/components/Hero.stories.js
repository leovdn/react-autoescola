import React from "react";

import Hero from "./Hero";
import BgHighway from "../stories/assets/bg-highway.jpg";
import BgGirls from "../stories/assets/bg-girls.jpg";
import Heading from "./Heading";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighway}>
    <h1>Ganhe sua liberdade para ir e vir</h1>
    <p>A autoescola lider em aprovação</p>
  </Hero>
);

export const wishlist = () => (
  <Hero image={BgGirls}>
    <h1>
      Ganhe sua <strong>liberdade</strong>
      <br />
      para ir e vir
    </h1>
    <Heading></Heading>

    <ul>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
    </ul>
  </Hero>
);
