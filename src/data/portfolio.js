import {
  FaGithub,
  FaLinkedinIn,
  FaMobileAlt,
  FaPaintBrush,
  FaCode,
  FaRobot,
  FaCamera,
  FaBrain,
  FaVideo,
} from "react-icons/fa";
import {
  SiPython,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiJavascript,
  SiPytorch,
  SiFastapi,
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
    bio: "Building production-grade AI detection systems and intelligent automation — from raw data to enterprise deployment serving 40+ member teams.",
    stats: [
      { value: 9, suffix: "+", label: "Years Experience" },
      { value: 4, suffix: "", label: "Enterprise Projects" },
      { value: 100, suffix: "+", label: "Product Categories" },
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
      "End-to-end AI and computer vision solutions — from dataset engineering to enterprise deployment.",
    items: [
      {
        icon: FaCamera,
        title: "Computer Vision",
        description:
          "Real-time object detection pipelines using YOLO architectures for brand detection, shelf analytics, product placement tracking, and IP camera integration.",
      },
      {
        icon: FaRobot,
        title: "AI Automation",
        description:
          "Production-grade n8n workflows integrating Slack, OpenAI GPT-4o, Whisper, and OpenProject — voice-to-task pipelines, intent classification, and automated reminders for 40+ teams.",
      },
      {
        icon: FaVideo,
        title: "Video Analytics",
        description:
          "AI-powered CCTV video processing for gender detection, parking monitoring, engagement analytics, and workplace safety — commercially deployed to enterprise clients.",
      },
      {
        icon: FaBrain,
        title: "ML Engineering",
        description:
          "Full ML lifecycle — data collection, annotation, model training, fine-tuning, and benchmarking with YOLOv8/v11, PyTorch, and Ultralytics framework.",
      },
      {
        icon: FaCode,
        title: "APIs & Dashboards",
        description:
          "FastAPI endpoints returning structured KPIs and annotated images, plus lightweight frontends to visualise model outputs for non-technical stakeholders.",
      },
      {
        icon: FaMobileAlt,
        title: "Deployment & Integration",
        description:
          "On-site inference deployment on client machines with IP camera integration, firewall configuration, and scalable architectures for 100+ product categories.",
      },
    ],
  },

  /* ───────── ABOUT ───────── */
  about: {
    title: "About Me",
    subtitle: "Computer Vision & AI Automation Engineer",
    image: "/images/profile.png",
    bio: "Versatile Computer Vision & AI Automation Engineer with a proven track record of delivering enterprise-grade AI systems. Built and deployed real-world detection platforms using YOLO architectures — from retail shelf analytics covering 100+ product categories to AI-powered video surveillance commercially deployed to clients including Nissan and AKEA. Designed an intelligent project management automation system on n8n that enables a 40-member team to manage tasks through natural language and voice commands via Slack, powered by GPT-4o and Whisper. Experienced across the full ML lifecycle — from raw data collection through model training to live production deployment. Combines deep Python, PyTorch, and OpenCV expertise with API development (FastAPI) and frontend skills to bridge AI back-ends with practical user interfaces. BS Computer Science from COMSATS University Islamabad. Currently ML Engineer at Scraperrs Lab, actively seeking international opportunities in AI, computer vision, or full-stack ML engineering.",
    cvLink: "#contact",
  },

  /* ───────── SKILLS ───────── */
  skills: [
    { icon: SiPython, name: "Python", percentage: 95 },
    { icon: SiPytorch, name: "PyTorch", percentage: 90 },
    { icon: SiOpencv, name: "OpenCV", percentage: 90 },
    { icon: TbBrandOpenai, name: "YOLO / Ultralytics", percentage: 90 },
    { icon: SiFastapi, name: "FastAPI", percentage: 85 },
    { icon: SiPandas, name: "Pandas", percentage: 85 },
    { icon: SiNumpy, name: "NumPy", percentage: 85 },
    { icon: SiJavascript, name: "JavaScript", percentage: 75 },
  ],

  /* ───────── PORTFOLIO ───────── */
  portfolio: {
    title: "Portfolio",
    categories: [
      "All",
      "AI Automation",
      "Computer Vision",
      "Video Analytics",
    ],
    items: [
      /* ── 1. AI PM Automation (LLM / AI Agents — most trendy) ── */
      {
        title: "AI-Powered Project Management Automation",
        category: "AI Automation",
        image: "https://placehold.co/400x300/1a1a1a/f97316?text=AI+PM+System",
        link: "#",
        featured: true,
        tech: ["n8n", "GPT-4o", "Whisper", "Slack API", "OpenProject", "JavaScript"],
        description:
          "Architected a production AI platform for a 40+ member team — intelligent Slack bot classifies task intents (create, complete, delay, delete, status) via GPT-4o-mini with multilingual support. Voice-to-task pipeline via Whisper, fuzzy assignee resolution, cron-based daily reminders, role validation, event deduplication, and Google Sheets audit logging.",
      },
      /* ── 2. Tarveej — Shelf Analytics Platform ── */
      {
        title: "Tarveej — AI Retail Shelf Analytics Platform",
        category: "Computer Vision",
        image: "https://placehold.co/400x300/1a1a1a/f97316?text=Tarveej",
        link: "#",
        featured: true,
        tech: ["YOLOv8", "Python", "OpenCV", "PyTorch", "FastAPI", "CVAT"],
        description:
          "AI-powered shelf analytics detecting brands, product facings, shelf zones, and promotional tags. Multi-stage CV pipeline with share-of-shelf analytics, product placement tracking (Top/Middle/Bottom), and promotional execution monitoring — scaled to 100+ product categories across retail departments.",
      },
      /* ── 3. Pulsee — Video Analytics & Workplace Safety ── */
      {
        title: "Pulsee — AI Video Analytics & Workplace Safety",
        category: "Video Analytics",
        image: "https://placehold.co/400x300/1a1a1a/f97316?text=Pulsee",
        link: "#",
        featured: true,
        tech: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
        description:
          "AI-powered video analytics platform with gender detection, parking monitoring, engagement analytics, and harassment detection. Real-time multi-camera CCTV processing with alerts and behavioral insights — commercially deployed and sold to enterprise clients including Nissan and AKEA.",
      },
      /* ── 4. Petromin / PetroLube — Campaign Monitoring ── */
      {
        title: "Petromin — AI Gondola Campaign Monitoring",
        category: "Computer Vision",
        image: "https://placehold.co/400x300/1a1a1a/f97316?text=Petromin",
        link: "#",
        tech: ["Python", "YOLO", "OpenCV", "Computer Vision"],
        description:
          "Computer vision solution for Petromin Nissan / PetroLube monitoring retail marketing campaign compliance — detecting gondola displays, product placement, and brand visibility. Measures campaign occupancy, product presence, and shelf placement accuracy across stores.",
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
      "Video Analytics",
      "ML Engineering",
      "APIs & Dashboards",
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
