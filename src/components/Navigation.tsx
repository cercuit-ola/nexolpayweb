import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export const Navigation = () => {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStuck(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-5 md:px-8 bg-background/80 backdrop-blur-xl transition-all duration-300 ${
        stuck ? 'border-b border-mint-line' : 'border-b border-transparent'
      }`}
    >
      <a href="/" className="flex items-center gap-2 font-display text-xl font-black text-foreground tracking-tight">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-black text-base shadow-glow">
          N
        </div>
        NexolPay
      </a>
      
      <div className="flex items-center gap-3">
        <a 
          href="#features" 
          className="hidden sm:block text-sm font-medium text-slate hover:text-primary-dark transition-colors px-3 py-1.5 rounded-full hover:bg-mint-soft"
        >
          Features
        </a>
        <a 
          href="#how" 
          className="hidden sm:block text-sm font-medium text-slate hover:text-primary-dark transition-colors px-3 py-1.5 rounded-full hover:bg-mint-soft"
        >
          How It Works
        </a>
        <a 
          href="#pricing" 
          className="hidden sm:block text-sm font-medium text-slate hover:text-primary-dark transition-colors px-3 py-1.5 rounded-full hover:bg-mint-soft"
        >
          Pricing
        </a>
        <Button 
          size="sm" 
          className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-primary-foreground font-bold text-xs tracking-wide shadow-glow px-5 rounded-full"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Early Access
        </Button>
      </div>
    </nav>
  );
};
