import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Code } from "lucide-react";

export const DATA = {
  name: "Alfan Fauzy",
  initials: "AF",
  url: "https://alfan.web.id",
  location: "Jakarta, ID",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "Frontend Developer based in Jakarta, Indonesia. Passionate about building impactful web experiences and exploring new tech.",
  summary:
    "With over 4 years in frontend development, I’ve contributed to a range of digital products from **Telecomunications, Entertainment, HR Management System, Restauran Point of Sales, AI Automatication, and Fintech platforms** focusing on performance, maintainability, and seamless user experiences.\n\n I’ve led improvements that drastically reduced build times and sizes, and implemented real-time features like live streaming, chat, and analytics dashboards. I enjoy working with **React, TypeScript, NextJS, TailwindCSS, Progressive Web App (PWA)** and modern frontend architecture, and I’m always exploring ways to write cleaner, more efficient code.",
  avatarUrl: "/me.png",
  skills: [
    {
      text: "HTML",
      color: "#E34F26",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png",
    },
    {
      text: "CSS",
      color: "#663399",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png",
    },
    {
      text: "Javascript",
      color: "#F7DF1E",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png",
    },
    {
      text: "React",
      color: "#61DAFB",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
    },
    {
      text: "Next.js",
      color: "#000000",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png",
    },
    {
      text: "Typescript",
      color: "#3178C6",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png",
    },
    {
      text: "Webscoket",
      color: "#010101",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/websocket.png",
    },
    {
      text: "Node.js",
      color: "#5FA04E",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png",
    },
    {
      text: "PHP",
      color: "#777BB4",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php.png",
    },
    {
      text: "Golang",
      color: "#000000",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/go.png",
    },
    {
      text: "Wordpress",
      color: "#21759B",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/wordpress.png",
    },
    {
      text: "Progressive Web Apps",
      color: "#5A0FC8",
      logo: "https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/pwa/pwa.png",
    },
  ],
  styilingskilss: [
    {
      text: "TailwindCSS",
      color: "#06B6D4",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png",
    },
    {
      text: "Bootstrap",
      color: "#7952B3",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bootstrap.png",
    },
    {
      text: "Ant Design",
      color: "#0170FE",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ant_design.png",
    },
    {
      text: "Styled Component",
      color: "#DB7093",
      logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/styled-components.png",
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/project", icon: Code, label: "Project" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "zhafhy@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alfanfauzy/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alfan-fauzy/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/zhafhyfauzy",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:zhafhy@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Appfuxion Consulting Indonesia",
      href: "https://appfuxion.id/en",
      badges: [],
      location: "Jakarta",
      title: "Senior Frontend Developer",
      logoUrl: "/work/appfuxion.png",
      start: "Jul 2025",
      end: "Current",
      description: "{Under Maintenance}",
    },
    {
      company: "Moduit Digital Indonesia",
      href: "https://moduit.id/",
      badges: [],
      location: "Jakarta",
      title: "Senior Frontend Web Developer",
      logoUrl: "/work/moduit.png",
      start: "Dec 2023",
      end: "Jun 2025",
      description:
        "Developed secure KYC processing flows for new clients and streamlined client binding processes for an enhanced user experience. Designed and implemented features for buying and selling investment products in collaboration with DBS Bank. Optimized website performance and user interfaces, reducing build time, while ensuring alignment with business goals and regulatory standards through cross-team collaboration.",
    },
    {
      company: "Pintar Ventura Group",
      badges: [],
      href: "https://pvg.co.id/",
      location: "Jakarta",
      title: "Web Frontend Developer",
      logoUrl: "/work/pvg.png",
      start: "February 2023",
      end: "August 2023",
      description:
        "Developed Posy Resto, including the Admin Panel, Point of Sales Web App, and Digital Menu, using NextJS, TypeScript, and TailwindCSS. Implemented MVVM architecture, doubling project speed and enhancing maintainability and team collaboration. Achieved 80% unit test coverage and wrote comprehensive technical documentation. Integrated SEO and Google Analytics for user behavior tracking, while fostering coding standard consistency and a culture of continuous improvement within the development team.",
    },
    {
      company: "Staffinc",
      href: "https://staffinc.co/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/work/staffinc.png",
      start: "February 2021",
      end: "December 2022",
      description:
        "Collaborated with cross-functional teams to enhance the HR Management System used by Staffinc clients for over 100 agents, utilizing ReactJS and NextJS. Developed maintainable, reusable components with styled components and an Atomic Design approach, doubling feature development speed. Refactored code to functional components for improved performance and created standardized JSON Schema Utils for custom data features. Prepared code for production release and authored comprehensive release documentation.",
    },
    {
      company: "Cinema XXI",
      href: "https://www.cinema21.co.id/",
      badges: [],
      location: "Jakarta",
      title: "Fullstack Developer",
      logoUrl: "/work/xxi.png",
      start: "Mei 2019",
      end: "Jan 2021",
      description:
        "Successfully developed features for Cinema XXI’s Headoffice Portal, including a cinema layout designer for over 100 studios, a movie listing tool, and a pricing calendar for special events, all using ReactJS. Improved internal transaction reconciliation tools for the Finance Division with a PHP stack, streamlining processes and reducing manual effort.",
    },
    {
      company: "Telkom Indonesia",
      href: "https://www.telkom.co.id",
      badges: [],
      location: "Jakarta",
      title: "Fullstack Developer",
      logoUrl: "/work/telkom.png",
      start: "July 2013",
      end: "Mei 2019",
      description:
        "Developed multiple product websites using PHP CodeIgniter, including Dashboard Speedy and Matakita.com. Enhanced Edumail with real-time chat and dashboard features leveraging Golang, WebSocket, and JavaScript. Created Mattermost as a cost-effective alternative to Slack using ReactJS. Led key projects such as MADP BRI and Katalog BUMN, driving successful outcomes.",
    },
  ],
  education: [
    {
      school: "Budi Luhur University",
      href: "https://www.budiluhur.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/school/ubl.png",
      start: "2013",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Dzikir Al Matsurat - Web App - PWA",
      href: "https://dzikir-almatsurat.netlify.app/",
      dates: "2025",
      active: true,
      description:
        "Development Dzikir Al Ma'tsurat Web App with simple HTML, CSS and Javascript. Support with PWA",
      technologies: ["HTML", "CSS", "Javascript", "PWA", "Netlify"],
      links: [
        {
          type: "Website",
          href: "https://alfanfauzy.github.io/dzikir-almatsurat/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/dzikir-almatsurat.png",
      video: "",
    },
    {
      title: "Moduit Web Advisor",
      href: "https://advisor-beta.moduit.id/",
      dates: "2023-2025",
      active: true,
      description:
        "Development website for Advisor that provide digital product investment like bond, mutual fund, equity, insurance",
      technologies: ["React", "NextJS", "Styled Component", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://advisor-beta.moduit.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/portofolio-advisor.jpeg",
      video: "",
    },
    {
      title: "Radar Dashboard - AI Dashboard Monitoring Social Media",
      href: "-",
      dates: "2025",
      active: false,
      description:
        "Development dashboard monitoring social media support with AI",
      technologies: ["React", "Bootstrap", "Websocket"],
      links: [
        {
          type: "Website",
          href: "-",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/radar-dashboard.jpeg",
      video: "",
    },
    {
      title: "Point of Sales - Restaurant (Posy Resto)",
      href: "https://dashboard.posy.tech/auth/login",
      dates: "2023",
      active: false,
      description:
        "Development HR Management System to managing workers through outsourcing services and employment solutions",
      technologies: ["React", "Typescript", "NextJS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://dashboard.posy.tech/auth/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/posy-resto.png",
      video: "",
    },
    {
      title: "Personal Website - Alfan",
      href: "https://personal-web-sable-eight.vercel.app/",
      dates: "2023",
      active: false,
      description:
        "My Personal Website to show my skill, experience and expertise as Web Development",
      technologies: ["React", "Typescript", "NextJS", "TailwindCSS", "PWA"],
      links: [
        {
          type: "Website",
          href: "https://personal-web-sable-eight.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/personal-website-alfan.png",
      video: "",
    },
    {
      title: "Staffinc HR Management System",
      href: "https://client.staffincsuite.co/login",
      dates: "2021-2022",
      active: false,
      description:
        "Development HR Management System to managing workers through outsourcing services and employment solutions",
      technologies: ["React", "Typescript", "NextJS", "Styled Component"],
      links: [
        {
          type: "Website",
          href: "https://client.staffincsuite.co/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/staffinc-hr.jpeg",
      video: "",
    },
    {
      title: "Ganesport Foundation",
      href: "https://www.ganesport.org/",
      dates: "2019",
      active: false,
      description: "Help to ensure the website is running well and maintains",
      technologies: ["Wordpress"],
      links: [
        {
          type: "Website",
          href: "https://www.ganesport.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/ganesport.png",
      video: "",
    },
    {
      title: "Yayasan Muslim Mandiri Indonesia",
      href: "https://muslimmandiri.or.id/",
      dates: "2017 - current",
      active: false,
      description: "Designed, developed website for our foundation.",
      technologies: ["Wordpress"],
      links: [
        {
          type: "Website",
          href: "https://muslimmandiri.or.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/muslimmandiri.png",
      video: "",
    },
  ],
};
