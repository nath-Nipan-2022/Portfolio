import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  web,
  twitter,
  instagram,
  linkedin,
  figma,
  threejs,
  ecommerce,
  movieApp,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#works",
    title: "Works",
  },
];

export const socialLinks = [
  {
    id: "twitter",
    icon: twitter,
    link: "https://twitter.com/nipandebnth?s=09",
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/nath_nipan_789",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/nipan-debnath-742025248",
  },
];

export const services = [
  {
    title: "Front-end Developer",
    icon: javascript,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

export const technologies = [
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const projects = [
  {
    name: "E commerce app",
    description: "Lorem ipsum dolor sit amet, consect id elit, sed diam nonumy",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "strapi",
        color: "orange-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie App",
    description: "Lorem ipsum dolor sit amet, consect id elit, sed diam nonumy",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "tmdb api",
        color: "orange-text-gradient",
      },
    ],
    image: movieApp,
    source_code_link: "https://github.com/",
  },
];
