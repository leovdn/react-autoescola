import React from "react";

import Hero from "../components/Hero";
import BgHighway from "./assets/bg-highway.jpg";
import BgGirls from "./assets/bg-girls.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BgHighway}>
    <p>A autoescola lider em aprovação</p>
  </Hero>
);

export const wishlist = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BgGirls}>
    <ul>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
    </ul>
  </Hero>
);
