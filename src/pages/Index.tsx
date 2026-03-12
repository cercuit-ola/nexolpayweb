import { Navigation } from '@/components/Navigation';
import { AmbientBlobs } from '@/components/AmbientBlobs';
import { PhoneMockup } from '@/components/PhoneMockup';
import { StatsTicker } from '@/components/StatsTicker';
import { useState } from 'react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [calcAmount, setCalcAmount] = useState(100);

  const weeklyPayout = calcAmount / 4;

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AmbientBlobs />
      <Navigation />

      {/* ── HERO ── */}
      <section className="min-h-[100svh] flex flex-col items-center justify-center px-5 pt-[100px] pb-[60px] text-center relative z-10">
        {/* Grid lines bg */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-0 w-full h-px bg-primary/[0.06]" />
          <div className="absolute top-[40%] left-0 w-full h-px bg-primary/[0.06]" />
          <div className="absolute top-[60%] left-0 w-full h-px bg-primary/[0.06]" />
          <div className="absolute top-[80%] left-0 w-full h-px bg-primary/[0.06]" />
          <div className="absolute left-[25%] top-0 h-full w-px bg-primary/[0.06]" />
          <div className="absolute left-[50%] top-0 h-full w-px bg-primary/[0.06]" />
          <div className="absolute left-[75%] top-0 h-full w-px bg-primary/[0.06]" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-soft border border-mint-line font-mono text-[10px] font-semibold text-primary-dark tracking-[2px] uppercase mb-6 animate-fade-in">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          Your Money, Your Rules · Built for Africa
        </div>

        <h1 className="font-display text-[clamp(40px,10vw,72px)] md:text-[clamp(52px,7vw,80px)] font-extrabold leading-[1.04] tracking-[-2.5px] md:tracking-[-3px] text-foreground mb-5 animate-fade-in">
          Turn gift cards<br />
          into real<br />
          <span className="bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">money.</span>
        </h1>

        <p className="text-[clamp(15px,3.5vw,18px)] font-light text-slate leading-[1.75] max-w-[520px] mx-auto mb-9 animate-fade-in">
          Sell gift cards for <strong className="text-foreground font-medium">fair rates in 60 seconds</strong>. Cash out crypto straight to your bank account.
          Set up a savings plan that actually stops you from overspending.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-[30px] py-[15px] rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-display text-[15px] font-bold tracking-wide shadow-[0_8px_32px_var(--mint-glow),_0_2px_0_rgba(255,255,255,0.3)_inset] hover:-translate-y-[3px] hover:shadow-[0_14px_48px_var(--mint-glow)] transition-all duration-300"
          >
            Get Early Access →
          </a>
          <a
            href="#features"
            className="inline-flex items-center px-7 py-[15px] rounded-full bg-white/70 border-[1.5px] border-mint-line text-primary-dark font-display text-[15px] font-semibold backdrop-blur-sm hover:bg-white hover:border-primary transition-all duration-300"
          >
            How It Works
          </a>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center text-xs text-muted-foreground mb-12 animate-fade-in">
          <span className="flex items-center gap-1.5">⚡ Instant gift card payouts</span>
          <span className="w-1 h-1 rounded-full bg-dim" />
          <span className="flex items-center gap-1.5">🔒 Auto-save your salary</span>
          <span className="w-1 h-1 rounded-full bg-dim" />
          <span className="flex items-center gap-1.5">🌍 Made for Nigerians</span>
        </div>

        {/* Phone stack */}
        <div className="relative h-[360px] md:h-[420px] flex justify-center items-end mt-4 animate-fade-in">
          <PhoneMockup variant="left">
            <div className="text-[8px] font-mono text-white/35 flex justify-between mb-2.5"><span>9:41</span><span>▲▲▲</span></div>
            <div className="text-[11px] font-display font-bold text-white text-center mb-2">Buy Gift Cards</div>
            <div className="grid grid-cols-2 gap-[5px]">
              {[
                { brand: 'Amazon', rate: '₦1,550 / $1', bg: 'bg-gradient-to-br from-[#FF9900] to-[#F90]' },
                { brand: 'Apple', rate: '₦1,520 / $1', bg: 'bg-gradient-to-br from-[#1d1d1f] to-[#3a3a3a]' },
                { brand: 'Google Play', rate: '₦1,480 / $1', bg: 'bg-gradient-to-br from-[#01875f] to-[#34A853]' },
                { brand: 'Netflix', rate: '₦1,500 / $1', bg: 'bg-gradient-to-br from-[#E50914] to-[#B20710]' },
              ].map((c) => (
                <div key={c.brand} className={`${c.bg} rounded-lg overflow-hidden`}>
                  <div className="p-2 flex flex-col justify-end h-[52px]">
                    <div className="text-[7px] font-display font-bold text-white/90">{c.brand}</div>
                    <div className="text-[6px] font-mono text-white/60 mt-0.5">{c.rate}</div>
                  </div>
                </div>
              ))}
            </div>
          </PhoneMockup>

          <PhoneMockup variant="center">
            <div className="text-[8px] font-mono text-white/35 flex justify-between mb-2.5"><span>9:41</span><span>⚡ ▲▲▲</span></div>
            <div className="text-[7px] font-mono tracking-[2px] uppercase text-primary/60">Total Balance</div>
            <div className="text-[22px] font-display font-extrabold text-primary leading-none tracking-[-1px] my-[3px]">$1,250.00</div>
            <div className="text-[7px] text-white/35 mb-2.5">≈ ₦1,993,750</div>
            <div className="flex gap-1.5 mb-2.5">
              <div className="flex-1 p-1.5 bg-primary/[0.08] border border-primary/[0.12] rounded-lg">
                <div className="text-[6px] text-white/35 font-mono tracking-[1px]">USDC Wallet</div>
                <div className="text-[9px] font-mono font-bold text-white/80 mt-0.5">$820.00</div>
              </div>
              <div className="flex-1 p-1.5 bg-primary/[0.08] border border-primary/[0.12] rounded-lg">
                <div className="text-[6px] text-white/35 font-mono tracking-[1px]">NGN Wallet</div>
                <div className="text-[9px] font-mono font-bold text-white/80 mt-0.5">₦685,000</div>
              </div>
            </div>
            <div className="flex gap-1.5 mb-2.5">
              {[{ ico: '⇄', lbl: 'Swap' }, { ico: '＋', lbl: 'Deposit' }, { ico: '🎁', lbl: 'Giftcard' }, { ico: '📋', lbl: 'Bills' }].map((a) => (
                <div key={a.lbl} className="flex-1 flex flex-col items-center gap-[3px]">
                  <div className="w-[26px] h-[26px] rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[11px]">{a.ico}</div>
                  <div className="text-[6px] text-white/40">{a.lbl}</div>
                </div>
              ))}
            </div>
            <div>
              {[
                { name: 'Amazon Giftcard', amt: '+$80.00', pos: true },
                { name: 'USDC → NGN', amt: '-$200.00', pos: false },
                { name: 'Apple Giftcard', amt: '+$40.00', pos: true },
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center py-[5px] border-b border-white/[0.04] last:border-b-0">
                  <span className="text-[8px] text-white/60">{tx.name}</span>
                  <span className={`text-[8px] font-mono font-semibold ${tx.pos ? 'text-primary' : 'text-red-400/80'}`}>{tx.amt}</span>
                </div>
              ))}
            </div>
          </PhoneMockup>

          <PhoneMockup variant="right">
            <div className="text-[8px] font-mono text-white/35 flex justify-between mb-2.5"><span>9:41</span><span>▲▲▲</span></div>
            <div className="text-[10px] font-display font-bold text-white mb-2">NexolPay Vault</div>
            <div className="flex flex-col gap-[5px]">
              <div className="flex justify-between items-center p-[7px_8px] rounded-lg bg-primary/[0.12] border border-primary/25">
                <div>
                  <div className="text-[7px] font-mono tracking-[1px] text-primary font-medium">Week 1 · Live</div>
                  <div className="text-[9px] text-white/45">Available now</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-mono font-bold text-primary">$250</span>
                  <span className="text-[8px] px-[7px] py-[3px] rounded-full bg-primary/15 text-primary">✓</span>
                </div>
              </div>
              {[
                { week: 2, label: 'Unlocks Monday' },
                { week: 3, label: 'Unlocks in 2 weeks' },
                { week: 4, label: 'Unlocks in 3 weeks' },
              ].map((w) => (
                <div key={w.week} className="flex justify-between items-center p-[7px_8px] rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div>
                    <div className="text-[7px] font-mono tracking-[1px] text-white/25">Week {w.week} · Locked</div>
                    <div className="text-[9px] text-white/20">{w.label}</div>
                  </div>
                  <span className="text-[13px] font-mono font-bold text-white/[0.18]">🔒 $250</span>
                </div>
              ))}
            </div>
            <div className="mt-1.5 p-1.5 rounded-lg bg-gradient-to-r from-primary/[0.08] to-primary-dark/[0.04] border border-primary/15 text-[7px] text-primary flex items-center gap-1.5">
              📈 <strong className="font-mono">1-year lock earns 6.1% APY</strong> on Base
            </div>
          </PhoneMockup>

          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[280px] h-[60px] bg-gradient-radial from-primary/30 to-transparent rounded-[50%] blur-[20px] pointer-events-none z-[1]" />
        </div>
      </section>

      {/* ── STATS TICKER ── */}
      <StatsTicker />

      {/* ── PROBLEM SECTION ── */}
      <section className="py-20 md:py-24 px-5 relative z-10">
        <div className="max-w-[480px] md:max-w-[600px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-soft border border-mint-line font-mono text-[9px] font-semibold text-primary-dark tracking-[2.5px] uppercase mb-4">
            Why This Matters
          </div>
          <h2 className="font-display text-[clamp(30px,7vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.07] text-foreground mb-3.5">
            Managing money in Nigeria shouldn't be this hard.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-12">
            {[
              { num: '$900M', text: "worth of gift cards are traded in Nigeria every year — most through informal WhatsApp dealers who take 35–50% of your value.", src: 'Industry estimates, 2024', span: true },
              { num: '57%', text: 'of salary earners run out of money in the first week of the month — no buffer for bills, emergencies, or savings.', src: 'EFInA Financial Report, 2023' },
              { num: '$400M', text: "in crypto changes hands monthly in Nigeria, but there\u2019s still no easy, reliable way to convert it to Naira.", src: 'Chainalysis, 2024' },
            ].map((s, i) => (
              <div
                key={i}
                className={`${s.span ? 'col-span-2 md:col-span-1' : ''} bg-white/70 backdrop-blur-xl border border-card-border rounded-[20px] p-6 shadow-[var(--shadow)] hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-primary-dark rounded-t-[20px]" />
                <div className="text-[clamp(36px,8vw,48px)] font-mono font-bold text-primary-dark tracking-[-2px] leading-none mb-2">{s.num}</div>
                <div className="text-[13px] text-slate leading-relaxed">{s.text}</div>
                <div className="text-[10px] text-muted-foreground italic mt-1.5">{s.src}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-20 md:py-24 px-5 relative z-10">
        <div className="max-w-[640px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-soft border border-mint-line font-mono text-[9px] font-semibold text-primary-dark tracking-[2.5px] uppercase mb-4">
              What NexolPay Does
            </div>
            <h2 className="font-display text-[clamp(30px,7vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.07] text-foreground mb-3.5">
              Three tools to take<br />control of your money.
            </h2>
            <p className="text-base font-light text-slate leading-[1.75]">
              Sell gift cards instantly. Send crypto to your bank. Save smarter with auto-locked vaults.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Feature 1: Gift Card */}
            <div className="bg-white/75 backdrop-blur-2xl border border-card-border rounded-3xl overflow-hidden shadow-[var(--shadow)] hover:-translate-y-1 transition-transform duration-300">
              <div className="p-6 flex items-start gap-4">
                <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-gradient-to-br from-mint-soft to-primary/[0.04] border border-mint-line shadow-[0_4px_16px_rgba(0,217,139,0.12)]">🎁</div>
                <div>
                  <div className="font-mono text-[9px] text-primary tracking-[2px] uppercase mb-1">01 · Sell Gift Cards</div>
                  <h3 className="font-display text-lg font-extrabold text-foreground tracking-[-0.5px] leading-tight mb-2">Got a gift card?<br />Get paid in 60 seconds.</h3>
                  <p className="text-sm text-slate leading-[1.68] font-light">No more hunting for buyers on WhatsApp or getting ripped off by middlemen. Upload your gift card, we verify it instantly, and you get <strong className="text-foreground font-medium">USDC (digital dollars) in your wallet in under a minute</strong>. One flat 20% fee — transparent and fair.</p>
                </div>
              </div>
              <div className="px-6 pb-5 flex gap-1.5 flex-wrap">
                {['AMAZON', 'APPLE', 'GOOGLE PLAY', 'NETFLIX', 'STEAM', 'AUTO 60s'].map((c) => (
                  <span key={c} className="px-2.5 py-1 rounded-[7px] font-mono text-[8px] font-semibold tracking-[0.5px] bg-mint-soft text-primary-dark border border-mint-line">{c}</span>
                ))}
              </div>
              {/* Inline mockup */}
              <div className="mx-5 mb-5 bg-gradient-to-br from-ink-2 to-ink border border-primary/20 rounded-2xl p-4">
                {[
                  { k: 'Amazon Card', v: '$100.00' },
                  { k: 'Platform Fee (20%)', v: '− $20.00' },
                  { k: 'You Receive', v: '$80.00 USDC', hi: true },
                  { k: 'NGN Equivalent', v: '≈ ₦127,840', hi: true },
                ].map((r) => (
                  <div key={r.k} className="flex justify-between items-center py-[7px] border-b border-white/5 last:border-b-0 text-xs">
                    <span className="text-white/45">{r.k}</span>
                    <span className={`font-mono font-semibold ${r.hi ? 'text-primary' : 'text-white/90'}`}>{r.v}</span>
                  </div>
                ))}
                <div className="inline-flex items-center gap-[5px] mt-2.5 px-3 py-1.5 rounded-full bg-primary text-foreground font-mono text-[10px] font-bold">
                  ⚡ Credited in 47 seconds
                </div>
              </div>
            </div>

            {/* Feature 2: Off-Ramp */}
            <div className="bg-white/75 backdrop-blur-2xl border border-card-border rounded-3xl overflow-hidden shadow-[var(--shadow)] hover:-translate-y-1 transition-transform duration-300">
              <div className="p-6 flex items-start gap-4">
                <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-gradient-to-br from-mint-soft to-primary/[0.04] border border-mint-line shadow-[0_4px_16px_rgba(0,217,139,0.12)]">💸</div>
                <div>
                  <div className="font-mono text-[9px] text-primary tracking-[2px] uppercase mb-1">02 · Cash Out Crypto</div>
                  <h3 className="font-display text-lg font-extrabold text-foreground tracking-[-0.5px] leading-tight mb-2">Send crypto to<br />your bank account.</h3>
                  <p className="text-sm text-slate leading-[1.68] font-light">Have USDC or other crypto? Convert it to Naira and <strong className="text-foreground font-medium">receive it in any Nigerian bank account in minutes</strong> — GTBank, Access, Zenith, you name it. Live exchange rates, full receipt, no shady P2P deals.</p>
                </div>
              </div>
              <div className="px-6 pb-5 flex gap-1.5 flex-wrap">
                {['USDC → NGN', 'ANY BANK', 'LIVE RATES', 'BASE L2'].map((c) => (
                  <span key={c} className="px-2.5 py-1 rounded-[7px] font-mono text-[8px] font-semibold tracking-[0.5px] bg-mint-soft text-primary-dark border border-mint-line">{c}</span>
                ))}
              </div>
              {/* Off-ramp flow mockup */}
              <div className="mx-5 mb-5 bg-gradient-to-br from-ink-2 to-ink border border-primary/20 rounded-2xl p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 p-2 rounded-[10px] bg-primary/[0.08] border border-primary/15">
                    <div className="w-8 h-8 rounded-full bg-[rgba(38,161,123,0.15)] flex items-center justify-center text-sm flex-shrink-0">💎</div>
                    <div className="flex-1">
                      <div className="text-[11px] font-medium text-white/80">You Send</div>
                      <div className="text-[9px] text-white/35">NexolPay wallet</div>
                    </div>
                    <span className="font-mono text-[13px] font-bold text-primary ml-auto">100 USDC</span>
                  </div>
                  <div className="text-center text-sm text-primary py-0.5">↓</div>
                  <div className="flex items-center gap-2.5 p-2 rounded-[10px] bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-8 h-8 rounded-full bg-primary/[0.12] flex items-center justify-center text-sm flex-shrink-0">🏦</div>
                    <div className="flex-1">
                      <div className="text-[11px] font-medium text-white/80">GTBank · ****4421</div>
                      <div className="text-[9px] text-white/35">ETA ~2 minutes</div>
                    </div>
                    <span className="font-mono text-[13px] font-bold text-primary ml-auto">₦159,800</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Vault */}
            <div className="bg-white/75 backdrop-blur-2xl border border-card-border rounded-3xl overflow-hidden shadow-[var(--shadow)] hover:-translate-y-1 transition-transform duration-300">
              <div className="p-6 flex items-start gap-4">
                <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-gradient-to-br from-mint-soft to-primary/[0.04] border border-mint-line shadow-[0_4px_16px_rgba(0,217,139,0.12)]">🔒</div>
                <div>
                  <div className="font-mono text-[9px] text-primary tracking-[2px] uppercase mb-1">03 · Smart Savings Vault</div>
                  <h3 className="font-display text-lg font-extrabold text-foreground tracking-[-0.5px] leading-tight mb-2">Stop spending<br />your salary in<br />one week.</h3>
                  <p className="text-sm text-slate leading-[1.68] font-light">Deposit your pay and choose how it gets released — weekly portions, monthly, or lock it for 6–12 months. Once locked, <strong className="text-foreground font-medium">you can't touch it early — that's the point</strong>. Long-term locks also earn you interest (up to 6.1% APY), so your savings actually grow while you wait.</p>
                </div>
              </div>
              <div className="px-6 pb-5 flex gap-1.5 flex-wrap">
                {['WEEKLY', 'MONTHLY', '6M · 4.2% APY', '1YR · 6.1% APY', 'HARD LOCK'].map((c) => (
                  <span key={c} className="px-2.5 py-1 rounded-[7px] font-mono text-[8px] font-semibold tracking-[0.5px] bg-mint-soft text-primary-dark border border-mint-line">{c}</span>
                ))}
              </div>
              {/* Vault weeks mockup */}
              <div className="mx-5 mb-5 bg-gradient-to-br from-ink-2 to-ink border border-primary/20 rounded-2xl p-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center p-[9px_12px] rounded-[10px] bg-primary/10 border border-primary/[0.22]">
                    <div>
                      <div className="text-[8px] font-mono tracking-[1px] text-primary">WEEK 1 · JAN 6</div>
                      <div className="text-[9px] text-white/45">Available now</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[13px] font-bold text-primary">$250</span>
                      <span className="text-[8px] px-[7px] py-[3px] rounded-full bg-primary/15 text-primary">LIVE</span>
                    </div>
                  </div>
                  {[
                    { week: 'WEEK 2 · JAN 13', sub: 'Unlocks Monday' },
                    { week: 'WEEK 3 · JAN 20', sub: 'Unlocks in 2 weeks' },
                    { week: 'WEEK 4 · JAN 27', sub: 'Unlocks in 3 weeks' },
                  ].map((w) => (
                    <div key={w.week} className="flex justify-between items-center p-[9px_12px] rounded-[10px] bg-white/[0.03] border border-white/5">
                      <div>
                        <div className="text-[8px] font-mono tracking-[1px] text-white/25">{w.week}</div>
                        <div className="text-[9px] text-white/20">{w.sub}</div>
                      </div>
                      <span className="font-mono text-[13px] font-bold text-white/[0.18]">$250</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-1.5 p-[8px_12px] rounded-[10px] bg-gradient-to-r from-primary/[0.07] to-primary-dark/[0.03] border border-primary/[0.13] text-[10px] text-primary">
                  📈 <strong className="font-mono">6-month: 4.2% APY</strong> · <strong className="font-mono">1-year: 6.1% APY</strong> on Base
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-20 md:py-24 px-5 bg-white/40 backdrop-blur-sm relative z-10">
        <div className="max-w-[480px] md:max-w-[600px] mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-soft border border-mint-line font-mono text-[9px] font-semibold text-primary-dark tracking-[2.5px] uppercase mb-4">
              Getting Started
            </div>
            <h2 className="font-display text-[clamp(30px,7vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.07] text-foreground mb-3.5">
              Up and running in 5 minutes.
            </h2>
            <p className="text-base font-light text-slate leading-[1.75]">No crypto knowledge needed. No seed phrases. Just sign up and go.</p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-7 bottom-7 w-0.5 bg-gradient-to-b from-primary via-primary-dark to-primary rounded-full" />
            <div className="flex flex-col gap-0">
              {[
                { num: '01', title: 'Sign up in seconds', body: 'Use your phone number to create an account. Verify your identity with BVN or NIN. We set up a secure wallet for you automatically — no complicated setup.' },
                { num: '02', title: 'Add money or sell a gift card', body: 'Deposit USDC directly, or upload a gift card (Amazon, Apple, etc.). We verify it and credit your wallet in under 60 seconds.' },
                { num: '03', title: 'Cash out to your bank', body: "Convert your balance to Naira and send it to any Nigerian bank account. You\u2019ll see the exact exchange rate upfront \u2014 no surprises." },
                { num: '04', title: 'Set up auto-savings', body: "Choose how your money gets released \u2014 weekly, monthly, or lock it away for 6\u201312 months to earn interest. Build the savings habit you\u2019ve always wanted." },
              ].map((step, i) => (
                <div key={step.num} className="flex items-start gap-5 relative pb-8 last:pb-0">
                  <div className="w-[42px] h-[42px] rounded-full bg-background border-2 border-primary flex items-center justify-center font-mono text-sm font-bold text-primary-dark shadow-[0_0_0_6px_rgba(0,217,139,0.08),0_4px_16px_rgba(0,217,139,0.2)] relative z-10 flex-shrink-0">
                    {step.num}
                  </div>
                  <div className="pt-2.5">
                    <h3 className="font-display text-[17px] font-bold text-foreground mb-1.5">{step.title}</h3>
                    <p className="text-sm text-slate leading-[1.65] font-light">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="py-20 md:py-24 px-5 relative z-10">
        <div className="max-w-[480px] md:max-w-[600px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-soft border border-mint-line font-mono text-[9px] font-semibold text-primary-dark tracking-[2.5px] uppercase mb-4">
            Calculator
          </div>
          <h2 className="font-display text-[clamp(30px,7vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.07] text-foreground mb-3.5">
            See how your salary splits up.
          </h2>
          <p className="text-base font-light text-slate leading-[1.75]">Enter what you earn monthly. See exactly how much you get each week — and how much stays locked and growing.</p>

          <div className="bg-white/75 backdrop-blur-2xl border border-card-border rounded-3xl p-7 shadow-[var(--shadow)] mt-9">
            <div className="font-mono text-[10px] tracking-[2px] uppercase text-muted-foreground mb-3">Monthly Salary (USDC)</div>
            <div className="flex border-[1.5px] border-mint-line rounded-[14px] overflow-hidden mb-6 bg-white/80 focus-within:border-primary transition-colors">
              <div className="px-4 py-3 font-display text-2xl font-extrabold text-primary-dark border-r-[1.5px] border-mint-line">$</div>
              <input
                type="number"
                value={calcAmount}
                onChange={(e) => setCalcAmount(Number(e.target.value) || 0)}
                className="flex-1 px-3.5 py-3 border-none outline-none bg-transparent font-mono text-2xl font-bold text-foreground"
              />
            </div>

            <div className="flex flex-col gap-[9px]">
              {[
                { ico: '✅', title: 'Week 1 — Available now', sub: 'Instant access', amt: `$${weeklyPayout.toFixed(0)}`, on: true },
                { ico: '🔒', title: 'Week 2 — Locked', sub: 'Unlocks in 7 days', amt: `$${weeklyPayout.toFixed(0)}`, on: false },
                { ico: '🔒', title: 'Week 3 — Locked', sub: 'Unlocks in 14 days', amt: `$${weeklyPayout.toFixed(0)}`, on: false },
                { ico: '🔒', title: 'Week 4 — Locked', sub: 'Unlocks in 21 days', amt: `$${weeklyPayout.toFixed(0)}`, on: false },
              ].map((w) => (
                <div key={w.title} className={`flex items-center justify-between p-3 px-4 rounded-[14px] transition-all duration-300 ${w.on ? 'bg-primary/10 border-[1.5px] border-primary/25' : 'bg-white/50 border-[1.5px] border-mint-line'}`}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{w.ico}</span>
                    <div>
                      <div className={`text-[13px] font-medium ${w.on ? 'text-foreground' : 'text-muted-foreground'}`}>{w.title}</div>
                      <div className="text-[10px] text-dim mt-0.5">{w.sub}</div>
                    </div>
                  </div>
                  <span className={`font-mono text-[17px] font-bold ${w.on ? 'text-primary-dark' : 'text-dim'}`}>{w.amt}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-[11px] text-muted-foreground mt-4 leading-relaxed">
              Lock for 6 months and earn <strong className="font-mono">4.2% interest</strong> · Lock for a year and earn <strong className="font-mono">6.1% interest</strong> — your money grows while you wait
            </p>
          </div>
        </div>
      </section>

      {/* ── BASE SECTION (dark) ── */}
      <section className="bg-gradient-to-br from-ink to-[#0A2A1A] py-20 md:py-24 px-5 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,217,139,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[480px] md:max-w-[600px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-[18px] py-[7px] rounded-full border border-primary/20 bg-primary/[0.06] font-mono text-[9px] text-primary tracking-[2px] uppercase mb-7">
            Built on Base L2
          </div>
          <h2 className="font-display text-[clamp(30px,8vw,44px)] font-extrabold tracking-[-1.5px] text-white leading-[1.07] mb-4">
            Bank-grade security.<br />Fraction-of-a-penny fees.
          </h2>
          <p className="text-[15px] text-white/45 leading-[1.72] font-light mb-12">
            Your money moves on Base — a secure blockchain network backed by Coinbase. Transactions cost less than ₦1, settle in seconds, and are protected by Ethereum's security.
          </p>
          <div className="flex gap-0.5">
            {[
              { val: '$0.001', lbl: 'Avg tx fee' },
              { val: '2s', lbl: 'Block finality' },
              { val: '∞', lbl: 'EVM compatible' },
            ].map((m, i) => (
              <div key={i} className={`flex-1 py-6 px-4 text-center bg-white/[0.03] border border-primary/[0.08] ${i === 0 ? 'rounded-l-2xl' : ''} ${i === 2 ? 'rounded-r-2xl' : ''}`}>
                <div className="font-mono text-[28px] font-bold text-primary tracking-[-1px] leading-none mb-1.5">{m.val}</div>
                <div className="text-[10px] text-white/30 leading-snug">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 md:py-24 px-5 relative z-10">
        <div className="max-w-[480px] md:max-w-[720px] mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-soft border border-mint-line font-mono text-[9px] font-semibold text-primary-dark tracking-[2.5px] uppercase mb-4">
              Pricing
            </div>
            <h2 className="font-display text-[clamp(30px,7vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.07] text-foreground mb-3">
              Simple pricing. No surprises.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            {/* Standard */}
            <div className="flex-1 bg-white/75 backdrop-blur-2xl border-primary border rounded-3xl p-7 relative shadow-[0_0_0_1px_hsl(var(--primary)),var(--shadow-lg),0_0_40px_rgba(0,217,139,0.12)] hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-foreground font-display text-[10px] font-bold px-[18px] py-[5px] rounded-full whitespace-nowrap tracking-[0.5px]">
                MOST POPULAR
              </div>
              <div className="font-mono text-[10px] font-semibold text-muted-foreground tracking-[2px] uppercase mb-2">Standard</div>
              <div className="font-mono text-[52px] font-bold text-foreground tracking-[-3px] leading-none mb-1.5">
                20<sup className="text-[22px] tracking-normal">%</sup>
                <span className="text-[15px] text-muted-foreground font-normal tracking-normal ml-1">per card</span>
              </div>
              <p className="text-[13px] text-slate mb-[22px] leading-relaxed">We only charge when you sell gift cards. Everything else is free.</p>
              <div className="flex flex-col gap-2.5 mb-7">
                {['Sell gift cards and get paid in 60 seconds', 'Cash out crypto to your bank — free', 'Auto-savings vault with weekly payouts — free', 'Earn up to 6.1% interest on locked savings'].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate">
                    <div className="w-5 h-5 rounded-full bg-mint-soft border border-mint-line flex items-center justify-center text-[9px] text-primary-dark font-bold flex-shrink-0">✓</div>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#waitlist" className="block w-full py-3.5 rounded-full text-center bg-gradient-to-r from-primary to-primary-dark text-foreground font-display text-sm font-bold tracking-wide shadow-[0_6px_24px_var(--mint-glow)] hover:-translate-y-px hover:shadow-[0_10px_36px_var(--mint-glow)] transition-all">
                Join Waitlist
              </a>
            </div>

            {/* Enterprise */}
            <div className="flex-1 bg-white/75 backdrop-blur-2xl border border-card-border rounded-3xl p-7 hover:-translate-y-1 transition-transform duration-300">
              <div className="font-mono text-[10px] font-semibold text-muted-foreground tracking-[2px] uppercase mb-2">Enterprise</div>
              <div className="font-mono text-[52px] font-bold text-foreground tracking-[-3px] leading-none mb-1.5">Custom</div>
              <p className="text-[13px] text-slate mb-[22px] leading-relaxed">For businesses processing large volumes or building on our platform.</p>
              <div className="flex flex-col gap-2.5 mb-7">
                {['Everything in Standard', 'Connect via API to your own apps', 'Lower fees based on volume', 'A dedicated person to help you'].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate">
                    <div className="w-5 h-5 rounded-full bg-mint-soft border border-mint-line flex items-center justify-center text-[9px] text-primary-dark font-bold flex-shrink-0">✓</div>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#" className="block w-full py-3.5 rounded-full text-center border-[1.5px] border-mint-line text-primary-dark font-display text-sm font-bold hover:bg-mint-soft transition-all">
                Contact Sales
              </a>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-4 leading-relaxed">
            Bank transfers and savings vault are completely free. The 20% fee only applies when selling gift cards.
          </p>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section id="waitlist" className="py-20 px-5 pb-[100px] relative z-10 text-center">
        <div className="max-w-[460px] mx-auto">
          <h2 className="font-display text-[clamp(34px,9vw,56px)] font-extrabold tracking-[-2px] leading-[1.03] text-foreground mb-4">
            Be first to <em className="not-italic text-primary-dark">take control</em>
          </h2>
          <p className="text-base text-slate font-light leading-[1.65] mb-9">
            We're launching soon. Sign up now to get early access and exclusive perks — no spam, just real updates.
          </p>

          <div className="bg-white/75 backdrop-blur-2xl border-[1.5px] border-mint-line rounded-[20px] p-5 mb-5 shadow-[var(--shadow)] focus-within:border-primary focus-within:shadow-[0_0_0_4px_rgba(0,217,139,0.12),var(--shadow)] transition-all">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-[1.5px] border-mint-line rounded-xl bg-white/80 text-foreground text-[15px] outline-none mb-2.5 focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-[1.5px] border-mint-line rounded-xl bg-white/80 text-foreground text-[15px] outline-none mb-2.5 focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <button className="w-full py-[15px] rounded-xl bg-gradient-to-r from-primary to-primary-dark text-foreground font-display text-[15px] font-bold tracking-wide border-none cursor-pointer shadow-[0_6px_24px_var(--mint-glow)] hover:-translate-y-0.5 hover:shadow-[0_10px_36px_var(--mint-glow)] transition-all">
              Join the Waitlist
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {['✓ Early access', '✓ Exclusive launch bonuses', '✓ First to test new features'].map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/60 border border-mint-line text-[11px] text-muted-foreground backdrop-blur-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-ink-2 py-12 px-5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 font-display text-xl font-extrabold text-white mb-2">
            <div className="w-[30px] h-[30px] rounded-[9px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-extrabold text-sm">N</div>
            NexolPay
          </div>
          <p className="text-[13px] text-white/30 mb-8 leading-relaxed max-w-md">
            The simplest way for Nigerians to sell gift cards, cash out crypto, and build real savings — all in one app.
          </p>

          <div className="flex gap-8 flex-wrap mb-8">
            <div>
              <div className="text-[10px] font-bold text-white/25 tracking-[2px] uppercase mb-3 font-display">Product</div>
              <div className="space-y-2">
                <a href="#features" className="block text-[13px] text-white/40 hover:text-primary transition-colors">Features</a>
                <a href="#how" className="block text-[13px] text-white/40 hover:text-primary transition-colors">How It Works</a>
                <a href="#pricing" className="block text-[13px] text-white/40 hover:text-primary transition-colors">Pricing</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-white/25 tracking-[2px] uppercase mb-3 font-display">Company</div>
              <div className="space-y-2">
                <a href="#" className="block text-[13px] text-white/40 hover:text-primary transition-colors">About</a>
                <a href="#" className="block text-[13px] text-white/40 hover:text-primary transition-colors">Blog</a>
                <a href="#" className="block text-[13px] text-white/40 hover:text-primary transition-colors">Careers</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-white/25 tracking-[2px] uppercase mb-3 font-display">Legal</div>
              <div className="space-y-2">
                <a href="#" className="block text-[13px] text-white/40 hover:text-primary transition-colors">Terms</a>
                <a href="#" className="block text-[13px] text-white/40 hover:text-primary transition-colors">Privacy</a>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/[0.06] mb-5" />
          <div className="flex justify-between flex-wrap gap-2.5">
            <div className="text-xs text-white/20">© 2026 NexolPay. All rights reserved.</div>
            <div className="font-mono text-[10px] text-white/15">Built on <em className="not-italic text-primary">Base L2</em></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
