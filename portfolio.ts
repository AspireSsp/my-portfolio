import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Sanjay Prajapat",
  title: "Hi all, I'm Sanjay",
  description:
    "Experienced Full Stack Developer specializing in building robust and scalable web and mobile applications. With a passion for problem-solving and a strong background in MERN stack (MongoDB, Express.js, React.js, Node.js), React Native, Flutter, AWS, and Firebase, I strive to create innovative solutions that meet the needs of clients and users. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/file/d/1KISwvxB4cN531UJMdd-YMN7TCYylQWR9/view?usp=sharing",
};

export const openSource = {
  githubUserName: "AspireSsp",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:sanjayprajapat68149@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjay-prajapat-4187a0208/",
  github: "https://github.com/AspireSsp",
  instagram: "https://www.instagram.com/aspire_ssp",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Nodejs & Express and Loopback Framework"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "devicon:nodejs-wordmark",
        },
        {
          skillName: "ExpressJs",
          iconifyTag: "skill-icons:expressjs-dark",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "React Native",
          iconifyTag: "tabler:brand-react-native",
        },
        {
          skillName: "Flutter",
          iconifyTag: "devicon:flutter",
        },
        {
          skillName: "Material UI",
          iconifyTag: "simple-icons:mui",
        },
        {
          skillName: "Chakra UI",
          iconifyTag: "simple-icons:chakraui",
        },
        {
          skillName: "Tailwind CSS",
          iconifyTag: "devicon:tailwindcss",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Redux",
          iconifyTag: "skill-icons:redux",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "devicon:mongodb",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "devicon:postgresql-wordmark",
        },
        {
          skillName: "Redis",
          iconifyTag: "devicon:redis-wordmark",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Nginx",
          iconifyTag: "devicon:nginx",
        },
        {
          skillName: "Linux",
          iconifyTag: "logos:linux-tux",
        },
        {
          skillName: "Postman",
          iconifyTag: "devicon:postman",
        },
        {
          skillName: "CPP",
          iconifyTag: "skill-icons:cpp",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Etherium",
          iconifyTag: "streamline:ethereum-solid",
        },
        {
          skillName: "Hardhat",
          iconifyTag: "logos:hardhat-icon",
        },
        {
          skillName: "Solidity",
          iconifyTag: "skill-icons:solidity",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend Development", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend Development",
    progressPercentage: "95",
  },
  {
    Stack: "Competitive Programming",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Indira Gandhi Engineering College Sagar (M.P.) India",
    subHeader: "Bachelor of Technology- ( Information Technology )",
    duration: "September 2020 - April 2024",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "Eulogik",
    companyLogo: "/img/icons/common/eulogik.png",
    date: "Jan 2023 - Sept 2023",
    desc: "Crafted robust mobile application backends employing Nodejs and REST APIs. Leveraged Express and Loopback REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer",
    company: "Xamnation",
    companyLogo: "/img/icons/common/xamnation.webp",
    date: "oct 2022 - Jan 2023",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Web Developer Intern",
    company: "Carikture",
    companyLogo: "/img/icons/common/carik.jpeg",
    date: "July 2023 - Sep 2022",
    desc: "",
    descBullets: [
      "Created responsive and user-friendly web applications, ensuring an enhanced and intuitive user experience.",
      "Implemented efficient front-end solutions, utilizing HTML, CSS, and JavaScript to achieve optimal website performance.",
      "Collaborated with cross-functional teams to deliver high-quality web solutions, meeting project requirements and deadlines"
    ],
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Perfect Media",
    companyLogo: "/img/icons/common/perfect.png",
    date: "Sept 2023 - Dec 2022",
    desc: "A skilled full-stack developer crafting dynamic web applications using the MERN stack (MongoDB, Express, React, Node.js). Adept at building both the user-facing interfaces and robust back-end logic, ensuring seamless user experiences and efficient data management.",
    descBullets: [
      "Full-stack expertise: covering both front-end and back-end development.",
      // "Implemented efficient front-end solutions, utilizing HTML, CSS, and JavaScript to achieve optimal website performance.",
      // "Collaborated with cross-functional teams to deliver high-quality web solutions, meeting project requirements and deadlines"
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Ditch the cookie-cutter templates and elevate your online presence with this modern and fully responsive portfolio, built for impactful self-expression. Packed with the power of React.js, Next.js, and Bootstrap, this template empowers you to seamlessly showcase your skills and projects as a software developer, leaving a lasting impression on potential employers and collaborators.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Online Integrated Development Environment",
    desc: "Unleash your coding prowess as you write and run code seamlessly in our innovative environment. But that's not all - we take your coding experience to the next level by allowing you to effortlessly save your projects. Retrieve your masterpieces anytime, anywhere, through a unique, shareable link! ",
    github: "https://github.com/AspireSsp/online-ide-client",
    link: "https://online-ide-z05y.onrender.com/ ",
  },
  {
    name: "Social Media Web App",
    desc: "A dynamic social media web app enthusiast with a passion for fostering connections and engaging content. Proficient in leveraging online platforms for effective communication and community building. Experienced in utilizing social media tools to enhance digital presence and connectivity. #SocialMedia #CommunityBuilding #DigitalCommunication",
    link: "https://mememetaverse1.onrender.com/",
    github: "https://github.com/AspireSsp/memeMetaverse-frontEnd",
  },
  {
    name: "Perfect Media WebSite",
    desc: "Perfect Media is your partner for elevating election campaigns to new heights. With a strategic fusion of insightful data analysis and creative communication, we craft impactful narratives that resonate with the hearts and minds of your audience. Our expertise fuels your campaign's success, delivering precision, innovation, and results",
    link: "https://perfect-mediaa.web.app/",
    github: "https://github.com/AspireSsp/perfect-media"
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Shri Vijay",
    role: "BRAND DIRECTOR",
    feedback:
      "Sanjay has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Sanjay for any Full Stack Nodejs, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },

];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Sanjay Prajapat",
  description: greetings.description,
  author: "Sanjay Prajapat",
  image: "https://avatars.githubusercontent.com/u/91794054?v=4",
  url: "",
  keywords: [
    "Sanjay",
    "aspire ssp",
    "AspireSsp",
    "Sanjay prajapati",
    "portfolio",
    "sanjay Portfolio ",
    "sanjay prajapat Portfolio ",
    "aspire Portfolio ",
    "aspireSsp Portfolio ",
    "sanjay's Portfolio",
    "sanjay full stack developer",
    "sanjay web developer",
    "sanjay MERN stack developer",
  ],
};
