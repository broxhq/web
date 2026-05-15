import { Logo } from "./logo";
import { InstallBlock } from "./install-block";

const skills = [
  {
    name: "@brox/pdf-extractor",
    desc: "Extract text from PDFs",
    href: "https://github.com/broxhq/examples/tree/main/pdf-extractor",
  },
  {
    name: "@brox/web-fetch",
    desc: "Fetch URLs as clean text",
    href: "https://github.com/broxhq/examples/tree/main/web-fetch",
  },
  {
    name: "@brox/git-context",
    desc: "Repo awareness for agents",
    href: "https://github.com/broxhq/examples/tree/main/git-context",
  },
  {
    name: "@brox/sqlite-query",
    desc: "Inspect and query .db files",
    href: "https://github.com/broxhq/examples/tree/main/sqlite-query",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      {/* Hero */}
      <section className="space-y-10">
        <Logo size={56} />

        <div className="space-y-5">
          <h1 className="text-5xl font-black leading-none tracking-[-0.04em] sm:text-7xl">
            brox
          </h1>
          <p className="max-w-xl text-lg text-zinc-400 sm:text-xl">
            The package manager for AI agent skills.
          </p>
        </div>

        <InstallBlock command="npm install -g @broxhq/cli" />

        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/broxhq"
            className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Browse skills →
          </a>
          <a
            href="https://github.com/broxhq/cli"
            className="rounded-md border border-zinc-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-zinc-700 hover:bg-zinc-900"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* What's a skill */}
      <section className="mt-28 space-y-6 sm:mt-32">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What&apos;s a skill?
        </h2>
        <p className="leading-relaxed text-zinc-400">
          A self-contained bundle of instructions, scripts, and references that
          extends an AI agent&apos;s capabilities. Drop one into your project
          and your agent gains a new ability — read PDFs, query databases, scan
          git history, fetch websites.
        </p>
        <InstallBlock command="brox install @brox/pdf-extractor" />
        <p className="text-sm text-zinc-500">
          Skills land in{" "}
          <code className="text-zinc-300">.claude/skills/</code> — the
          convention recognized by Claude Code, Cursor, Cline, and Continue.
        </p>
      </section>

      {/* Available now */}
      <section className="mt-28 space-y-6 sm:mt-32">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Available now
        </h2>
        <ul className="divide-y divide-zinc-900">
          {skills.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-mono text-white transition-colors group-hover:text-accent">
                  {s.name}
                </span>
                <span className="text-sm text-zinc-500">{s.desc}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-zinc-500">
          Full list lives in{" "}
          <a
            href="https://github.com/broxhq/registry"
            className="text-zinc-300 underline-offset-2 hover:text-white hover:underline"
          >
            broxhq/registry
          </a>
          .
        </p>
      </section>

      {/* Publish */}
      <section className="mt-28 space-y-6 sm:mt-32">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Publish your own
        </h2>
        <p className="leading-relaxed text-zinc-400">
          Scaffold a skill with{" "}
          <code className="text-white">brox init</code>, edit{" "}
          <code className="text-white">SKILL.md</code>, push to GitHub, and
          publish. CI validates the manifest, ownership, and source repo, then
          auto-merges — usually in under a minute.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-zinc-900 bg-zinc-950 p-4 text-sm">
          <code className="font-mono text-zinc-300">
            <span className="text-accent">$</span> brox init
            {"\n"}
            <span className="text-accent">$</span> brox login
            {"\n"}
            <span className="text-accent">$</span> brox publish
          </code>
        </pre>
        <p className="text-sm text-zinc-500">
          You publish under your GitHub username as the scope:{" "}
          <code className="text-zinc-300">@alice/*</code> belongs to{" "}
          <code className="text-zinc-300">alice</code>.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-28 flex flex-col justify-between gap-4 border-t border-zinc-900 pt-10 text-sm text-zinc-500 sm:mt-32 sm:flex-row">
        <span className="font-mono">brox.dev</span>
        <nav className="flex flex-wrap gap-6">
          <a
            href="https://github.com/broxhq"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@broxhq/cli"
            className="transition-colors hover:text-white"
          >
            npm
          </a>
          <a
            href="https://github.com/broxhq/spec"
            className="transition-colors hover:text-white"
          >
            Spec
          </a>
          <a
            href="https://github.com/broxhq/registry"
            className="transition-colors hover:text-white"
          >
            Registry
          </a>
        </nav>
      </footer>
    </main>
  );
}
