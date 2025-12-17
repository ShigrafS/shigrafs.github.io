"use client";

import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsPage() {
    const projects = [
        {
            title: "Project 1",
            description: "A machine learning model for analyzing cognitive patterns.",
            tags: ["Python", "PyTorch", "NLP"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Project 2",
            description: "Vision Transformer implementation for neural disorder detection.",
            tags: ["Rust", "WASM", "Vision"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Personal Portfolio",
            description: "The website you are looking at right now. Built with Next.js and Tailwind.",
            tags: ["Next.js", "React", "TypeScript"],
            links: { github: "https://github.com/ShigrafS/shigrafs.github.io", demo: "#" }
        },
        // Add more placeholders or real data if available in context
    ];

    return (
        <main className="container mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8 data-[theme=arch]:text-primary">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <GlassCard key={i} className="flex flex-col h-full group" hoverEffect>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md data-[theme=arch]:rounded-none data-[theme=arch]:bg-primary/20 data-[theme=arch]:text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <Button asChild variant="outline" size="sm" className="data-[theme=arch]:border-primary data-[theme=arch]:text-primary">
                                    <Link href={project.links.github} target="_blank"><Github className="mr-2 h-4 w-4" /> Code</Link>
                                </Button>
                                <Button asChild variant="default" size="sm" className="data-[theme=arch]:bg-primary data-[theme=arch]:text-black">
                                    <Link href={project.links.demo} target="_blank"><ExternalLink className="mr-2 h-4 w-4" /> Demo</Link>
                                </Button>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
