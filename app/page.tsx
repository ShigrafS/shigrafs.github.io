"use client";

import React from "react";
import dynamic from "next/dynamic";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Github, Linkedin, Twitter, FileText, Cpu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Terminal = dynamic(() => import("@/components/terminal/terminal-component"), {
  ssr: false,
  loading: () => <div className="p-4 font-mono text-sm text-muted-foreground">Initializing Terminal...</div>,
});

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="container mx-auto px-4 py-8 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 grid-rows-[auto]"
      >
        {/* Hero Section - Spans full width or large area */}
        <motion.div variants={item} className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2">
          <GlassCard className="h-full flex flex-col justify-center p-8 md:p-12 min-h-[400px]">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50 mb-6 data-[theme=arch]:text-primary data-[theme=arch]:bg-none">
              Regal. Rebel. <br /> AI Engineer.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl data-[theme=arch]:text-primary/80">
              I build intelligence at the intersection of computational cognitive science and machine learning.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="rounded-full data-[theme=arch]:rounded-none">
                <Link href="/projects">
                  View Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="rounded-full data-[theme=arch]:rounded-none">
                <Link href="/about">More About Me</Link>
              </Button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Social Links Stack */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
          <GlassCard hoverEffect className="flex-1 flex items-center justify-between group cursor-pointer relative overflow-hidden">
            <div className="flex items-center gap-3 relative z-10">
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </div>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
            <Link href="https://github.com/ShigrafS" target="_blank" className="absolute inset-0 z-20" />
          </GlassCard>
          <GlassCard hoverEffect className="flex-1 flex items-center justify-between group cursor-pointer relative overflow-hidden">
            <div className="flex items-center gap-3 relative z-10">
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform text-[#0077b5]" />
              <span className="font-medium">LinkedIn</span>
            </div>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
            <Link href="https://www.linkedin.com/in/shigrafsalik/" target="_blank" className="absolute inset-0 z-20" />
          </GlassCard>
          <GlassCard hoverEffect className="flex-1 flex items-center justify-between group cursor-pointer relative overflow-hidden">
            <div className="flex items-center gap-3 relative z-10">
              <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform text-foreground" />
              <span className="font-medium">X.com</span>
            </div>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
            <Link href="https://www.x.com/ShigrafS/" target="_blank" className="absolute inset-0 z-20" />
          </GlassCard>
        </motion.div>


        {/* Terminal Widget */}
        <motion.div variants={item} className="col-span-1 md:col-span-4 lg:col-span-3 min-h-[300px]">
          <GlassCard className="h-full p-0 overflow-hidden flex flex-col">
            <div className="h-8 bg-black/10 flex items-center px-4 border-b border-white/10 dark:border-white/5 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">user@shigraf: ~</span>
            </div>
            <div className="flex-1 bg-black/90 p-2 relative">
              {/* Click overlay to focus logic if needed, but xterm handles it */}
              <Terminal className="h-full" />
            </div>
          </GlassCard>
        </motion.div>

        {/* Tech Stack Mini */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-3">
          <GlassCard className="h-full min-h-[300px] flex flex-col">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cpu className="mr-2 h-5 w-5" /> Current Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Rust", "TensorFlow", "PyTorch", "Next.js", "React", "TypeScript", "Tailwind"].map(tech => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 data-[theme=arch]:rounded-none">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <div className="text-sm text-muted-foreground mb-2">System Status</div>
              <div className="flex items-center gap-2 mb-1">
                <div className="h-1.5 flex-1 bg-secondary rounded-full overflow-hidden data-[theme=arch]:rounded-none">
                  <div className="h-full bg-green-500 w-[60%]" />
                </div>
                <span className="text-xs font-mono">CPU</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-secondary rounded-full overflow-hidden data-[theme=arch]:rounded-none">
                  <div className="h-full bg-blue-500 w-[45%]" />
                </div>
                <span className="text-xs font-mono">RAM</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Resume/About Widget */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-2">
          <GlassCard className="h-full flex flex-col justify-between group cursor-pointer relative" hoverEffect>
            <FileText className="h-10 w-10 text-primary mb-4" />
            <div>
              <h3 className="font-bold text-lg">My Resume</h3>
              <p className="text-sm text-muted-foreground mt-1">Download PDF</p>
            </div>
            <Link href="/SCV.pdf" target="_blank" className="absolute inset-0" />
          </GlassCard>
        </motion.div>

        <motion.div variants={item} className="col-span-1 md:col-span-4 lg:col-span-4">
          <GlassCard className="h-full bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">Open to New Opportunities</h3>
            <p className="text-muted-foreground mb-4">
              I am currently solving problems in Text-to-Speech and Vision Transformers. Available for consulting and collaboration.
            </p>
            <div>
              <Button asChild>
                <Link href="mailto:salikshigraf@gmail.com">Contact Me</Link>
              </Button>
            </div>
          </GlassCard>
        </motion.div>

      </motion.div>
    </main>
  );
}
