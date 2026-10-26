import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    // 修改为你分配的域名
    metadataBase: new URL("https://devninja.sun-kissed.online/"),
    title: "前端开发者 | 个人作品集", // 可以把“前端开发者”改成客户的名字，如“张三 | 个人作品集”
    description:
    "这是一个基于 React、TypeScript、Tailwind CSS 和 Framer Motion 构建的现代化个人作品集，展示我的项目经历与技术栈。",
    generator: "Next.js",
    applicationName: "个人作品集",
    keywords: [
        "作品集",
        "个人网站",
        "前端开发",
        "前端工程师",
        "React开发",
        "Next.js开发",
        "全栈开发",
        "程序员",
        "网页设计",
        "UI设计",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "前端开发者 | 个人作品集",
        description:
      "这是一个基于 React、TypeScript、Tailwind CSS 和 Framer Motion 构建的现代化个人作品集。",
        url: "https://devninja.sun-kissed.online/",
        siteName: "个人作品集",
        images: [
            {
                // 如果图片路径不对导致报错，可以先把 images 这一段注释掉
                url: "./public/metadata.jpg", 
                width: 1200,
                height: 630,
                alt: "前端开发者个人作品集",
            },
        ],
        locale: "zh_CN", // 改为中文地区
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        // 语言修改为 zh-CN
        <html lang="zh-CN">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
