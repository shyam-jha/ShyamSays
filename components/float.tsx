"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconFolder } from "@tabler/icons-react"; // Ensure the installation of @tabler/icons-react

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconFolder className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

