import certificateImg from "../assets/certificate.webp";

export default function Projects() {
  return (
    <div className="box flex flex-col gap-6">
      <span className="text-sm text-muted-foreground">
        still not sure? See my <span className="font-medium text-black dark:text-white">certificate</span>
      </span>
      <div className="grid grid-cols-1 gap-4">
        <a target="_blank" href={certificateImg} rel="noreferrer">
          <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-dashed border-border/50 p-2 transition-all duration-200 hover:border-white/50">
            <div className="pointer-events-none absolute inset-0 z-10 -m-px border border-dashed border-white/15 bg-muted/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <div className="absolute -left-px -top-px h-2 w-2 border-l border-t border-white/90"></div>
              <div className="absolute -right-px -top-px h-2 w-2 border-r border-t border-white/90"></div>
              <div className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-white/90"></div>
              <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-white/90"></div>
            </div>
            <div className="z-10 h-44 min-h-44 overflow-hidden rounded-sm bg-gradient-to-br from-brand/10 via-muted/5 to-transparent p-4">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-dashed border-border/50 bg-white/80 text-brand shadow-sm dark:bg-slate-900/80">
                  <picture>
                    <source media="(prefers-color-scheme: light)" srcSet="/black-logo.png" />
                    <source media="(prefers-color-scheme: dark)" srcSet="/logo.png" />
                    <img src="/black-logo.png" alt="Logo" className="h-8 w-8 object-contain" />
                  </picture>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">Open certificate</span>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <div className="flex items-center justify-between gap-1.5 text-sm">
                <span>Certificate</span>
                <div className="flex flex-row items-center gap-1 text-xs opacity-70">
                  <span className="jetbrains-mono font-medium">Verified</span>
                </div>
              </div>
              <span className="jetbrains-mono line-clamp-2 text-xs tracking-tight text-muted-foreground">
                View the certificate for my latest achievement and professional training.
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
