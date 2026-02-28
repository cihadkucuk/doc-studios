"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoPlayerModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
  poster?: string
  title?: string
  description?: string
  artistInfo?: string
}

export function VideoPlayerModal({
  isOpen,
  onClose,
  videoUrl = "",
  poster = "",
  title = "Work Preview",
  description = "",
  artistInfo = "",
}: VideoPlayerModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isOpen) {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
      document.body.style.overflow = "unset"
      return
    }

    document.body.style.overflow = "hidden"

    const playTimer = window.setTimeout(() => {
      if (videoRef.current) {
        void videoRef.current.play().catch(() => {
          // Some browsers block autoplay until explicit user interaction.
        })
      }
    }, 40)

    return () => {
      window.clearTimeout(playTimer)
      document.body.style.overflow = "unset"
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [isOpen, videoUrl])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/92" onClick={onClose} />

      <div className="relative w-full max-w-5xl mx-6 md:mx-10 lg:mx-14 bg-black border border-red-600/30 rounded-lg overflow-hidden">
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 z-10 text-red-500 hover:text-white hover:bg-red-600/20"
          aria-label="Close video"
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="relative aspect-video bg-black">
          {videoUrl ? (
            <video
              ref={videoRef}
              className="w-full h-full object-contain bg-black"
              poster={poster || undefined}
              controls
              playsInline
              autoPlay
              preload="metadata"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex items-center justify-center h-full text-red-500 text-lg">Video unavailable</div>
          )}
        </div>

        <div className="p-6 bg-gradient-to-b from-black to-red-950/20">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">{title}</h3>

          {description && (
            <div className="mb-4">
              <h4 className="text-red-500 font-semibold mb-2">About This Track:</h4>
              <p className="text-red-100 leading-relaxed">{description}</p>
            </div>
          )}

          {artistInfo && (
            <div className="border-t border-red-600/30 pt-4">
              <h4 className="text-red-500 font-semibold mb-2">Artist Info:</h4>
              <p className="text-red-100 leading-relaxed">{artistInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
