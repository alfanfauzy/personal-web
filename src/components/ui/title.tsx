import React, { ReactNode } from "react";
import BlurFade from "../magicui/blur-fade";

type TitleProps = {
    title: string | ReactNode;
};

const Title = (props: TitleProps) => {
    const { title } = props;
    return (
        <BlurFade delay={0.04 * 5}>
            <div className="flex items-center pb-5">
                <hr className="flex-grow border-t border-slate-300" />
                <h4 className="text-xl font-bold tracking-tighter sm:text-3xl px-3">
                    {title}
                </h4>
                <hr className="flex-grow border-t border-slate-300" />
            </div>
        </BlurFade>
    );
};

export default Title;
