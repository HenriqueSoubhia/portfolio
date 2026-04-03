export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 sm:px-12 md:px-20 max-w-[1600px] mx-auto">
      <div className="w-full pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
            © {currentYear} TODOS OS DIREITOS RESERVADOS
          </p>
          <p className="text-[10px] font-mono text-white/20 tracking-tighter uppercase italic">
            DESIGNED & DEVELOPED BY HENRIQUE SOUBHIA
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-[10px] font-mono text-white/40 hover:text-white uppercase tracking-widest transition-colors"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
