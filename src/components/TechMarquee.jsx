import {
  SiPython,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiJavascript,
  SiPytorch,
  SiFastapi,
  SiN8N,
  SiOpenai,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { FaSlack, FaGitAlt, FaDatabase } from "react-icons/fa";
import Marquee from "./ui/Marquee";

const techStack = [
  { icon: SiPython, name: "Python" },
  { icon: SiPytorch, name: "PyTorch" },
  { icon: TbBrandOpenai, name: "YOLO / Ultralytics" },
  { icon: SiOpencv, name: "OpenCV" },
  { icon: SiOpenai, name: "OpenAI GPT-4o" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: SiN8N, name: "n8n" },
  { icon: FaSlack, name: "Slack API" },
  { icon: SiPandas, name: "Pandas" },
  { icon: SiNumpy, name: "NumPy" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: FaDatabase, name: "REST APIs" },
  { icon: FaGitAlt, name: "Git" },
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
