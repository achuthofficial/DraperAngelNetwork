import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Parallax from './Parallax.jsx'
import { IconPlay, IconShare, IconCheck } from './icons.jsx'
import Reveal from './motion/Reveal.jsx'

export default function VideoShowcase() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [copied, setCopied] = useState(false)

  function handlePlay() {
    const el = videoRef.current
    if (!el) return
    el.muted = false
    el.play()
    setPlaying(true)
  }

  async function handleShare() {
    const shareUrl = `${window.location.origin}${window.location.pathname}#showcase`
    const shareData = {
      title: 'DAN  Draper Angel Network',
      text: 'A look inside a DAN investor session  empowering angels, accelerating founders.',
      url: shareUrl,
    }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        /* user cancelled share sheet */
      }
      return
    }
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section className="section video-showcase" id="showcase">
      <Parallax className="glow-orb showcase-orb" range={85} />
      <div className="container">
        <motion.div
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">See DAN in Action</p>
          <h2 className="section-title"><Reveal>Step inside a DAN showcase</Reveal></h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            Founders pitch. Investors ask the hard questions. This is what a monthly DAN
            showcase looks like from the room.
          </p>
        </motion.div>

        <motion.div
          className="video-player-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <video
            ref={videoRef}
            controls={playing}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/showcase-poster.jpg"
          >
            <source src="/videos/hero-meeting.mp4" type="video/mp4" />
          </video>

          {!playing && (
            <button className="video-play-overlay" onClick={handlePlay} aria-label="Play video">
              <span className="video-play-btn">
                <IconPlay />
              </span>
              <span>Watch the highlight</span>
            </button>
          )}

          <button className="video-share-btn" onClick={handleShare} aria-label="Share this video">
            {copied ? <IconCheck /> : <IconShare />}
            {copied ? 'Link copied' : 'Share'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
