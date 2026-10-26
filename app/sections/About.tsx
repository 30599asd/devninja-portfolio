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
                    text={"关于我"} // 原为 Kamil Nowak (名字)，改成了“关于我”。如果想显示名字，可以改成"张三"
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="我是一名充满热情的全栈与区块链开发者，拥有丰富的 Web 应用开发经验。我精通 React、Vue.js 和 Next.js 等前端框架，以及 Node.js 和 Django 等后端技术。我致力于打造流畅的用户体验，并编写整洁高效的代码。" />

                        <AnimatedBody
                            delay={0.1}
                            text="我对区块链技术及其推动创新的潜力充满热情。我曾参与去中心化应用的开发，通过集成区块链解决方案，构建安全、前沿的系统。"
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="我始终保持对学习的渴望，努力走在行业趋势的前沿，致力于构建具有影响力的应用程序，不断突破现代软件开发的边界。"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
