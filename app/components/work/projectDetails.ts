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
        name: "E-docs UI",
        description:
            "open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
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
        name: "Medcare4all",
        description:
            "Developed an virtual mall by using Three.js and Typescript..",
        technologies: [SiWebgl,SiTypescript, SiReact],
        techNames: ["WebGL", "Typescript", "React"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "",
        demo: "https://medcare4all.com/",
        image: "/projects/medcare4all.jpg",
        available: true,
    },
    {
        id: 2,
        name: "CapGo-UI",
        description:
            "open-source animated components built with Next.js, Typescript and Tailwind CSS. 100% open-source, and customizable.",
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
        name: "EmilyBeautySalon",
        description:
            "open-source animated components built with React, Typescript, Google Cloud CDN and  100% open-source, and customizable.",
        technologies: [SiTypescript, SiReact, SiTailwindcss],
        techNames: ["TypeScript", "React", "Tailwind CSS"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://tailwindcss.com/"],
        github: "",
        demo: "https://www.emilybeautysalon.com/",
        image: "/projects/Emily Beauty Salon.jpg",
        available: true,
    },
];
