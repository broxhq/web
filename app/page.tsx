import { InstallBlock } from "./install-block";
import { Logo } from "./logo";

const steps = [
  {
    n: "01",
    title: "Paste a test case",
    desc: "Plain text — steps, expected results, credentials. No special format.",
  },
  {
    n: "02",
    title: "Agent opens Chrome",
    desc: "Navigates, clicks, fills forms — exactly as a human would.",
  },
  {
    n: "03",
    title: "Live results per step",
    desc: "pass, fail, or warn in real time. Screenshots on failure.",
  },
  {
    n: "04",
    title: "Hits OTP? It asks",
    desc: "Run pauses, prompts you directly, then continues.",
  },
];

const example = `TC-001 — Login and add item to cart
URL: https://www.saucedemo.com/
Credentials: standard_user / secret_sauce

Steps:
1. Open the home page.
   Expected: login form is visible.
2. Enter credentials and click Login.
   Expected: Products page opens with 6 items.
3. Click "Add to cart" on "Sauce Labs Backpack".
   Expected: cart counter shows 1.
4. Click the cart icon.
   Expected: cart contains Sauce Labs Backpack at $29.99.`;

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">

      {/* Hero */}
      <section className="space-y-10">
        <Logo size={40} />

        <div className="space-y-3">
          <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.04em] sm:text-8xl">
            qpilot
          </h1>
          <p className="text-base text-zinc-500 sm:text-lg">
            Paste a test case. Watch it run.
          </p>
        </div>

        <div className="max-w-sm">
          <InstallBlock command="npx qpilot" />
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.npmjs.com/package/qpilot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            npm →
          </a>
          <a
            href="https://github.com/broxhq/qpilot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Steps */}
      <section className="mt-24 border-t border-zinc-900 sm:mt-28">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-8 border-b border-zinc-900 py-6">
            <span className="font-mono text-xs text-zinc-700 mt-1 shrink-0">
              {s.n}
            </span>
            <div>
              <div className="text-sm font-medium text-white mb-1">{s.title}</div>
              <div className="text-sm text-zinc-500 leading-relaxed">{s.desc}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Example */}
      <section className="mt-24 sm:mt-28">
        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">
          Example
        </p>
        <pre className="overflow-x-auto rounded-lg border border-zinc-900 bg-zinc-950 p-5 text-xs leading-relaxed sm:text-sm">
          <code className="font-mono text-zinc-400 whitespace-pre">{example}</code>
        </pre>
        <p className="mt-3 text-xs text-zinc-700">
          Write it like you'd explain it to a colleague. The agent figures out the rest.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-zinc-900 pt-8 sm:mt-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-700 leading-relaxed">
            Requires Node.js 18+, Google Chrome, and an{" "}
            <a
              href="https://console.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Anthropic API key
            </a>
            .
          </p>
          <nav className="flex gap-5 text-xs text-zinc-600">
            <a
              href="https://github.com/broxhq/qpilot"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/qpilot"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              npm
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
