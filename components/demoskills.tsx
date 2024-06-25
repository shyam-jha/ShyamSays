import { HoverEffect } from "./ui/card-hover-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faPython
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-1">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "C++",
    icon: faServer, // Using server icon for C++
  },
  {
    title: "Python",
    icon: faPython,
  },
  {
    title: "JavaScript",
    icon: faJsSquare,
  },
  {
    title: "TypeScript",
    icon: faJsSquare, // Using JavaScript icon for TypeScript
  },
  {
    title: "Framer Motion",
    icon: faReact,
  },
  {
    title: "Microsoft Tools",
    icon: faServer, // Using server icon for Microsoft Tools
  },
  {
    title: "Clerk",
    icon: faServer, // Clerk icon not available in FontAwesome, using server icon for representation
  },
  {
    title: "Canva",
    icon: faReact, // Using React icon for Canva (assuming it's for web development with React)
  },
];
