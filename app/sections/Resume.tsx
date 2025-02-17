
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Resume = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="resume"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">

                <Image
                    src="/projects/resume.jpg"
                    alt="/resume.jpg"
                    priority={true}
                />
            </div>
        </section>
    );
};

export default Resume;
