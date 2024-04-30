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
  luminar,
  wac,
  mtl,
  freelance,
} from "../assets";

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
    title: "UI/UX Architect",
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MEA(R)N Stack Intern",
    company_name: "Lumninar Technolabs",
    icon: luminar,
    iconBg: "#383E56",
    date: "June 2021 - Nov 2021",
    points: [
      "Developed responsive web applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js).",
      "Implemented RESTful APIs to communicate between the frontend and backend of applications.",
      "Worked with MongoDB to design and maintain databases, including schema design, indexing, and querying.",
      "Utilized Express.js to create server-side logic and handle HTTP requests and responses.",
      "Implemented authentication and authorization features using JSON Web Tokens (JWT) and Passport.js.",
      "Collaborated with frontend developers to integrate Angular components and services with the backend.",
      "Implemented real-time features using WebSockets or Socket.io for efficient communication between clients and servers.",
      "Integrated third-party APIs and services to enhance application functionality and user experience.",
      "Followed best practices for code organization, version control (e.g., Git), and deployment (e.g., Heroku, AWS).",
      "Conducted thorough testing and debugging to ensure the reliability and performance of web applications.",
      "Actively participated in team meetings, code reviews, and knowledge sharing sessions to improve skills and foster collaboration.",
      "Demonstrated a proactive attitude, willingness to learn, and ability to adapt to new technologies and challenges.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Metric Tree Labs",
    icon: mtl,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Jan 2022",
    points: [
      "Developed and maintained responsive web applications for an NBFC project using React.js, TypeScript, and Redux Toolkit.",
      "Implemented complex state management and data flow patterns using Redux Toolkit to handle application-wide state.",
      "Integrated with backend APIs using Axios for efficient data retrieval and submission, ensuring seamless communication between the frontend and backend.",
      "Designed and implemented reusable UI components and layouts using Material-UI, Tailwind CSS, SCSS, and Chakra UI, ensuring consistent branding and user experience across the application.",
      "Collaborated closely with designers and stakeholders to translate design mockups and requirements into functional user interfaces.",
      "Implemented client-side form validation and error handling to improve data integrity and user experience.",
      "Optimized application performance by identifying and addressing performance bottlenecks, code optimizations, and lazy loading techniques.",
      "Conducted code reviews, provided constructive feedback, and maintained high code quality standards within the development team.",
      "Actively participated in Agile development processes, including sprint planning, daily stand-ups, and retrospectives, to ensure project timelines and deliverables were met.",
      "Demonstrated strong problem-solving skills, adaptability, and a continuous learning mindset in a fast-paced development environment.",
    ],
  },
  {
    title: "Freelance Developer",
    // company_name: "",
    icon: freelance,
    iconBg: "#383E56",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.Js Developer",
    company_name: "WebandCrafts",
    icon: wac,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Developed and maintained frontend components and features for an ecommerce website using React.js and Next.js, ensuring high performance and scalability.",
      "Implemented server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and page load times for improved user experience.",
      "Integrated with backend services using GraphQL for efficient data fetching and manipulation, enabling seamless interaction between the frontend and backend.",
      "Utilized SWR (Stale-While-Revalidate) for client-side data fetching and caching, providing a fast and responsive user interface with real-time updates.",
      "Implemented responsive and visually appealing UI designs using SCSS, ensuring cross-browser compatibility and adherence to design specifications.",
      "Collaborated with backend developers to define and consume GraphQL schemas and APIs, ensuring data consistency and integrity throughout the application.",
      "Implemented client-side routing and navigation using Next.js routing features, enhancing user experience and enabling seamless navigation between pages.",
      "Conducted performance optimizations, including code splitting, bundle size reduction, and lazy loading techniques, to improve website performance and loading times.",
      "Developed a React Admin dashboard with live data integration and user management features, allowing administrators to monitor and manage ecommerce operations efficiently.",
      "Implemented authentication and authorization features for the React Admin dashboard using React.js libraries such as React Router and Redux, ensuring secure access control.",
      "Conducted thorough testing, including unit tests and integration tests, to ensure the reliability and functionality of frontend components and features.",
      "Actively participated in Agile development methodologies, including sprint planning, daily stand-ups, and sprint retrospectives, to deliver high-quality software solutions on time and within budget.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
