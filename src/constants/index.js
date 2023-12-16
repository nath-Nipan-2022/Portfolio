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
  car_showcase_app,
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
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/nipan-debnath-742025248",
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/nath_nipan_789",
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
    name: "E-commerce app",
    description:
      "Popular & Trending products. Category page. Sort by order. Filter by colors, price ranges. Shareable routes. Search products. Add to Cart. Checkout Page, etc...",
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
    source_code_link: "https://github.com/nath-Nipan-2022/E-commerce-app-rtk",
    live_url: "https://shopcart-ecommerce.vercel.app",
  },
  {
    name: "Movie App",
    description:
      "Trending Movies & Tv shows. Details page. Add to watch list. Watching trailer. Similar movies or tv shows and  searching. Filtering. Carousels. Infinite scrolling. Lazy loading images etc...",
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
    source_code_link: "https://github.com/nath-Nipan-2022/react-movie-app",
    live_url: "https://react-movie-app-alpha-ivory.vercel.app/",
  },
  {
    name: "Car Showcasing App",
    description:
      "Home page with available popular cars. Search by brand and models. Filter by fuel and year. Show more cars button. Light / Dark mode. Modal for car details etc...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "headlessui",
        color: "green-text-gradient",
      },
      {
        name: "rapid api",
        color: "pink-text-gradient",
      },
    ],
    image: car_showcase_app,
    source_code_link: "https://github.com/nath-Nipan-2022/Car-showcase-project",
    live_url: "https://car-showcase-eta-sandy.vercel.app/",
  },
];
