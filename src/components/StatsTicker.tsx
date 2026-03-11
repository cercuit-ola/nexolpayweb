export const StatsTicker = () => {
  const stats = [
    { value: '$900M', label: 'Nigeria gift card market annually', arrow: '⬆' },
    { value: '60s', label: 'automated redemption pipeline', arrow: '⚡' },
    { value: '$400M', label: 'monthly P2P crypto volume NG', arrow: '⬆' },
    { value: '57%', label: 'salary spent in week 1', arrow: '📊' },
    { value: '6.1%', label: 'APY on 1-year vault lock', arrow: '🔒' },
    { value: '$0.001', label: 'avg transaction fee on Base', arrow: '⬇' },
    { value: '20%', label: 'flat platform redemption fee', arrow: '⬆' },
    { value: '2s', label: 'Base L2 block finality', arrow: '⚡' },
  ];

  return (
    <div className="overflow-hidden py-4 border-t border-b border-mint-line bg-white/50 backdrop-blur-sm">
      <div className="flex gap-0 whitespace-nowrap animate-ticker hover:pause">
        {/* Duplicate for seamless loop */}
        {[...stats, ...stats].map((stat, i) => (
          <div 
            key={i}
            className="inline-flex items-center gap-2 px-8 font-mono text-[11px] border-r border-mint-line"
          >
            <span className="font-bold text-primary-dark">{stat.value}</span>
            <span className="text-muted-foreground">{stat.label}</span>
            <span className="text-primary">{stat.arrow}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
