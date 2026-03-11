export const AmbientBlobs = () => {
  return (
    <>
      <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 blur-[80px] opacity-35 bg-gradient-radial from-primary to-transparent top-[-150px] right-[-100px] animate-drift-a" />
      <div className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 blur-[80px] opacity-35 bg-gradient-radial from-primary-dark to-transparent bottom-[10%] left-[-100px] animate-drift-b" />
      <div className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0 blur-[80px] opacity-15 bg-gradient-radial from-primary to-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        style={{ animation: 'drift-a 15s ease-in-out infinite' }} 
      />
    </>
  );
};
