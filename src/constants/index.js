import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  java,
  python,
  framer,
} from "../assets";
import blogplatform from "../assets/blogplatform.png";
import inventory from "../assets/inventory.png";
import iplpred from "../assets/iplpred.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name:"Java",
    icon:java
  },
  {
    name:"Python",
    icon:python
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name:"Framer-motion",
    icon: framer
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "github",
    icon: github,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Techno rings",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developed and deployed a web application using React.js and other related technologies.",
      "Collaborating with cross-functional teams including backend developers to create high-quality project.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    
    ],
  },
  {
    title: "Python programming",
    company_name: "Motion Cut",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developed web applications using Python and other related technologies.",
      "Increased skills significantly in python"
      
    ],
  },
];

const projects = [
  {
    name: "Blog platform",
    description:
      "Dockerized mern stack application that allows users to write, search, and manage posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: blogplatform,
    source_code_link: "https://github.com/Sssunithaaa/blog-platform",
  },
  {
    name: "Inventory Management System",
    description:
      "Web application that enables users to manage clients,products,transactions and suppliers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://github.com/Sssunithaaa/inventory",
  },
  {
    name: "Predictive Play",
    description:
      "An efficient predictive game website with react-django integration",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: iplpred,
    source_code_link: "https://github.com/Sssunithaaa/iplprediction",
    link:"http://predictiveplay.in/"
  },
];

export { services, technologies, experiences, projects };
