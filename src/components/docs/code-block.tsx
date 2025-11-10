"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib";

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
}

export default function CodeBlock({ code, language = "bash", title }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
            {title && (
                <div className="text-xs text-muted-foreground mb-2 font-medium">
                    {title}
                </div>
            )}
            <div className="bg-neutral-900/50 rounded-lg border border-neutral-800 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800">
                    <span className="text-xs text-muted-foreground uppercase">{language}</span>
                    <button
                        onClick={copyToClipboard}
                        className={cn(
                            "p-1.5 rounded-md transition-all",
                            copied
                                ? "bg-green-500/10 text-green-500"
                                : "hover:bg-neutral-800 text-muted-foreground"
                        )}
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                    <code className="text-sm text-purple-400 font-mono">{code}</code>
                </pre>
            </div>
        </div>
    );
}
