import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alfan Fauzy",
  initials: "AF",
  url: "https://alfanfauzy.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Senior Frontend Developer who live in Malang, Indonesia. I love explore about tech, try to build some things important. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: ["React", "Next.js", "Typescript", "Node.js"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
      company: "Moduit Digital Indonesia",
      href: "https://moduit.id/",
      badges: [],
      location: "Jakarta",
      title: "Senior Web Developer",
      logoUrl: "/work/moduit.png",
      start: "Dec 2023",
      end: "Current",
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
      title: "Ganesport Foundation",
      href: "https://www.ganesport.org/",
      dates: "-",
      active: true,
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
      active: true,
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
} as const;
