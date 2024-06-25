"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Link from "next/link";
import { SiLichess } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { MdOutlineDataArray } from "react-icons/md";
import { RiHtml5Fill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { PiFileJsxDuotone } from "react-icons/pi";
import { DiDjango } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import f1 from "../src/images/f1.png";
import f2 from "../src/images/f2.png";
import f3 from "../src/images/f3.png";
import f4 from "../src/images/f4.png";
import f5 from "../src/images/f5.png";
import f6 from "../src/images/f6.png";
import GradualSpacing from "./ui/gradual-spacing";

const projects = [
    {
        name: "Apple Website Clone",
        description: "Here, you'll find a meticulously crafted clone of the Apple website, showcasing my skills in web development and design. This project highlights my ability to recreate sophisticated, high-end interfaces with a focus on seamless user experience, responsive design, and modern web technologies. ",
        image: f1,
        linkk: "https://shyam-jha.github.io/apple/",
        githubLink: "https://github.com/shyam-jha/apple",
        icons: [DiDjango, FaBootstrap, FaCss3Alt]
    },
    {
        name: "Chess Game in C++ from scratch",
        description: "Dynamic Chess is a C++ chess game built from scratch, featuring dynamic memory allocation and innovative 3D array logic. With optimized memory usage and efficient handling of game elements, it offers a captivating experience for chess enthusiasts.",
        image: f2,
        linkk: "https://shyam-jha.github.io/shyam-jha/chess",
        githubLink: "https://github.com/shyam-jha/chess",
        icons: [SiLichess, TbBrandCpp, MdOutlineDataArray]
    },
    {
        name: "Music Player Using HTML CSS and Javascript",
        description: "Introducing HarmonyTune: a full-fledged music player crafted using HTML, CSS, and JavaScript. Dive into a seamless musical journey with its intuitive user interface and dynamic functionality. SneekiMusic offers a rich listening experience.",
        image: f4,
        linkk: "https://shyam-jha.github.io/music-web/",
        githubLink: "https://github.com/shyam-jha/music-web",
        icons: [RiHtml5Fill, FaCss3Alt, IoLogoJavascript]
    },
    {
        name: "Cinematic Universes: Watching links & chatrooms",
        description: "A dynamic platform powered by Django and Bootstrap, offering seamless access to direct viewing links and interactive chat rooms. Navigate effortlessly through a curated collection of cinematic masterpieces while engaging with fellow enthusiasts in real-time discussions.",
        image: f3,
        linkk: "https://shyam-jha.github.io/chaos/",
        githubLink: "https://github.com/shyam-jha/",
        icons: [DiDjango, FaBootstrap, FaCss3Alt]
    },
    // Add more projects as needed
];

export function ThreeDCardDemo() {
    return (
        <div id="projects">
            <GradualSpacing
                className="font-display mt-10 md:mt-4 text-center mb-10 text-2xl md:text-6xl font-bold tracking-[-0.1em] text-white"
                text="Industry Ready Projects !!!"
            />
            <div className="grid grid-cols-1 mx-3 lg:grid-cols-2 2xl:grid-cols-3">
                {projects.map((project, index) => (
                    <CardContainer key={index} className="inter-var">
                        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem translateZ="50" className="text-xl font-bold text-white">
                                {project.name}
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2 text-neutral-300">
                                {project.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={project.image}
                                    height="1000"
                                    width="500"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-center items-center mt-4">
                                {project.icons.map((Icon, iconIndex) => (
                                    <Icon key={iconIndex} className="text-2xl mx-2 text-white" />
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem translateZ={20} as={Link} href={project.linkk} target="__blank" className="px-4 py-2 rounded-xl font-[300] text-lg text-white">
                                    Live Preview →
                                </CardItem>
                                <CardItem translateZ={20} as={Link} href={project.githubLink} className="px-4 py-2 rounded-xl bg-white text-black text-sm font-bold">
                                    Github
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>

            <div className="flex justify-center items-center pt-8 rounded-xl mx-auto font-[900] text-base text-white">
                <a href="#" className="hover:text-teal-400">Check Out All The Projects →</a>
            </div>
            <div className="sm:px-10 px-5 mt-10">
                <div className="screen-max-width">
                    <div className="bg-neutral-700 my-5 h-[1px] w-full" />
                </div>
            </div>
        </div>
    );
}
