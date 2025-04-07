import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a front-end developer with knowledge of HTML, CSS, JavaScript and React. I have experience in creating responsive web pages that work well on all devices. I enjoy building clean and user-friendly websites.`;



export const ABOUT_TEXT = `I am a dedicated and versatile front End developer with a passion for creating efficient and user-friendly web applications. I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A comprehensive e-commerce platform that mimics a real-world online shopping experience. The application features dynamic product listings, filtering options, a functional shopping cart with quantity updates, and a basic user authentication flow. Emphasis was placed on building a mobile-first responsive layout and ensuring consistent UX across devices. The UI is built with semantic HTML and vanilla JavaScript, showcasing a strong grasp of core web technologies. Future enhancements could include payment gateway integration and admin panels for inventory management.",
    technologies: ["HTML", "CSS", "JavaScript"],
    URL: "https://scooby-pet-shop-9cssez634-aryan-s-projects-8c91da33.vercel.app/home.html",
    GitHub: "https://github.com/AryaN1k/thePetShop",
  },
  {
    title: "Todo List",
    image: project1,
    description:
      "A lightweight yet powerful to-do application developed using React. It allows users to add, edit, delete, and mark tasks as completed. The UI adapts fluidly across screen sizes and employs local storage for data persistence across sessions. Key technical highlights include effective use of React hooks (useState, useEffect), modular component structure, and conditional rendering. It's a great example of managing application state in a user-centric interface. Animations were added for a smooth experience when interacting with the task list.",
    technologies: ["React", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "This responsive portfolio website serves as a digital resume and showcases personal projects, skills, and contact details. It incorporates animated transitions, responsive design using Tailwind CSS, and modern design principles. The project emphasizes clean layout structuring and strong visual hierarchy. It also demonstrates routing between pages and a contact form ready for email integration. The goal was to create a sleek, minimalist interface that reflects a professional developer identity.",
    technologies: ["React", "Tailwind CSS"],
    URL: "https://my-portfolio-8r26.vercel.app/",
    GitHub: "https://github.com/AryaN1k/MyPortfolio",
  },
  // {
  //   title: "Weather App",
  //   image: project4,
  //   description:
  //     "A real-time weather forecast application that provides detailed atmospheric data including temperature, humidity, wind speed, and condition icons for any city entered by the user. This app uses the OpenWeatherMap API and includes error handling for invalid inputs and network issues. It demonstrates skill in fetching and rendering dynamic API data, implementing controlled inputs, and presenting information in a clean, card-based UI. The layout adapts to mobile and desktop views, making it practical for everyday use.",
  //   technologies: ["React", "CSS", "API"],
  //   URL: "https://weatherly-app-demo.vercel.app/",
  //   GitHub: "https://github.com/AryaN1k/weather-app",
  // },
  // {
  //   title: "Recipe Finder",
  //   image: project5,
  //   description:
  //     "A smart recipe search engine built using the Edamam API. Users can input ingredients or keywords to fetch relevant recipes with preparation time, calorie count, diet labels, and high-quality images. Features include search debouncing to reduce API calls, dynamic rendering of results, and conditional loading states for better UX. This project demonstrates effective API handling, asynchronous operations, and presenting complex JSON responses in a user-friendly format. It can be extended to include favorites, filters, or meal planning features.",
  //   technologies: ["React", "API", "Tailwind"],
  //   URL: "https://recipe-finder-demo.vercel.app/",
  //   GitHub: "https://github.com/AryaN1k/recipe-finder",
  // },
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
