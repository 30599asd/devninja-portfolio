import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "E-docs UI 组件库", // 原名 E-docs UI
        description:
            "使用 React、TypeScript、Tailwind CSS 和 Framer Motion 构建的开源动画组件。100% 开源，且高度可定制。", // 翻译了描述
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "",
        demo: "https://e-docs.ua/",
        image: "/projects/e-docs.ua.jpg",
        available: true,
    },
    {
        id: 1,
        name: "智慧医疗商城", // 原名 Medcare4all
        description:
            "使用 Three.js 和 TypeScript 开发的虚拟现实商城。", // 翻译了描述
        technologies: [SiWebgl,SiTypescript, SiReact],
        techNames: ["WebGL", "TypeScript", "React"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "",
        demo: "https://medcare4all.com/",
        image: "/projects/medcare4all.jpg",
        available: true,
    },
    {
        id: 2,
        name: "CapGo-UI 交互框架", // 原名 CapGo-UI
        description:
            "使用 Next.js、TypeScript 和 Tailwind CSS 构建的开源动画组件。100% 开源，支持个性化定制。", // 翻译了描述
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "",
        demo: "https://capgo.ai/",
        image: "/projects/capgo.ai.jpg",
        available: true,
    },
    {
        id: 3,
        name: "Emily 美容会所官网", // 原名 EmilyBeautySalon
        description:
            "使用 React、TypeScript 和 Google Cloud CDN 构建的现代化响应式网站。", // 翻译了描述
        technologies: [SiTypescript, SiReact, SiTailwindcss],
        techNames: ["TypeScript", "React", "Tailwind CSS"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://tailwindcss.com/"],
        github: "",
        demo: "https://www.emilybeautysalon.com/",
        image: "/projects/Emily Beauty Salon.jpg",
        available: true,
    },
];
