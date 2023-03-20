export const SiteFooter = () => {
  return (
    <footer className="container">
      <div className="flex  flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-slate-600 md:text-left">
            Built by <a className="font-medium underline underline-offset-4">beaverd2</a>. The source code is available
            on <a className="font-medium underline underline-offset-4">GitHub</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}
