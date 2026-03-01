import { Github, Instagram, Linkedin, Mail } from "lucide-react";

type INav = {
  title: string;
  href: string;
};

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

type IEducation = {
  school: string;
  degree: string;
  start: string;
  end: string | "Present";
};

export const navData: INav[] = [
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

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

export const educationData: IEducation[] = [
  {
    school: "Binus University",
    degree: "Bachelor of Science in Computer Science",
    start: "Mei 2023",
    end: "Present",
  },
  {
    school: "Telkom University",
    degree: "Associate Degree in Computer Technology",
    start: "Aug 2019",
    end: "Dec 2022",
  },
];

export const highlightedProjects = {
  name: "Waroeng US",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
};

export const projectTypes = [
  "All",
  "Next.js",
  "React.js",
  "React Native",
  "Vue.js",
  "Express.js",
  "Prisma",
  "MongoDB",
  "Supabase",
];

export type IProject = {
  image: string;
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  details: {
    image: string;
    title: string;
    description: string;
  }[];
};

export const projectsData: IProject[] = [
  {
    image: "",
    name: "Waroeng US",
    description:
      "A web POS system built using Next.js and Prisma with multi-store and multi-role capabilities. Roles are divided into three categories: super admin as developer, admin as business owner, and cashier.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com/foolais/waroeng-us",
    demo: "https://waroeng-us.vercel.app",
    details: [
      {
        image: "",
        title: "Admin Dashboard",
        description:
          "The admin dashboard provides a comprehensive overview of the business, including sales analytics, inventory management, and employee performance. It allows the admin to monitor key metrics and make informed decisions to optimize operations.",
      },
      {
        image: "",
        title: "Cashier Dashboard",
        description:
          "The cashier dashboard allows cashiers to process orders, manage customer interactions, and handle payments efficiently. It provides a streamlined interface for managing transactions and maintaining accurate records.",
      },
    ],
  },
  {
    image: "",
    name: "Mind Orbit",
    description:
      "This project is a responsive web application built with Next.js, TypeScript, and Prisma. It focuses on managing projects and tasks, with features like project creation, task organization, filtering, and user authentication.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com/foolais/mind-orbit",
    demo: "https://mind-orbit-rose.vercel.app",
    details: [
      {
        image: "",
        title: "Dashboard",
        description:
          "The dashboard provides an overview of all projects and tasks, allowing users to quickly access and manage their work. It includes features like project creation, task organization, and filtering to enhance productivity and collaboration.",
      },
      {
        image: "",
        title: "Task Management",
        description:
          "The task management feature allows users to create, update, and delete tasks within each project. It supports task categorization, due dates, and status tracking to help users stay organized and on schedule.",
      },
    ],
  },
  {
    image: "",
    name: "Waroeng US",
    description:
      "A web POS system built using Next.js and Prisma with multi-store and multi-role capabilities. Roles are divided into three categories: super admin as developer, admin as business owner, and cashier.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com/foolais/waroeng-us",
    demo: "https://waroeng-us.vercel.app",
    details: [
      {
        image: "",
        title: "Admin Dashboard",
        description:
          "The admin dashboard provides a comprehensive overview of the business, including sales analytics, inventory management, and employee performance. It allows the admin to monitor key metrics and make informed decisions to optimize operations.",
      },
      {
        image: "",
        title: "Cashier Dashboard",
        description:
          "The cashier dashboard allows cashiers to process orders, manage customer interactions, and handle payments efficiently. It provides a streamlined interface for managing transactions and maintaining accurate records.",
      },
    ],
  },
  {
    image: "",
    name: "Mind Orbit",
    description:
      "This project is a responsive web application built with Next.js, TypeScript, and Prisma. It focuses on managing projects and tasks, with features like project creation, task organization, filtering, and user authentication.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com/foolais/mind-orbit",
    demo: "https://mind-orbit-rose.vercel.app",
    details: [
      {
        image: "",
        title: "Dashboard",
        description:
          "The dashboard provides an overview of all projects and tasks, allowing users to quickly access and manage their work. It includes features like project creation, task organization, and filtering to enhance productivity and collaboration.",
      },
      {
        image: "",
        title: "Task Management",
        description:
          "The task management feature allows users to create, update, and delete tasks within each project. It supports task categorization, due dates, and status tracking to help users stay organized and on schedule.",
      },
    ],
  },
  {
    image: "",
    name: "Waroeng US",
    description:
      "A web POS system built using Next.js and Prisma with multi-store and multi-role capabilities. Roles are divided into three categories: super admin as developer, admin as business owner, and cashier.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com/foolais/waroeng-us",
    demo: "https://waroeng-us.vercel.app",
    details: [
      {
        image: "",
        title: "Admin Dashboard",
        description:
          "The admin dashboard provides a comprehensive overview of the business, including sales analytics, inventory management, and employee performance. It allows the admin to monitor key metrics and make informed decisions to optimize operations.",
      },
      {
        image: "",
        title: "Cashier Dashboard",
        description:
          "The cashier dashboard allows cashiers to process orders, manage customer interactions, and handle payments efficiently. It provides a streamlined interface for managing transactions and maintaining accurate records.",
      },
    ],
  },
  {
    image: "",
    name: "Mind Orbit",
    description:
      "This project is a responsive web application built with Next.js, TypeScript, and Prisma. It focuses on managing projects and tasks, with features like project creation, task organization, filtering, and user authentication.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com/foolais/mind-orbit",
    demo: "https://mind-orbit-rose.vercel.app",
    details: [
      {
        image: "",
        title: "Dashboard",
        description:
          "The dashboard provides an overview of all projects and tasks, allowing users to quickly access and manage their work. It includes features like project creation, task organization, and filtering to enhance productivity and collaboration.",
      },
      {
        image: "",
        title: "Task Management",
        description:
          "The task management feature allows users to create, update, and delete tasks within each project. It supports task categorization, due dates, and status tracking to help users stay organized and on schedule.",
      },
    ],
  },
];
