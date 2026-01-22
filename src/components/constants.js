import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const DATA = {
  profile: {
    name: "VIGNESH KASTHURISAMY",
    role: "Full Stack Developer",
    summary:
      "I’m a full-stack developer building robust web applications across frontend and backend with modern technologies.",
  },

  introduction: {
    paragraph1: ' I’m a Full Stack Engineer specializing in React and React Native, with a strong focus on building pixel-perfect, intuitive user interfaces backed by clean, scalable, and high-performance architectures. I enjoy working at the intersection of design and engineering, where thoughtful user experience meets robust implementation.',
    paragraph2: 'Currently, I work as a Full Stack Engineer, building scalable web and mobile applications using React, React Native, and the MERN stack. I focus on creating pixel-perfect, intuitive user interfaces backed by clean, high-performance architectures. My role spans frontend, backend, and cloud infrastructure, leveraging AWS services to design and deploy reliable, cloud-native solutions. I’m deeply invested in code quality, performance optimization, and maintainability, delivering products end-to-end from concept through production while balancing strong engineering practices with thoughtful user experience.',
    paragraph3: 'Previously, I worked across multiple engineering roles where I helped build and scale complex web applications in enterprise, Entertainment AdTech, Networking, Education and E-commerce domains. I led frontend modernization efforts, including migrating large Angular applications to React functional components, significantly reducing technical complexity and improving maintainability. I developed interactive dashboards, data visualizations, and network topology tools, while also delivering secure, compliance-driven applications for regulated environments. Alongside hands-on development, I improved code quality through stronger testing practices, established coding standards, implemented CI/CD pipelines, and contributed to team growth through mentoring, Agile delivery, and technical hiring.',
    paragraph4: 'Outside of work, you can usually find me playing chess, cricket, listening to music and reading books, also hanging out with my family and friends.',
  },

  projects: [
    {
      title: "PlayStation Digital Products Website",
      description:
        "Enterprise-scale web platform for managing and showcasing PlayStation digital products, built with a focus on performance, scalability, and seamless user experience.",
      image: "/images/projects/playstation-vega.png",
    },
    {
      title: "PlayStation Finance Management Website",
      description:
        "Internal finance management platform for PlayStation, providing dashboards, reporting, and data-driven insights to support business operations.",
      image: "/images/projects/playstation-fma.png",
    },
    {
      title: "Agathiyar Pyramid Website",
      description:
        "Public-facing website for a spiritual organization, featuring events, media galleries, and content management for community engagement.",
      image: "/images/projects/agathiyar.png",
      link: "https://www.agathiyarpyramid.org",
    },
    {
      title: "AEGIS Mobile App",
      description:
        "Cross-platform mobile application delivering a consistent and intuitive experience across iOS and Android devices.",
      image: "/images/projects/aegis.png",
      link: "https://play.google.com/store/apps/details?id=com.aegis&hl=en_IN",
    },
    {
      title: "Cisco DNAC Website",
      description:
        "Enterprise network automation and analytics platform enabling visibility, control, and optimization of large-scale network infrastructures.",
      image: "/images/projects/cisco.png",
      link: "https://www.cisco.com",
    },
    {
      title: "C1X ShopClues AdZone Website",
      description:
        "AdZone is a self-service seller-bidding platform by ShopClues that lets merchants promote products through native and customized ads. Built with C1X, it enables campaign management across desktop and mobile, driving higher visibility and sales.",
      image: "/images/projects/shopclues-adzone.png",
      link: "https://economictimes.indiatimes.com/small-biz/startups/shopclues-unveils-adzone-to-bring-in-more-sellers/articleshow/53302539.cms",
      partnerLink: "https://c1exchange.com",
    },
  ],

  navigation: ["about", "experience", "projects", "gallery", "contact"],

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/vikasthu20",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vikasthu",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/vignesh_kasthurisamy/",
      icon: FaInstagram,
    },
    {
      name: "Twitter",
      href: "https://x.com/kvigneshece08",
      icon: FaTwitter,
    },
  ],
  footer: '© 2026 VigneshKasthurisamy. All rights reserved.'
};
