import { createFileRoute } from "@tanstack/react-router";
import giftCardImage from "@/assets/gift-card.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get Your Reward" },
      { name: "description", content: "Follow a few simple steps to receive your reward." },
      { property: "og:title", content: "Get Your Reward" },
      { property: "og:description", content: "Follow a few simple steps to receive your reward." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const steps = [
  "Click the button below",
  "Enter your email & basic info",
  "Complete 3 to 5 required deals",
  "Receive your reward once verified",
];

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
        <img
          src={giftCardImage.url}
          alt="Reward card"
          width={512}
          height={288}
          className="mb-8 w-full max-w-xs rounded-2xl object-contain"
        />

        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Follow the steps to receive your reward
        </h1>

        <ol className="mt-8 w-full space-y-4 text-left">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
                {index + 1}
              </span>
              <span className="pt-0.5 text-base text-foreground">{step}</span>
            </li>
          ))}
        </ol>

        <button
          type="button"
          className="mt-10 w-full rounded-xl bg-primary px-6 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Get Started
        </button>

        <p className="mt-4 text-xs text-muted-foreground">
          Available in selected countries - US, UK, AU, CA
        </p>
      </div>
    </main>
  );
}
