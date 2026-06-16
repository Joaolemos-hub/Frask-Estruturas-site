import Image from 'next/image'
import type { SiteBackgroundConfig } from '@/lib/site-backgrounds'

const overlayGradients = {
  light:
    'bg-gradient-to-br from-white/97 via-white/94 to-white/90',
  cream:
    'bg-gradient-to-br from-[#F5F5F0]/97 via-[#F5F5F0]/94 to-[#F5F5F0]/88',
  dark:
    'bg-gradient-to-br from-neutral-900/96 via-neutral-900/93 to-neutral-900/88',
} as const

export default function SectionBackground({
  src,
  alt,
  overlay,
  imageOpacity = 0.2,
  position = 'center',
  priority = false,
}: SiteBackgroundConfig) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        className="object-cover scale-105"
        style={{
          opacity: imageOpacity,
          objectPosition: position,
        }}
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlayGradients[overlay]}`} />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}
