import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Let’s collaborate—scroll down to see more! ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Remote, on-site, or anywhere in between ",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for AI and Cybersecurity.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a mobile application for gym enthusiasts",
      description: "PULSE Mobile app",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "PULSE - Become the better version of yourself",
      des: "Creator of the PULSE mobile app, a platform that helps users track their workouts and diet.",
      img: "/p1.png",
      //React.js SCSS TypeScript Node.js Express MongoDB
      iconLists: ["/re.svg", "/expo.png" , "/sass.png", "/ts.svg", "/nodejs.png", "/express-js.png", "/mongodb.svg"],
      link: "https://github.com/Diog0o/pulse_web_app",
    },
    {
      id: 2,
      title: "HORECA - Mobile application ",
      des: "Worked on an outsourcing project through Junitec for Brands&Ninjas, developing a comprehensive mobile app.",
      img: "/p2.png",
      //React.js SCSS TypeScript RubyonRails PostgreSQL
      iconLists: ["/re.svg", "/expo.png", "/sass.png", "/ts.svg", "/ror.svg", "/postgresql.png"],
      link: "https://brandsandninjas.com/pt/vertical/horeca/",
    },
    {
      id: 3,
      title: "Ryde - Uber-clone application",
      des: "Developed a mobile app that allows users to book rides, track their location, and pay for services.",
      img: "/p3.png",
      //React.js Tailwind TypeScript PostGresSQL Clerk Stripe
      iconLists: ["/re.svg", "/expo.png", "/tail.svg", "/ts.svg", "/postgresql.png", "/c.svg", "/stripe.svg"],
      link: "https://github.com/Diog0o/ryde_mobile_app",
    },
    {
      id: 4,
      title: "Project Carma",
      des: "Developing an oral communication system and a mobile app for human-robot interaction, enhancing AI-driven disaster response and first responder collaboration.",
      img: "/p4.webp",
      iconLists: ["/re.svg", "/ts.svg", "/nodejs.png", "/express-js.png", "/mongodb.svg"],
      link: "https://www.carmarobots.eu/carma-project/",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Diog0o"
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/diogo-guerreiro-335999233/"
    },
  ];
 