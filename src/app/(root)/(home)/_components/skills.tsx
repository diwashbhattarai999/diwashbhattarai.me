"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { SectionWrapper } from "@/components/section-items";
import { SKILLS } from "@/data/skills";

export function Skills() {
    return (
        <SectionWrapper id="skills" title="Skills">
            <div className="space-y-12">
                {SKILLS.map((category, index) => (
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                        key={index}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-primary">
                                <category.icon className="size-5" />
                            </div>
                            <h3 className="font-medium text-xl tracking-tight">{category.title}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center justify-center rounded-lg border border-input bg-muted/50 p-4 transition-colors hover:border-primary/20 hover:bg-primary/5"
                                    initial={{ opacity: 0, y: 10 }}
                                    // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                                    key={skillIndex}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.05,
                                    }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="mb-2 size-10">
                                        <Image
                                            alt={skill.name}
                                            className="size-full object-contain"
                                            height={40}
                                            src={skill.icon || "/placeholder.svg"}
                                            width={40}
                                        />
                                    </div>
                                    <span className="text-center text-secondary-foreground text-sm">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
