"use client";

import { BlogsType } from "@/types/blogstypes";
import React from "react";
import BlurFade from "./magicui/blur-fade";
import { dateFormatter } from "@/lib/utils";
import { CalendarDays, Clock2, MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type BlogCardProps = {
    post: BlogsType;
    key: number;
};

const BLUR_FADE_DELAY = 0.04;
const BlogCard = (props: BlogCardProps) => {
    const { post, key } = props;
    return (
        <BlurFade
            delay={BLUR_FADE_DELAY * 2 + key * 0.05}
            key={post.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-auto h-full flex flex-col"
        >
            <Link
                href={`/blog/${post.slug}`}
                className="group h-full flex flex-col"
            >
                {/* Image Section */}
                <div className="relative h-64 bg-gray-800">
                    <img
                        src={post.cover_image ?? post.social_image}
                        alt={post.slug}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1 gap-3">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 leading-tight">
                        {post.title}
                    </h2>

                    {/* Meta Information */}
                    <div className="flex flex-row items-center gap-2 text-sm text-gray-500 justify-between mb-4">
                        <div className="flex items-center gap-1">
                            <CalendarDays size={16} />
                            <span>
                                {dateFormatter(
                                    new Date(post.created_at),
                                    "MMMM dd, yyyy"
                                )}
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock2 size={16} />
                            <p className="text-sm text-gray-500 dark:text-neutral-400">
                                {post.reading_time_minutes} Mins Read
                            </p>
                        </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.description}
                    </p>

                    {/* Read More Link */}
                    <div className="mt-auto flex justify-between">
                        <motion.span
                            whileHover="hover" // trigger animation on hover
                            className="group text-slate-400 text-sm font-medium hover:text-blue-800 transition-colors duration-200 uppercase tracking-wide flex gap-2 items-center mt-auto cursor-pointer"
                        >
                            READ MORE
                            <motion.div
                                variants={{
                                    hover: { x: 5 }, // animate on parent hover
                                    initial: { x: 0 },
                                }}
                                initial="initial"
                                transition={{ type: "spring", stiffness: 300 }}
                                className="inline-block"
                            >
                                <MoveRight className="group-hover:text-blue-800 transition-colors duration-300" />
                            </motion.div>
                        </motion.span>

                        {/**Tags */}
                        <div className="flex gap-2 justify-end">
                            {post.tag_list.map((tag, index) => (
                                <span
                                    key={index}
                                    className="tracking-tighter border rounded-full p-1 text-sm text-gray-500 bg-slate-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </BlurFade>
    );
};

export default BlogCard;
