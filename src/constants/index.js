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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Course",
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
    name: "Node JS",
    icon: nodejs,
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

const experiences = [
  {
    title: "Introduction to Web Development",
    company_name: "HTML,CSS & Javascript",
    icon: javascript,
    iconBg: "#383E56",
    date: "4-5 months",
    points: [
      "HTML elements",
      "HTML attributes, headings",
      "Paragraphs & styles",
      "Images & ID",
      "Forms",
      "Colors & Backgrounds",
      "Borders, Margin & Padding",
      "Height, width",
      "Fonts, links & display",
      "Syntax,statement",
      "Variables(let & const)",
      "Operators",
      "Data types & functions",
      "Strings & methods",
      "Arrays & methods",
      "Loops",
      "Conditional statements"
    ],
  },
  {
    title: "Mobile App Development",
    company_name: "React native",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "4-5 months",
    points: [
      "Introduction",
      "Installation & setup",
      "View, Text & Image",
      "TextInput,Scrollview",
      "Stylesheet & Button",
      "Flatlist & Sectionlist"
    ],
  },
  {
    title: "Introduction to Python",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "3-4 months",
    points: [
      "Syntax",
      "Variables & Datatypes",
      "Numbers & strings",
      "Boolean, casting",
      "Operators",
      "List & Tuples",
      "Sets",
      "Dictionary",
      "Conditional statements",
      "Loops"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "In this project, students will design and develop a responsive portfolio website that showcases their skills, projects, and personal brand. Through this hands-on project, students will learn the fundamentals of HTML, CSS, and JavaScript while gaining practical experience in creating a professional and visually appealing online presence.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    
  },
  {
    name: "Registration forms",
    description:
      "In this project, students will design and develop a user registration form that's pretty much common in websites. The registration form serves as a crucial component of any online platform, enabling users to create personalized profiles and access various features and services.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    
  },
  {
    name: "Todo list",
    description:
      "In this project, students will develop a TodoList app using React Native, a popular framework for building native mobile applications. The TodoList app allows users to create, manage, and organize their tasks and helps them stay organized and productive.",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "styles",
        color: "pink-text-gradient",
      },
    ],
    image: starbucks,
  },
  {
    name: "Tip Calculator",
    description:
      "With Tip calculator, one can experience Calculation of tips and bill splitting made in the most user friendly way possible.",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "styles",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://play.google.com/store/apps/details?id=com.Tip.Calculator14",
  },
  {
    name: "Rock,Paper & scissors",
    description:
      "In this project, students will build a classic Rock, Paper, Scissors game using Python. The game allows the user to play against the computer in a series of rounds, where they select either rock, paper, or scissors, and the computer randomly chooses its move. This simple yet entertaining game tests the user's decision-making skills and luck.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "pink-text-gradient",
      },
    ],
    image: creator,
    
  },
  {
    name: "Currency converter",
    description:
      "In this project, students will develop a currency converter program in Python that allows users to convert Indian Rupees (INR) to US Dollars (USD). The program provides a simple and convenient way to perform currency conversion calculations accurately and efficiently.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "pink-text-gradient",
      },
    ],
    image: backend,
    
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
