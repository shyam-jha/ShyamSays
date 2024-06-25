"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

import i1 from "../src/images/i1.jpeg";
import i2 from "../src/images/i2.jpeg";
import i3 from "../src/images/i3.jpeg";
import i4 from "../src/images/i4.jpeg";
import i5 from "../src/images/i5.jpeg";
import i6 from "../src/images/i6.jpeg";
import i7 from "../src/images/i7.jpeg";
import i9 from "../src/images/i9.png";
import i10 from "../src/images/i10.jpeg";
import i11 from "../src/images/i11.jpeg";
import i12 from "../src/images/i12.jpeg";
import i13 from "../src/images/i13.jpeg";
import i14 from "../src/images/i14.jpeg";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    thumbnail: i1,
  },
  {
    title: "Cursor",
    thumbnail: i2,
  },
  {
    title: "Rogue",
    thumbnail: i3,
  },
  {
    title: "Editorially",
    thumbnail: i7,
  },
  {
    title: "Editrix AI",
    thumbnail: i5,
  },
  {
    title: "Pixel Perfect",
    thumbnail: i6,
  },
  {
    title: "Algochurn",
    thumbnail: i4,
  },
  {
    title: "Aceternity UI",
    thumbnail: i9,
  },
  {
    title: "Tailwind Master Kit",
    thumbnail: i14,
  },
  {
    title: "SmartBridge",
    thumbnail: i1,
  },
  {
    title: "Renderwork Studio",
    thumbnail: i11,
  },
  {
    title: "Creme Digital",
    thumbnail: i10,
  },
  {
    title: "Golden Bells Academy",
    thumbnail: i12,
  },
  {
    title: "Invoker Labs",
    thumbnail: i7,
  },
  {
    title: "E Free Invoice",
    thumbnail: i13,
  },
];
