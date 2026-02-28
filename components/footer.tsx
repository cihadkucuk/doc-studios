import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-700 bg-slate-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-2xl text-white mb-2">DOC Studios s.r.o.</h3>
            <p className="font-sans text-slate-400">Sound that shapes worlds - Prague, Czech Republic</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-end">
            <Link href="/#services" className="font-sans text-slate-400 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/licensing" className="font-sans text-slate-400 hover:text-primary transition-colors">
              Licensing
            </Link>
            <Link href="/#contact" className="font-sans text-slate-400 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="font-sans text-slate-500 text-sm">(c) 2026 DOC Studios s.r.o. Music Production. All rights reserved.</p>
          <p className="font-sans text-slate-500 text-sm mt-2">VAT ID: CZ24340146 | IČO: 24340146</p>
        </div>
      </div>
    </footer>
  )
}
