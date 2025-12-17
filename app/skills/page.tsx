"use client";

import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

const skillsCategories = [
    {
        name: "Languages",
        skills: ["Python", "JavaScript/TypeScript", "Rust", "SQL", "C++"]
    },
    {
        name: "Machine Learning / AI",
        skills: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn", "OpenCV"]
    },
    {
        name: "Web Technologies",
        skills: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL"]
    },
    {
        name: "Tools & DevOps",
        skills: ["Git", "Docker", "Linux (Arch btw)", "AWS", "CI/CD"]
    }
];

export default function SkillsPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8 data-[theme=arch]:text-primary">Skills & Technologies</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsCategories.map((category, idx) => (
                        <GlassCard key={idx} className="flex flex-col">
                            <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2 data-[theme=arch]:text-primary data-[theme=arch]:border-primary/50">{category.name}</h2>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                                        className="px-4 py-2 bg-secondary rounded-lg font-medium shadow-sm hover:scale-105 transition-transform data-[theme=arch]:rounded-none data-[theme=arch]:bg-primary/10 data-[theme=arch]:text-primary data-[theme=arch]:border data-[theme=arch]:border-primary/30"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
