import { Github, Instagram, Linkedin, Mail } from "lucide-react";

type IExperience = {
  title: string;
  place: string;
  start: string;
  end: string | "Present";
  description: string[];
  stack: string[];
};

type IConnect = {
  name: string;
  link: string;
  type: "copy" | "link";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
};

type IStack = {
  core: string[];
  others: string[];
};

export const experienceData: IExperience[] = [
  {
    title: "Frontend Developer",
    place: "Tamadun Teknologi Internasional",
    start: "Dec 2022",
    end: "Dec 2023",
    description: [
      "Maintained and improved the application built with Vue.js and Vuetify.",
      "Created dynamic client configuration to make the app more flexible and interactive.",
      "Developed front-end notification alerts using a service worker for better user experience.",
    ],
    stack: ["Vue.js", "Vuetify", "Sass"],
  },
  {
    title: "Intern Frontend Developer",
    place: "PT Widya Inovasi Indonesia",
    start: "Feb 2022",
    end: "Aug 2022",
    description: [
      "Developing a web dashboard for order an API Key using React JS.",
      "Implementing Tailwind CSS for styling website.",
      "Implementing consume REST API for communication with backend.",
    ],
    stack: ["React.js", "Tailwind"],
  },
];

export const connectData: IConnect[] = [
  {
    name: "Gmail",
    link: "wahyu.esya17@gmail.com",
    type: "copy",
    icon: Mail,
  },
  {
    name: "GitHub",
    link: "https://github.com/foolais",
    type: "link",
    icon: Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wahyuesyanasution/",
    type: "link",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/wahyuesya/",
    type: "link",
    icon: Instagram,
  },
];

export const stackData: IStack = {
  core: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  others: ["Vue.js", "Sass", "Express.js", "Prisma", "MongoDB", "Git"],
};
