import { InstallBlock } from "./install-block";
import { Logo } from "./logo";

const steps = [
  {
    n: "01",
    title: "Paste a test case",
    desc: "Plain text — steps, expected results, credentials. No special format required.",
  },
  {
    n: "02",
    title: "Agent opens Chrome",
    desc: "Uses your system Chrome. Navigates, clicks, fills forms — exactly as a human would.",
  },
  {
    n: "03",
    title: "Live results per step",
    desc: "Each step gets pass, fail, or warn in real time. Failed steps include a screenshot.",
  },
  {
    n: "04",
    title: "Needs OTP? It asks",
    desc: "Hits a captcha or SMS code — the run pauses and prompts you directly. Then continues.",
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
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">

      {/* Hero */}
      <section className="space-y-8">
        <Logo size={48} />

        <div className="space-y-4">
          <h1 className="text-5xl font-black leading-none tracking-[-0.04em] sm:text-7xl">
            qpilot
          </h1>
          <p className="max-w-xl text-lg text-zinc-400 sm:text-xl">
            Paste a test case. An AI agent runs it in a real browser.
          </p>
        </div>

        <InstallBlock command="npx qpilot" />

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.npmjs.com/package/qpilot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            View on npm →
          </a>
          <a
            href="https://github.com/broxhq/qpilot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-zinc-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-zinc-700 hover:bg-zinc-900"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-28 space-y-6 sm:mt-32">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          How it works
        </h2>
        <div className="space-y-0 divide-y divide-zinc-900">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-6 py-6">
              <span className="font-mono text-sm text-zinc-600 mt-0.5 shrink-0 w-6">
                {s.n}
              </span>
              <div className="space-y-1">
                <div className="font-semibold text-white">{s.title}</div>
                <div className="text-zinc-400 leading-relaxed text-sm">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Example */}
      <section className="mt-28 space-y-6 sm:mt-32">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Example test case
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Write it the way you&apos;d explain it to a colleague. The agent figures out the rest.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-zinc-900 bg-zinc-950 p-5 text-sm leading-relaxed">
          <code className="font-mono text-zinc-300 whitespace-pre">{example}</code>
        </pre>
      </section>

      {/* Requirements */}
      <section className="mt-28 space-y-4 sm:mt-32">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Requirements
        </h2>
        <ul className="space-y-2 text-zinc-400 text-sm">
          <li className="flex gap-3">
            <span className="text-accent shrink-0">✓</span>
            Node.js 18+
          </li>
          <li className="flex gap-3">
            <span className="text-accent shrink-0">✓</span>
            Google Chrome installed
          </li>
          <li className="flex gap-3">
            <span className="text-accent shrink-0">✓</span>
            <span>
              Anthropic API key —{" "}
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white underline-offset-2 hover:underline"
              >
                console.anthropic.com
              </a>
            </span>
          </li>
        </ul>
        <p className="text-xs text-zinc-600 pt-2">
          No Chromium download. Uses your existing Chrome.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-28 flex flex-col justify-between gap-4 border-t border-zinc-900 pt-10 text-sm text-zinc-500 sm:mt-32 sm:flex-row">
        <span className="font-mono">qpilot</span>
        <nav className="flex flex-wrap gap-6">
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
          <a
            href="https://github.com/broxhq"
            className="transition-colors hover:text-white"
          >
            broxhq
          </a>
        </nav>
      </footer>
    </main>
  );
}
