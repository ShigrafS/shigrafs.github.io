"use client";

import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-8 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8 data-[theme=arch]:text-primary">About Me</h1>

                <GlassCard className="mb-8 prose prose-invert max-w-none data-[theme=arch]:prose-p:text-primary/90">
                    <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                        Shigraf is a Machine Learning and AI Engineer previously working as an ML engineer at Heva AI.
                        His work is at the intersection of <strong>computational cognitive science</strong> and <strong>machine learning</strong>.
                    </p>
                    <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                        Shigraf uses advances in machine learning to build new models to solve Text-to-Speech problems
                        and Vision Transformers to solve neural disorders.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8 not-prose">
                        <Button asChild>
                            <Link href="/SCV.pdf" target="_blank">
                                <FileText className="mr-2 h-4 w-4" /> Download Resume
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="https://dev.to/shigrafs" target="_blank">
                                Read My Blog <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </GlassCard>

                {/* Timeline or Education could go here */}

            </motion.div>
        </main>
    );
}
