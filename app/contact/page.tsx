"use client";

import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 py-8 max-w-2xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8 data-[theme=arch]:text-primary">Contact</h1>

                <GlassCard className="flex flex-col gap-6">
                    <p className="text-xl text-center mb-4">
                        Let's collaborate on the next generation of AI solutions.
                    </p>

                    <Link href="mailto:salikshigraf@gmail.com" className="group">
                        <div className="flex items-center p-4 bg-secondary/50 rounded-lg transition-colors group-hover:bg-primary/10 border border-transparent group-hover:border-primary/20 data-[theme=arch]:rounded-none">
                            <Mail className="h-6 w-6 mr-4 text-primary" />
                            <div>
                                <div className="text-sm text-muted-foreground">Email</div>
                                <div className="font-semibold text-lg">salikshigraf@gmail.com</div>
                            </div>
                        </div>
                    </Link>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <Link href="https://github.com/ShigrafS" target="_blank" className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-colors data-[theme=arch]:rounded-none data-[theme=arch]:bg-primary/5 data-[theme=arch]:hover:bg-primary/20">
                            <Github className="h-8 w-8 mb-2" />
                            <span className="text-sm font-medium">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/shigrafsalik/" target="_blank" className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-colors data-[theme=arch]:rounded-none data-[theme=arch]:bg-primary/5 data-[theme=arch]:hover:bg-primary/20">
                            <Linkedin className="h-8 w-8 mb-2 text-[#0077b5]" />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </Link>
                        <Link href="https://www.x.com/ShigrafS/" target="_blank" className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-colors data-[theme=arch]:rounded-none data-[theme=arch]:bg-primary/5 data-[theme=arch]:hover:bg-primary/20">
                            <Twitter className="h-8 w-8 mb-2" />
                            <span className="text-sm font-medium">X.com</span>
                        </Link>
                    </div>

                </GlassCard>
            </motion.div>
        </main>
    );
}
