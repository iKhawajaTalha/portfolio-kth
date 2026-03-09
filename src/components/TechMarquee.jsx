import {
  SiPython,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { FaSlack, FaGitAlt } from "react-icons/fa";
import Marquee from "./ui/Marquee";

const techStack = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: TbBrandOpenai, name: "YOLO / Ultralytics", color: "#f97316" },
  { icon: SiOpencv, name: "OpenCV", color: "#5C3EE8" },
  { icon: SiPandas, name: "Pandas", color: "#150458" },
  { icon: SiNumpy, name: "NumPy", color: "#013243" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss, name: "CSS3", color: "#1572B6" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: FaSlack, name: "Slack API", color: "#4A154B" },
  { icon: FaGitAlt, name: "Git", color: "#F05032" },
];

function TechItem({ icon: Icon, name }) {
  return (
    <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-dark-lighter bg-dark-card/60 backdrop-blur-sm whitespace-nowrap hover:border-accent/30 transition-colors duration-300">
      <Icon className="text-accent text-lg shrink-0" />
      <span className="text-gray-400 text-sm font-medium">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-10 overflow-hidden">
      <Marquee speed={35} pauseOnHover>
        {techStack.map((tech, i) => (
          <TechItem key={i} {...tech} />
        ))}
      </Marquee>
    </section>
  );
}
