import { useCallback, useEffect, useRef, useState } from 'react'
import { IconClose, IconExpand } from '../icons.jsx'

/* A photograph from the DraperU India house, enlargeable.

   The overlay is a native <dialog> opened with showModal(), which gives us
   Escape-to-close, focus moved into the dialog and restored on close, the
   rest of the page marked inert, and a real ::backdrop — all from the
   platform. A hand-rolled div would have to reimplement every one of those
   and would get at least one wrong. */
export function Photo({ image, className = '', priority = false }) {
  const dialogRef = useRef(null)
  const [open, setOpen] = useState(false)

  const close = useCallback(() => {
    const d = dialogRef.current
    if (d?.open) d.close()
  }, [])

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    const onClose = () => setOpen(false)
    d.addEventListener('close', onClose)
    return () => d.removeEventListener('close', onClose)
  }, [])

  // Close the page's scroll behind the dialog without losing position.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!image) return null

  function openDialog() {
    dialogRef.current?.showModal()
    setOpen(true)
  }

  /* A click that lands on the dialog element itself — rather than on the
     panel inside it — is a click on the backdrop. */
  function onDialogClick(e) {
    if (e.target === dialogRef.current) close()
  }

  return (
    <figure className={`photo ${className}`}>
      <button type="button" className="photo-frame" onClick={openDialog}>
        <img
          src={image.src}
          alt={image.caption}
          width={image.w}
          height={image.h}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
        <span className="photo-expand" aria-hidden="true">
          <IconExpand />
        </span>
        <span className="sr-only">Enlarge this photograph</span>
      </button>

      <figcaption className="photo-caption">
        <span className="photo-source">DraperU India</span>
        {image.caption}
      </figcaption>

      <dialog ref={dialogRef} className="photo-dialog" onClick={onDialogClick}>
        <div className="photo-dialog-panel">
          <button type="button" className="photo-dialog-close" onClick={close} aria-label="Close">
            <IconClose />
          </button>
          {/* Rendered only while open, so the full-size file is never
              fetched for a dialog nobody opened. */}
          {open && (
            <img src={image.src} alt={image.caption} width={image.w} height={image.h} />
          )}
          <p className="photo-dialog-caption">
            <span className="photo-source">DraperU India</span>
            {image.caption}
          </p>
        </div>
      </dialog>
    </figure>
  )
}

/* Non-interactive variant: a wide strip behind a part heading. No dialog,
   because there is nothing in a banner a reader needs a closer look at. */
export function PhotoBand({ image }) {
  if (!image) return null
  return (
    <div className="photo-band">
      <img
        src={image.src}
        alt=""
        width={image.w}
        height={image.h}
        loading="lazy"
        decoding="async"
      />
      <span className="photo-band-scrim" aria-hidden="true" />
    </div>
  )
}
