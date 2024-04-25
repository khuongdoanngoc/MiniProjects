"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface ProjectProps {
    name: string;
    description: string;
    img: StaticImageData;
    link: string;
}
export default function Project({
    name,
    description,
    img,
    link,
}: ProjectProps) {
    const router = useRouter();
    return (
        <div className="flex box-border gap-5 mt-12">
            <div className="flex flex-col w-[30%] pt-12">
                <h1 className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900">
                    {name}
                </h1>
                <p className="mt-6 text-base leading-7 text-slate-700">
                    {description}
                </p>
                <div className="flex gap-6 mt-4">
                    <div className="flex gap-1 items-center text-sm font-medium text-slate-500">
                        <svg
                            className="h-8 w-8 flex-none stroke-current text-slate-400"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                            <ellipse
                                cx="16"
                                cy="16"
                                rx="13"
                                ry="5"
                                transform="rotate(60 16 16)"></ellipse>
                            <ellipse
                                rx="13"
                                ry="5"
                                transform="matrix(-.5 .86603 .86603 .5 16 16)"></ellipse>
                            <circle cx="16" cy="16" r="2"></circle>
                        </svg>
                        <span>React</span>
                    </div>
                    <div className="flex gap-1 items-center text-sm font-medium text-slate-500">
                        <svg
                            className="h-8 w-8 flex-none stroke-current text-slate-400"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <defs>
                                <linearGradient
                                    id="next-icon-gradient-a"
                                    x1="15.125"
                                    y1="18.25"
                                    x2="24.25"
                                    y2="27.375"
                                    gradientUnits="userSpaceOnUse">
                                    <stop
                                        offset=".24"
                                        stopColor="currentColor"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="currentColor"
                                        stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="next-icon-gradient-b"
                                    x1="20.5"
                                    y1="11.25"
                                    x2="20.5"
                                    y2="18.25"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="currentColor"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="currentColor"
                                        stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <path d="M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"></path>
                            <path
                                d="M12 21.5V12l12.25 14.25"
                                stroke="url(#next-icon-gradient-a)"></path>
                            <path
                                d="M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z"
                                fill="url(#next-icon-gradient-b)"
                                strokeWidth="0"></path>
                        </svg>
                        <span>Next.js</span>
                    </div>
                </div>
                <button
                    onClick={() => router.replace(`${link}`)}
                    className="bg-slate-900 rounded-lg text-sm font-semibold py-3 px-4 w-[9rem] mt-9 text-slate-50 hover:bg-slate-700">
                    Live preview
                </button>
            </div>
            <div className="w-[70%]">
                <Image className="w-full rounded-2xl" src={img} alt="banner" />
            </div>
        </div>
    );
}
