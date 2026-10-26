import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >
            <ContactBackground />
            <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
                <div
                    className={`flex flex-col items-start justify-center ${inter.className} relative w-full sm:items-center lg:max-w-[1440px] `}
                >
                    <AnimatedWords
                        title={"联系"} // 原为 contact，改为中文“联系”
                        style={
                            "flex max-w-[250px] flex-col items-start text-left text-[100px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[150px] md:text-[150px] lg:text-center lg:text-[120px] xl:text-[250px]"
                        }
                    />
                </div>

                <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
                    <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
                        <AnimatedBody
                            text={
                                "有任何问题、建议、项目需求，或者想一起合作吗？" // 原为 Got a question...
                            }
                            className={
                                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                            }
                        />
                        <Link
                            // 提醒：交付客户时，记得把下面的邮箱和 subject/body 模板换成客户真实的！
                            href="mailto:kamilnowak9734@gmail.com?subject=合作%20沟通&amp;body=你好，我对你的作品很感兴趣，希望能与你合作，请尽快联系我。"
                            target="_blank"
                            aria-label="发送邮件给我"
                            className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
                        >
                            <AnimatedBody text={"给我发邮件"} className={""} /> {/* 原为 Send me an email */}
                        </Link>
                        <AnimatedBody text={"Telegram : @superstar0304"} className={""} /> {/* 保留演示账号或替换 */}
                    </div>

                    <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
                        <Link
                            href="https://github.com/super-devninja"
                            target="_blank"
                            aria-label="查看 GitHub 主页"
                        >
                            <AnimatedTitle
                                text={"GITHUB"} // 保留 GITHUB 不翻译
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                       
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >
            <ContactBackground />
            <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
                <div
                    className={`flex flex-col items-start justify-center ${inter.className} relative w-full sm:items-center lg:max-w-[1440px] `}
                >
                    <AnimatedWords
                        title={"联系"} // 原为 contact，改为中文“联系”
                        style={
                            "flex max-w-[250px] flex-col items-start text-left text-[100px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[150px] md:text-[150px] lg:text-center lg:text-[120px] xl:text-[250px]"
                        }
                    />
                </div>

                <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
                    <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
                        <AnimatedBody
                            text={
                                "有任何问题、建议、项目需求，或者想一起合作吗？" // 原为 Got a question...
                            }
                            className={
                                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                            }
                        />
                        <Link
                            // 提醒：交付客户时，记得把下面的邮箱和 subject/body 模板换成客户真实的！
                            href="mailto:kamilnowak9734@gmail.com?subject=合作%20沟通&amp;body=你好，我对你的作品很感兴趣，希望能与你合作，请尽快联系我。"
                            target="_blank"
                            aria-label="发送邮件给我"
                            className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
                        >
                            <AnimatedBody text={"给我发邮件"} className={""} /> {/* 原为 Send me an email */}
                        </Link>
                        <AnimatedBody text={"Telegram : @superstar0304"} className={""} /> {/* 保留演示账号或替换 */}
                    </div>

                    <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
                        <Link
                            href="https://github.com/super-devninja"
                            target="_blank"
                            aria-label="查看 GitHub 主页"
                        >
                            <AnimatedTitle
                                text={"GITHUB"} // 保留 GITHUB 不翻译
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                       
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
