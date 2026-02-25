type IExperience = {
  title: string;
  place: string;
  start: string;
  end: string | "Present";
  description: string[];
  stack: string[];
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
