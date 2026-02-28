"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function FreeSoundsPack() {
  const [formCompleted, setFormCompleted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <nav className="p-6">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-red-500 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="font-sans text-sm uppercase tracking-wide">Back to Home</span>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif font-light text-4xl md:text-5xl text-white mb-6 chaos-glitch">
            FREE <span className="font-bold text-red-500 minimal-glow">SOUNDS PACK</span>
          </h1>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
          <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Get exclusive access to our premium sound collection. Fill out the form below to receive your free download.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-sm p-8 minimal-glow">
          <div className="text-center mb-6">
            <p className="font-sans text-sm text-gray-400 uppercase tracking-wide">
              Complete the form below to unlock your free download
            </p>
          </div>

          <div className="flex justify-center">
            <iframe
              title="DOC Studios Free Sounds Pack Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeuQjlSPDyyYJCsXewRWQcOVWPzAquEiG6kn72JySsEZw5TUA/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-sm"
              style={{ maxWidth: "700px" }}
            >
              Loading...
            </iframe>
          </div>

          <div className="text-center mt-6">
            <p className="font-sans text-xs text-gray-500 mb-3">
              After submitting the form, click the button below.
            </p>
            <button
              onClick={() => setFormCompleted(true)}
              className="font-sans text-xs text-gray-400 hover:text-red-500 transition-colors uppercase tracking-wide"
            >
              I completed the form
            </button>
          </div>
        </div>

        {formCompleted && (
          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/50 rounded-sm p-12 minimal-glow text-center mt-8">
            <div className="mb-8">
              <div className="mx-auto mb-6 p-4 bg-red-600/10 rounded-sm w-fit border border-red-500/20">
                <Download className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="font-serif font-medium text-2xl text-white mb-4">Thank You!</h2>
              <p className="font-sans text-gray-300 mb-8 leading-relaxed">
                Your registration is complete. Download your free sounds pack below.
              </p>
            </div>

            <a
              href="/sounds-pack/DOC-Studios-Free-Pack.zip"
              download="DOC-Studios-Free-Pack.zip"
              className="inline-flex items-center font-sans bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium minimal-glow hover:shadow-lg hover:shadow-red-500/25"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Sounds Pack
            </a>

            <p className="font-sans text-xs text-gray-500 mt-6">
              If the download does not start, click the button again.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
