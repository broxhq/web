"use client";

import { useState } from "react";

export function InstallBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <div className="flex items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-950 px-4 py-3">
      <span className="font-mono text-accent select-none">$</span>
      <code className="flex-1 font-mono text-sm text-white sm:text-base">
        {command}
      </code>
      <button
        onClick={onCopy}
        aria-label="Copy install command"
        className="font-mono text-xs uppercase tracking-wider text-zinc-500 transition-colors hover:text-white"
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}
