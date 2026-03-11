import { ReactNode } from 'react';

interface PhoneMockupProps {
  variant?: 'left' | 'center' | 'right';
  children: ReactNode;
}

export const PhoneMockup = ({ variant = 'center', children }: PhoneMockupProps) => {
  const sizeClasses = {
    left: 'w-[190px]',
    center: 'w-[220px]',
    right: 'w-[190px]',
  };
  
  const transformClasses = {
    left: 'translate-x-[30px] rotate-[-4deg] animate-float-delayed',
    center: '-translate-y-5 animate-float',
    right: '-translate-x-[30px] rotate-[4deg] animate-float-delayed',
  };
  
  const zClasses = {
    left: 'z-[2]',
    center: 'z-[3]',
    right: 'z-[2]',
  };
  
  const shadowClass = variant === 'center' 
    ? 'shadow-[0_50px_100px_rgba(6,28,20,0.4),0_0_0_1px_rgba(0,217,139,0.2),0_0_60px_rgba(0,217,139,0.1),inset_0_1px_0_rgba(255,255,255,0.1)]'
    : 'shadow-[0_40px_80px_rgba(6,28,20,0.35),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.08)]';

  return (
    <div className={`${sizeClasses[variant]} ${transformClasses[variant]} ${zClasses[variant]} bg-gradient-to-b from-ink-2 to-ink rounded-[32px] border border-primary/20 overflow-hidden flex-shrink-0 ${shadowClass}`}>
      {/* Notch */}
      <div className="w-20 h-5 bg-[#020D0A] rounded-b-[14px] mx-auto mt-2" />
      
      {/* Screen content */}
      <div className="p-3">
        {children}
      </div>
    </div>
  );
};
