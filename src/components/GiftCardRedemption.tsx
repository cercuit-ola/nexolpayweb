import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Check, X, ArrowLeft, ExternalLink, CreditCard, Apple } from "lucide-react";

type FlowState = "entry" | "verifying" | "success" | "error";
type CardType = "amazon" | "apple";

interface VerifyStep {
  label: string;
  doneLabel: string;
  value?: string;
}

const VERIFY_STEPS: VerifyStep[] = [
  { label: "Checking card validity...", doneLabel: "Card verified" },
  { label: "Calculating USDC value...", doneLabel: "$47.50 USDC", value: "47.50" },
  { label: "Crediting your Base wallet...", doneLabel: "Done" },
];

const GiftCardRedemption = ({ onBack }: { onBack?: () => void }) => {
  const [state, setState] = useState<FlowState>("entry");
  const [cardType, setCardType] = useState<CardType>("amazon");
  const [code, setCode] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [activeStep, setActiveStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  const isValid = code.trim().length > 0;

  const simulateVerification = useCallback(() => {
    setState("verifying");
    setActiveStep(0);
    setCompletedSteps([]);
    setProgress(0);

    // Simulate a ~10% chance of error for demo
    const willFail = Math.random() < 0.1;

    const stepDuration = 1500;
    const totalDuration = stepDuration * 3;

    // Animate progress bar smoothly
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 100 / (totalDuration / 50);
      });
    }, 50);

    VERIFY_STEPS.forEach((_, i) => {
      setTimeout(() => {
        setActiveStep(i);
      }, i * stepDuration);

      setTimeout(() => {
        if (willFail && i === 0) {
          clearInterval(progressInterval);
          setProgress(33);
          setError("This card code couldn't be verified. Double-check and try again.");
          setState("error");
          return;
        }
        setCompletedSteps((prev) => [...prev, i]);
      }, (i + 1) * stepDuration - 400);
    });

    setTimeout(() => {
      if (!willFail) {
        clearInterval(progressInterval);
        setProgress(100);
        setState("success");
      }
    }, totalDuration + 200);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setError("");
    simulateVerification();
  };

  const reset = () => {
    setState("entry");
    setCode("");
    setPin("");
    setError("");
    setActiveStep(-1);
    setCompletedSteps([]);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-[420px] mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        {onBack && (
          <button onClick={onBack} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
          </button>
        )}
        <h2 className="font-display font-bold text-xl text-foreground">Redeem a Gift Card</h2>
      </div>

      <AnimatePresence mode="wait">
        {/* ──────── ENTRY / ERROR STATE ──────── */}
        {(state === "entry" || state === "error") && (
          <motion.div
            key="entry"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* Error banner */}
            {state === "error" && error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3 mb-6 flex items-start gap-3"
              >
                <X size={18} className="text-destructive mt-0.5 shrink-0" />
                <p className="text-sm text-destructive">{error}</p>
              </motion.div>
            )}

            {/* Card Type Selector */}
            <div className="relative bg-card rounded-xl p-1 flex mb-6">
              <motion.div
                className="absolute inset-y-1 rounded-lg bg-secondary/20 border border-secondary/40"
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                  left: cardType === "amazon" ? "4px" : "50%",
                  width: "calc(50% - 4px)",
                }}
              />
              <button
                type="button"
                onClick={() => setCardType("amazon")}
                className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-colors ${
                  cardType === "amazon" ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                <CreditCard size={18} />
                Amazon
              </button>
              <button
                type="button"
                onClick={() => setCardType("apple")}
                className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-colors ${
                  cardType === "apple" ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                <Apple size={18} />
                Apple
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Code input */}
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Gift Card Code</label>
                <div className="relative">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    className="w-full bg-card border border-border rounded-xl px-4 py-3.5 pr-12 text-foreground text-sm font-mono outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all placeholder:text-muted-foreground/40"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-secondary transition-colors"
                    title="Scan card"
                  >
                    <Camera size={18} />
                  </button>
                </div>
              </div>

              {/* PIN input (Amazon only) */}
              <AnimatePresence>
                {cardType === "amazon" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Gift Card PIN <span className="text-muted-foreground/50">(optional)</span></label>
                    <input
                      type="text"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      placeholder="Enter PIN if available"
                      className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-foreground text-sm font-mono outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all placeholder:text-muted-foreground/40"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA */}
              <button
                type="submit"
                disabled={!isValid}
                className="w-full bg-secondary text-secondary-foreground font-semibold py-3.5 rounded-xl text-sm hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed mt-2"
              >
                {state === "error" ? "Try Again" : "Verify Card"}
              </button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-5">
              ⚡ Get USDC in your Base wallet within <span className="text-primary font-medium">60 seconds</span>
            </p>
          </motion.div>
        )}

        {/* ──────── VERIFYING STATE ──────── */}
        {state === "verifying" && (
          <motion.div
            key="verifying"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress bar */}
            <div className="w-full h-1 bg-card rounded-full overflow-hidden mb-8">
              <motion.div
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <p className="text-xs text-muted-foreground font-mono mb-6 tracking-wider">PROCESSING REDEMPTION</p>

              <div className="space-y-5">
                {VERIFY_STEPS.map((step, i) => {
                  const isActive = activeStep >= i;
                  const isDone = completedSteps.includes(i);

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isActive ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="flex items-start gap-3"
                    >
                      {/* Step indicator */}
                      <div className="mt-0.5 shrink-0">
                        {isDone ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                          >
                            <Check size={12} className="text-primary-foreground" />
                          </motion.div>
                        ) : isActive ? (
                          <div className="w-5 h-5 rounded-full border-2 border-secondary flex items-center justify-center">
                            <motion.div
                              className="w-2 h-2 rounded-full bg-secondary"
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ repeat: Infinity, duration: 1 }}
                            />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-border" />
                        )}
                      </div>

                      {/* Step text */}
                      <div>
                        <p className={`text-sm font-medium ${isDone ? "text-primary" : isActive ? "text-foreground" : "text-muted-foreground"}`}>
                          {isDone ? `✅ ${step.doneLabel}` : step.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Terminal-style blinking cursor */}
              <motion.div
                className="mt-6 flex items-center gap-1 text-muted-foreground/50 font-mono text-xs"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                <span>█</span>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ──────── SUCCESS STATE ──────── */}
        {state === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Green checkmark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.3 }}
                className="w-14 h-14 rounded-full bg-primary flex items-center justify-center"
              >
                <Check size={28} className="text-primary-foreground" strokeWidth={3} />
              </motion.div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display font-extrabold text-2xl text-foreground mb-6"
            >
              Card Redeemed!
            </motion.h3>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card rounded-2xl p-5 border border-border space-y-3 mb-6"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Amount received</span>
                <span className="text-sm font-display font-bold text-primary">47.50 USDC</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Network fee</span>
                <span className="text-sm text-foreground">$0.001 on Base</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Time taken</span>
                <span className="text-sm text-foreground">54 seconds</span>
              </div>
            </motion.div>

            {/* Basescan link */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              href="https://basescan.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-secondary/80 transition-colors mb-8"
            >
              View on Basescan <ExternalLink size={12} />
            </motion.a>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3"
            >
              <button
                onClick={reset}
                className="flex-1 border border-border text-foreground font-semibold py-3.5 rounded-xl text-sm hover:border-secondary/50 transition-colors"
              >
                Redeem Another
              </button>
              <button
                onClick={onBack}
                className="flex-1 bg-secondary text-secondary-foreground font-semibold py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Go to Wallet
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftCardRedemption;
