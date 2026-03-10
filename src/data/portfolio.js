import {
  FaGithub,
  FaLinkedinIn,
  FaMobileAlt,
  FaPaintBrush,
  FaCode,
  FaRobot,
  FaCamera,
  FaBrain,
} from "react-icons/fa";
import {
  SiPython,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiJavascript,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

const portfolioData = {
  /* ───────── HERO ───────── */
  hero: {
    greeting: "Hi I am",
    name: "Khawaja Talha Humayun",
    titles: [
      "Computer Vision Engineer",
      "AI Automation Engineer",
      "ML Engineer",
    ],
    bio: "Building and shipping real-world AI detection systems and intelligent automation — from raw data to live production deployment.",
    stats: [
      { value: 9, suffix: "+", label: "Years Experience" },
      { value: 5, suffix: "+", label: "Key Projects" },
      { value: 40, suffix: "+", label: "Team Members Served" },
    ],
    cvLink: "#contact",
    profileImage: "/images/profile.png",
  },

  /* ───────── SOCIAL ───────── */
  social: [
    { icon: FaLinkedinIn, url: "https://linkedin.com/in/iKhawajaTalha" },
    { icon: FaGithub, url: "https://github.com/iKhawajaTalha" },
    { icon: HiOutlineMail, url: "mailto:kh.talha.humayun@gmail.com" },
  ],

  /* ───────── NAVBAR ───────── */
  navLinks: [
    { label: "Home", to: "hero" },
    { label: "Services", to: "services" },
    { label: "About Me", to: "about" },
    { label: "Portfolio", to: "portfolio" },
    { label: "Contact Me", to: "contact" },
  ],

  /* ───────── SERVICES ───────── */
  services: {
    title: "Services",
    subtitle:
      "End-to-end AI and computer vision solutions — from dataset engineering to production deployment.",
    items: [
      {
        icon: FaCamera,
        title: "Computer Vision",
        description:
          "Real-time object detection pipelines using YOLO architectures, IP camera integration, and on-screen analytics with sub-second latency.",
      },
      {
        icon: FaRobot,
        title: "AI Automation",
        description:
          "Production-grade n8n automation systems integrating Slack, OpenAI GPT-4o, Whisper, and OpenProject — handling voice-to-task pipelines, intent classification, and automated daily reminders for 40+ member teams.",
      },
      {
        icon: FaBrain,
        title: "ML Engineering",
        description:
          "Full ML lifecycle — from data collection and annotation through model training, fine-tuning, and benchmarking with Ultralytics YOLO framework.",
      },
      {
        icon: FaCode,
        title: "Web Development",
        description:
          "Lightweight dashboards and frontends using HTML, CSS, and JavaScript to visualise model outputs and make AI results accessible.",
      },
      {
        icon: FaPaintBrush,
        title: "Dataset Engineering",
        description:
          "Custom dataset construction with 1,900+ augmented images, annotation, and augmentation for diverse lighting conditions and camera angles.",
      },
      {
        icon: FaMobileAlt,
        title: "Deployment & Integration",
        description:
          "On-site inference system deployment on client machines with IP camera integration, firewall configuration, and low-latency performance.",
      },
    ],
  },

  /* ───────── ABOUT ───────── */
  about: {
    title: "About Me",
    subtitle: "Computer Vision & AI Automation Engineer",
    image: "/images/profile.png",
    bio: "Versatile Computer Vision & AI Automation Engineer with a strong track record of building and shipping real-world detection systems using YOLO architectures and production-grade AI automation pipelines. Experienced across the full ML lifecycle — from raw data collection and annotation through model training, fine-tuning, and live production deployment on client infrastructure. Recently designed and built an AI-powered project management automation system on n8n that lets a 40-member team manage OpenProject tasks entirely through Slack — including voice messages — using GPT-4o for intent classification, fuzzy user matching, and automated daily reminders. Combines deep Python and computer vision expertise with web development skills to bridge AI back-ends with practical frontends. Holds a Bachelor of Science in Computer Science from COMSATS University Islamabad — Lahore Campus. Currently working as a Machine Learning Engineer at Scraperrs Lab and actively seeking international opportunities in AI, computer vision, or full-stack ML engineering.",
    cvLink: "#contact",
  },

  /* ───────── SKILLS ───────── */
  skills: [
    { icon: SiPython, name: "Python", percentage: 95 },
    { icon: SiOpencv, name: "OpenCV", percentage: 90 },
    { icon: TbBrandOpenai, name: "YOLO / Ultralytics", percentage: 90 },
    { icon: SiPandas, name: "Pandas", percentage: 85 },
    { icon: SiNumpy, name: "NumPy", percentage: 85 },
    { icon: SiJavascript, name: "JavaScript", percentage: 75 },
  ],

  /* ───────── PORTFOLIO ───────── */
  portfolio: {
    title: "Portfolio",
    categories: [
      "All",
      "Computer Vision",
      "AI Automation",
      "Web Development",
    ],
    items: [
      {
        title: "YOLOv8 Real-Time Person Detection",
        category: "Computer Vision",
        image:
          "https://placehold.co/400x300/1a1a1a/f97316?text=Person+Detection",
        link: "#",
        description:
          "Complete pipeline from dataset collection and annotation through model training and live camera deployment, with real-time on-screen person counts and analytics.",
      },
      {
        title: "Gender Detection — Gulf Attire Dataset",
        category: "Computer Vision",
        image:
          "https://placehold.co/400x300/1a1a1a/f97316?text=Gender+Detection",
        link: "#",
        description:
          "Domain-specific dataset featuring Gulf traditional attire with YOLO model for gender classification in a culturally-aware context.",
      },
      {
        title: "Petromin Detection Model",
        category: "Computer Vision",
        image:
          "https://placehold.co/400x300/1a1a1a/f97316?text=Petromin+Model",
        link: "#",
        description:
          "Processed raw video footage, applied augmentation to build a robust training set, and trained YOLOv11 model with strong detection precision.",
      },
      {
        title: "AI-Powered Project Management Automation",
        category: "AI Automation",
        image:
          "https://placehold.co/400x300/1a1a1a/f97316?text=AI+PM+System",
        link: "#",
        featured: true,
        tech: ["n8n", "OpenProject", "Slack", "GPT-4o", "Whisper"],
        description:
          "Production-grade system for a 40+ member team — Slack Bot processes text & voice messages, classifies intent across 6 action types using GPT-4o-mini, fuzzy assignee matching, daily automated reminders, and Google Sheets audit logging.",
      },
      {
        title: "Voice-to-Task Pipeline",
        category: "AI Automation",
        image:
          "https://placehold.co/400x300/1a1a1a/f97316?text=Voice+Pipeline",
        link: "#",
        tech: ["OpenAI Whisper", "GPT-4o", "n8n", "Slack API"],
        description:
          "Transcribes Slack audio messages via OpenAI Whisper and routes them through AI classification engine supporting English, Urdu, and Roman Urdu for multilingual task management.",
      },
      {
        title: "Real-Time Analytics Dashboard",
        category: "Web Development",
        image:
          "https://placehold.co/400x300/1a1a1a/f97316?text=Dashboard",
        link: "#",
        description:
          "Lightweight HTML/CSS/JavaScript dashboard to visualise model outputs and detection metrics for non-technical stakeholders.",
      },
      {
        title: "IP Camera Inference System",
        category: "Computer Vision",
        image:
          "https://placehold.co/400x300/1a1a1a/f97316?text=IP+Camera+System",
        link: "#",
        description:
          "End-to-end deployment of inference systems on client machines with IP camera integration, firewall rules, and IP-based access restrictions.",
      },
    ],
  },

  /* ───────── CONTACT ───────── */
  contact: {
    title: "Contact Me",
    subtitle: "Lahore, Pakistan · Open to International Opportunities",
    email: "kh.talha.humayun@gmail.com",
    phone: "+92-345-4564087",
    location: "Lahore, Pakistan",
    serviceOptions: [
      "Computer Vision",
      "AI Automation",
      "ML Engineering",
      "Web Development",
      "Dataset Engineering",
      "Deployment & Integration",
    ],
  },

  /* ───────── FOOTER ───────── */
  footer: {
    logo: "KTH",
    tagline: "Computer Vision & AI Automation Engineer",
    copyright: "© 2026 Khawaja Talha Humayun. All rights reserved.",
  },
};

export default portfolioData;
