import React from "react";
import BlurFade from "./magicui/blur-fade";
import clsx from "clsx";
import Image from "next/image";

type InfiniteItem = {
    text?: string | React.ReactNode;
    logo?: string;
    logoPosition?: "left" | "right";
};

type InfiniteSliderProps = {
    pauseOnHover: boolean;
    direction: "left" | "right";
    data: InfiniteItem[];
};
const InfiniteSlider = (props: InfiniteSliderProps) => {
    const { pauseOnHover, direction, data } = props;

    return (
        <div
            className={clsx(
                "overflow-hidden whitespace-nowrap",
                pauseOnHover && "group"
            )}
        >
            <div
                className={clsx(
                    "animate-slid flex w-max group-hover:[animation-play-state:paused]",
                    direction === "right"
                        ? "animate-slide-right"
                        : "animate-slide-left"
                )}
            >
                <BlurFade className="inline-flex">
                    <div className="flex gap-2 pt-4">
                        {[...data, ...data].map((skill, id) => (
                            <BlurFade
                                key={`${skill.text}-${id}`}
                                className="inline-block"
                            >
                                <div
                                    className={`text-sm border rounded-full inline-flex gap-1 p-2 items-center hover:shadow-lg bg-slate-100 border-slate-400 dark:bg-inherit`}
                                >
                                    <Image
                                        src={skill.logo as string}
                                        height={20}
                                        width={20}
                                        alt={skill.text as string}
                                    />
                                    {skill.text}
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </BlurFade>
            </div>
        </div>
    );
};

export default InfiniteSlider;
