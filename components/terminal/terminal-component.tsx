"use client";

import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { useTheme } from "@/lib/theme-context";

interface TerminalProps {
    className?: string;
}

const TerminalComponent: React.FC<TerminalProps> = ({ className }) => {
    const terminalRef = useRef<HTMLDivElement>(null);
    const xtermRef = useRef<Terminal | null>(null);
    const fitAddonRef = useRef<FitAddon | null>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (!terminalRef.current) return;

        const term = new Terminal({
            cursorBlink: true,
            fontFamily: '"JetBrains Mono", "Fira Code", monospace',
            fontSize: 14,
            theme: {
                background: "#00000000", // Transparent by default to let container bg show
                foreground: theme === "arch" ? "#00ff00" : "#ffffff",
                cursor: theme === "arch" ? "#00ff00" : "#ffffff",
            },
            allowProposedApi: true,
        });

        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);

        term.open(terminalRef.current);
        fitAddon.fit();
        xtermRef.current = term;
        fitAddonRef.current = fitAddon;

        term.writeln("Welcome to Shigraf's Portfolio v1.0.0");
        term.writeln("Type 'help' for a list of commands.");
        term.write("$ ");

        let command = "";

        term.onData((e) => {
            switch (e) {
                case "\r": // Enter
                    term.write("\r\n");
                    handleCommand(command, term);
                    command = "";
                    break;
                case "\u007F": // Backspace
                    if (command.length > 0) {
                        term.write("\b \b");
                        command = command.substring(0, command.length - 1);
                    }
                    break;
                default:
                    if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7e) || e >= '\u00a0') {
                        command += e;
                        term.write(e);
                    }
            }
        });

        const handleResize = () => fitAddon.fit();
        window.addEventListener("resize", handleResize);

        return () => {
            term.dispose();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Update theme dynamically
    useEffect(() => {
        if (xtermRef.current) {
            xtermRef.current.options.theme = {
                background: "#00000000",
                foreground: theme === "arch" ? "#10b981" : "#ffffff", // tailwind colors approximation
                cursor: theme === "arch" ? "#10b981" : "#ffffff",
            }
        }
    }, [theme])

    const handleCommand = (cmd: string, term: Terminal) => {
        const trimmed = cmd.trim().toLowerCase();

        switch (trimmed) {
            case "help":
                term.writeln("Available commands:");
                term.writeln("  about    - Who is Shigraf?");
                term.writeln("  projects - List projects");
                term.writeln("  skills   - Tech stack");
                term.writeln("  clear    - Clear screen");
                term.writeln("  sudo     - ???");
                break;
            case "about":
                term.writeln("Shigraf Salik | AI Engineer");
                term.writeln("Working at intersection of cognitive science and ML.");
                break;
            case "projects":
                term.writeln("Check out the Projects page for visual demos!");
                break;
            case "skills":
                term.writeln("Python, Rust, React, Next.js, PyTorch, TF.");
                break;
            case "clear":
                term.clear();
                break;
            case "sudo":
                term.writeln("User is not in the sudoers file. This incident will be reported.");
                break;
            case "":
                break;
            default:
                term.writeln(`Command not found: ${trimmed}`);
        }
        term.write("$ ");
    };

    return <div ref={terminalRef} className={className} style={{ width: "100%", height: "100%" }} />;
};

export default TerminalComponent;
