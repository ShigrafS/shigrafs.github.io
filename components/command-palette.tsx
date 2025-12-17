"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, Monitor, Moon, Sun, Laptop, Home, Briefcase, Terminal, Code, User, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function CommandPalette() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();
    const { setTheme } = useTheme();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false);
        command();
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-lg overflow-hidden rounded-xl border border-white/20 bg-background/80 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-black/80 data-[theme=arch]:rounded-none data-[theme=arch]:border-primary data-[theme=arch]:bg-black">
                <Command className="w-full">
                    <div className="flex items-center border-b border-white/10 px-3 data-[theme=arch]:border-current">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <Command.Input
                            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 data-[theme=arch]:font-mono"
                            placeholder="Type a command or search..."
                        />
                        <div className="flex items-center text-xs text-muted-foreground">
                            <span className="mr-1">ESC</span>
                        </div>
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 data-[theme=arch]:font-mono">
                        <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>

                        <Command.Group heading="Navigation" className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                                <Home className="mr-2 h-4 w-4" /> Home
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("/projects"))}>
                                <Briefcase className="mr-2 h-4 w-4" /> Projects
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("/skills"))}>
                                <Code className="mr-2 h-4 w-4" /> Skills
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
                                <User className="mr-2 h-4 w-4" /> About
                            </CommandItem>
                        </Command.Group>

                        <Command.Group heading="Theme" className="text-xs font-medium text-muted-foreground px-2 py-1.5 mt-2">
                            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                                <Sun className="mr-2 h-4 w-4" /> Light Mode
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                                <Moon className="mr-2 h-4 w-4" /> Dark Mode
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => setTheme("arch"))}>
                                <Terminal className="mr-2 h-4 w-4" /> Arch / Hacker
                            </CommandItem>
                        </Command.Group>

                        <Command.Group heading="General" className="text-xs font-medium text-muted-foreground px-2 py-1.5 mt-2">
                            <CommandItem onSelect={() => runCommand(() => window.open('/SCV.pdf', '_blank'))}>
                                <FileText className="mr-2 h-4 w-4" /> Resume
                            </CommandItem>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
            {/* Close overlay on click outside if needed, handling via div wrapper above */}
            <div className="absolute inset-0 -z-10" onClick={() => setOpen(false)} />
        </div>
    );
}

function CommandItem({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[theme=arch]:aria-selected:bg-primary/20 data-[theme=arch]:aria-selected:text-primary hover:bg-accent/50 transition-colors"
        >
            {children}
        </Command.Item>
    );
}
