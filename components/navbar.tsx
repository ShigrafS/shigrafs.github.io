"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Terminal, Command as CommandIcon, Menu, Monitor } from "lucide-react";
import { CommandPalette } from "./command-palette";
import { useTheme } from "@/lib/theme-context";

export function Navbar() {
    const pathname = usePathname();
    const { theme } = useTheme();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
        { name: "About", href: "/about" },
    ];

    return (
        <>
            <CommandPalette />
            <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 data-[theme=arch]:border-primary/20 data-[theme=arch]:bg-black/90">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground data-[theme=arch]:bg-transparent data-[theme=arch]:text-primary data-[theme=arch]:border data-[theme=arch]:border-current">
                            {theme === "arch" ? <Terminal size={18} /> : <span className="font-bold text-lg">S</span>}
                        </div>
                        <span className="font-semibold hidden sm:inline-block data-[theme=arch]:font-mono">Shigraf Salik</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href
                                        ? "text-primary"
                                        : "text-muted-foreground",
                                    "data-[theme=arch]:font-mono"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-2">
                        <Button
                            variant="glass"
                            size="sm"
                            className="text-xs text-muted-foreground hidden lg:flex"
                            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                        >
                            <CommandIcon className="mr-2 h-3 w-3" />
                            <span className="mr-1">CMD+K</span>
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            // Trigger mobile menu logic here if needed, or just rely on cmd+K for everything on small screens?
                            // For now, assume simplified mobile nav or just this button opening CMD+K
                            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
}
