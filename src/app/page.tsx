import Image from "next/image";
import {
  HandwrittenLogo,
  HeroText,
  HeroSubtitle,
  FocusArea,
  RazeReveal,
  MascotReveal,
  ChatMessage,
  EthosReveal,
  AnimatedDivider,
  ScrollReveal,
} from "@/components/animations";

const focusAreas = [
  {
    num: "01",
    title: "Agentic Systems",
    desc: "Autonomous agents that reason, plan, and execute across chains. From intent routing to multi-step transaction orchestration.",
  },
  {
    num: "02",
    title: "Web3 Infrastructure",
    desc: "Protocol-level primitives for the next runtime. Bridging on-chain execution with off-chain intelligence at the infra layer.",
  },
  {
    num: "03",
    title: "Open Source",
    desc: "Everything we build ships public. Tools, frameworks, and research — designed to be forked, extended, and deployed by anyone.",
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section — full viewport */}
      <div className="flex min-h-screen flex-col bg-black">
        {/* Nav */}
        <nav className="flex items-center justify-between px-6 py-5 md:px-16">
          <HandwrittenLogo />
          <div className="flex items-center gap-8">
            <span className="hidden text-sm text-muted md:block">
              Research
            </span>
            <span className="hidden text-sm text-muted md:block">
              Projects
            </span>
            <span className="hidden text-sm text-muted md:block">About</span>
            <span className="font-mono text-xs text-white md:text-sm">
              Contact →
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-6 pt-16 pb-12 md:px-16 md:pt-[120px] md:pb-20">
          <HeroText />
          <HeroSubtitle>
            We&apos;re an R&D studio working at the frontier of agentic AI and
            web3. We build the infrastructure, tools, and protocols that others
            will build on — then we open-source it all.
          </HeroSubtitle>
        </section>

        <AnimatedDivider />

        {/* Focus Areas */}
        <section className="grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:gap-12 md:px-16 md:py-16">
          {focusAreas.map((area, i) => (
            <FocusArea
              key={area.num}
              num={area.num}
              title={area.title}
              desc={area.desc}
              index={i}
            />
          ))}
        </section>

        <AnimatedDivider />
      </div>

      {/* Featured Project — Raze */}
      <RazeReveal>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.1em] text-raze uppercase md:text-xs">
            Featured Project
          </span>
          <a
            href="https://raze.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-raze"
          >
            raze.fun →
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-center md:gap-16">
          {/* Left — Raze info */}
          <ScrollReveal className="flex flex-1 flex-col gap-6" delay={0.2}>
            <h2 className="font-display text-[40px] font-bold tracking-[-0.03em] text-[#1A1A1A] md:text-[52px]">
              raze.fun
            </h2>
            <p className="font-display text-[22px] font-medium leading-[30px] tracking-[-0.02em] text-[#1A1A1A] md:text-[26px] md:leading-[34px]">
              Built for people who
              <br className="hidden md:block" /> live on-chain.
            </p>
            <p className="max-w-[420px] text-[14px] leading-[22px] text-[#5A5A6E] md:text-[15px] md:leading-6">
              Trade, research, and explore Solana through natural conversation.
              Your wallet, your trades, your alpha — all in one Telegram chat.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://raze.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-raze px-7 py-3 text-sm font-semibold text-white"
              >
                Start Chatting
              </a>
              <a
                href="https://raze.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#C4B5D9] px-7 py-3 text-sm font-medium text-[#1A1A1A]"
              >
                See how it works
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Mascot + Chat card */}
          <div className="flex flex-1 flex-col items-center">
            <MascotReveal>
              <Image
                src="/raze-mascot.png"
                alt="Raze mascot"
                width={120}
                height={120}
                className="relative z-10 -mb-5 self-start md:ml-[-40px] md:self-center"
              />
            </MascotReveal>
            <div className="w-full max-w-[340px] rounded-2xl border border-[#E8DFF5] bg-white p-5 shadow-[0_4px_24px_rgba(153,69,255,0.08)] md:p-6">
              <ChatMessage delay={0.5} className="flex items-center gap-2">
                <div className="h-[6px] w-[6px] rounded-full bg-raze" />
                <span className="font-mono text-[11px] font-medium text-raze">
                  raze.fun
                </span>
              </ChatMessage>
              <div className="mt-4 flex flex-col gap-3">
                <ChatMessage delay={0.8} className="flex justify-end">
                  <div className="rounded-xl rounded-br-sm bg-[#F0EBDC] px-3.5 py-2.5">
                    <span className="text-[13px] text-[#1A1A1A]">
                      swap 5 SOL to USDC
                    </span>
                  </div>
                </ChatMessage>
                <ChatMessage
                  delay={1.2}
                  className="flex flex-col gap-1.5 rounded-xl bg-[#F8F6FF] p-3"
                >
                  <span className="text-[13px] font-semibold text-[#1A1A1A]">
                    Swap Preview
                  </span>
                  <span className="font-mono text-[11px] leading-4 text-[#5A5A6E]">
                    Send 5.0 SOL → 674.50 USDC
                  </span>
                  <div className="flex gap-2 pt-1">
                    <button className="rounded-lg bg-raze px-4 py-1.5 text-xs font-semibold text-white">
                      Confirm
                    </button>
                    <button className="rounded-lg bg-[#F0ECF8] px-4 py-1.5 text-xs font-medium text-[#5A5A6E]">
                      Cancel
                    </button>
                  </div>
                </ChatMessage>
              </div>
            </div>
          </div>
        </div>
      </RazeReveal>

      {/* Ethos + Footer — full viewport */}
      <div className="flex min-h-screen flex-col justify-between bg-black">
        <AnimatedDivider />

        {/* Ethos */}
        <section className="flex-1 px-6 py-12 md:px-16 md:py-20">
          <EthosReveal />
        </section>

        <AnimatedDivider />

        {/* Footer */}
        <ScrollReveal>
          <footer className="flex flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-16">
            <span className="text-[13px] text-muted">© 2026 No Way Labs LLC</span>
            <div className="flex items-center gap-8">
              <a href="#" className="text-[13px] text-muted hover:text-white">
                GitHub
              </a>
              <a href="#" className="text-[13px] text-muted hover:text-white">
                X / Twitter
              </a>
              <a
                href="mailto:hello@nowaylabs.xyz"
                className="text-[13px] text-muted hover:text-white"
              >
                hello@nowaylabs.xyz
              </a>
              <a href="/legal" className="text-[13px] text-muted hover:text-white">
                Legal
              </a>
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </div>
  );
}
