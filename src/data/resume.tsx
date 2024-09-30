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
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
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
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
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
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
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
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
      description:
        "Designed, developed and sold animated UI components for developers.",
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
