import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Kamil Nowak"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="I am a full-stack and blockchain developer with 5 years of experience building scalable web applications. I specialize in frontend frameworks like React, Vue.js, and Next.js, and backend technologies such as Node.js and Django. I focus on creating seamless user experiences and clean, efficient code." />

                        <AnimatedBody
                            delay={0.1}
                            text="passionate about blockchain technology and its potential to drive innovation. I have worked on decentralized applications, integrating blockchain solutions to create secure, cutting-edge systems."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Always eager to learn and grow, I strive to stay ahead of industry trends and build impactful applications that push the boundaries of modern development."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
