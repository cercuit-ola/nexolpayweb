import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gift, Wallet, ArrowLeft } from "lucide-react";
import GiftCardRedemption from "@/components/GiftCardRedemption";
import nexolLogo from "@/assets/nexolpay-logo.png";

type View = "home" | "redeem";

const Dashboard = () => {
  const [view, setView] = useState<View>("home");

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-foreground text-sm">
          <img src={nexolLogo} alt="NexolPay" className="w-6 h-6 rounded-md" />
          NexolPay
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground bg-card px-3 py-1.5 rounded-full border border-border">
            0.00 USDC
          </span>
        </div>
      </div>

      {view === "home" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[420px] mx-auto px-4 py-8"
        >
          <h1 className="font-display font-extrabold text-2xl text-foreground mb-1">Welcome back 👋</h1>
          <p className="text-sm text-muted-foreground mb-8">What would you like to do today?</p>

          <div className="grid gap-3">
            <button
              onClick={() => setView("redeem")}
              className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 text-left hover:border-secondary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                <Gift size={22} className="text-secondary" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">Redeem Gift Card</p>
                <p className="text-xs text-muted-foreground mt-0.5">Amazon & Apple → USDC in 60s</p>
              </div>
            </button>

            <button
              disabled
              className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 text-left opacity-50 cursor-not-allowed"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Wallet size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">Wallet</p>
                <p className="text-xs text-muted-foreground mt-0.5">Coming soon</p>
              </div>
            </button>
          </div>
        </motion.div>
      ) : (
        <GiftCardRedemption onBack={() => setView("home")} />
      )}
    </div>
  );
};

export default Dashboard;
