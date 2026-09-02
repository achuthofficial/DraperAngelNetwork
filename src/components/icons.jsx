const common = {
  fill: 'none',
  stroke: 'var(--gold)',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconCompass(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9.2l-2 5.6-5.6 2 2-5.6 5.6-2Z" />
    </svg>
  )
}

export function IconShowcase(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <rect x="3" y="5" width="18" height="12" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 13l2.5-3L12 12l2-4 3 5" />
    </svg>
  )
}

export function IconBook(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <path d="M12 6.5C10.5 5.2 8 4.5 4.5 4.5v14c3.5 0 6 .7 7.5 2 1.5-1.3 4-2 7.5-2v-14c-3.5 0-6 .7-7.5 2Z" />
      <path d="M12 6.5v12" />
    </svg>
  )
}

export function IconNetwork(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M8.1 7.2 10.5 16M15.9 7.2 13.5 16M8.4 6h7.2" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <path d="M12 3.5 19 6.3v5.4c0 4.7-3 7.5-7 8.8-4-1.3-7-4.1-7-8.8V6.3L12 3.5Z" />
      <path d="M9 12.3l2 2 4-4.4" />
    </svg>
  )
}

export function IconInvestor(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <path d="M3 17l5-5.5 4 3L21 6" />
      <path d="M15 6h6v6" />
    </svg>
  )
}

export function IconFounder(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <path d="M12 2.8c2.4 2.2 3.8 5 3.8 8.2 0 3-1.3 5.7-3.8 8.2-2.5-2.5-3.8-5.2-3.8-8.2 0-3.2 1.4-6 3.8-8.2Z" />
      <circle cx="12" cy="10.5" r="1.8" />
      <path d="M9 18.5l-2 2.7M15 18.5l2 2.7" />
    </svg>
  )
}

export function IconMember(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <circle cx="12" cy="8.3" r="3.3" />
      <path d="M5 20c1-3.6 4-5.4 7-5.4S18 16.4 19 20" />
      <path d="M16.5 8.3h4M18.5 6.3v4" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" {...common} strokeWidth={2.2} {...props}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  )
}

export function IconPlay(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} fill="var(--gold)" stroke="none" {...props}>
      <path d="M7 4.8v14.4c0 .9.98 1.45 1.75.98l11.4-7.2a1.15 1.15 0 0 0 0-1.96l-11.4-7.2C7.98 3.35 7 3.9 7 4.8Z" />
    </svg>
  )
}

export function IconShare(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...common} {...props}>
      <circle cx="18" cy="5" r="2.6" />
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="19" r="2.6" />
      <path d="M8.3 10.7l7.4-4.4M8.3 13.3l7.4 4.4" />
    </svg>
  )
}

export function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...common} {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  )
}

export function IconCoins(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <ellipse cx="12" cy="6.6" rx="7" ry="2.8" />
      <path d="M5 6.6v5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-5" />
      <path d="M5 11.6v5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-5" />
    </svg>
  )
}

export function IconLayers(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <path d="M12 3.3 20.5 8 12 12.7 3.5 8 12 3.3Z" />
      <path d="M3.5 12 12 16.7 20.5 12" />
      <path d="M3.5 16 12 20.7 20.5 16" />
    </svg>
  )
}

export function IconRare(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <circle cx="12" cy="12" r="9" strokeDasharray="2.5 4.5" />
      <circle cx="12" cy="9.5" r="3" />
      <path d="M6.7 18.2c.9-3 3-4.5 5.3-4.5s4.4 1.5 5.3 4.5" />
    </svg>
  )
}

export function IconGlobe(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" />
    </svg>
  )
}

export function IconTarget(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="var(--gold)" />
    </svg>
  )
}

export function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...common} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="7.5" cy="7.6" r="0.9" fill="var(--gold)" stroke="none" />
      <path d="M7.5 10.6v6.4" />
      <path d="M11.3 17v-3.7c0-1.5 1-2.4 2.2-2.4 1.2 0 2 .8 2 2.3V17" />
      <path d="M11.3 10.6V17" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" {...common} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  )
}

export function IconLock(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" {...common} {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.2" />
      <path d="M7.5 10.5V7.8a4.5 4.5 0 0 1 9 0v2.7" />
      <circle cx="12" cy="15.3" r="1.4" fill="var(--gold)" stroke="none" />
    </svg>
  )
}

export function IconEye(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...common} {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function IconEyeOff(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...common} {...props}>
      <path d="M3.5 3.5l17 17" />
      <path d="M10.6 5.7C11.05 5.6 11.51 5.5 12 5.5c6 0 9.5 6.5 9.5 6.5a17.5 17.5 0 0 1-3.35 4.15M7.4 6.9C4.7 8.4 2.5 12 2.5 12s3.5 6.5 9.5 6.5c1.28 0 2.42-.3 3.42-.77" />
      <path d="M9.9 10.1a3 3 0 0 0 4 4" />
    </svg>
  )
}

export function IconSpinner(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.4" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  )
}

export function IconArrowUp(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...common} {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  )
}

/* Google's own four-colour G. Deliberately not stroked or recoloured —
   Google's brand terms require the mark be used as issued. */
export function IconGoogle(props) {
  return (
    <svg viewBox="0 0 18 18" width="17" height="17" aria-hidden="true" {...props}>
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.34A9 9 0 0 0 9 18Z" />
      <path fill="#FBBC05" d="M3.97 10.72a5.41 5.41 0 0 1 0-3.44V4.94H.96a9 9 0 0 0 0 8.12l3.01-2.34Z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.94l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58Z" />
    </svg>
  )
}

export function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" {...common} {...props}>
      <path d="M12 12.6a4.05 4.05 0 1 0 0-8.1 4.05 4.05 0 0 0 0 8.1Z" />
      <path d="M4.6 20.2c.7-3.4 3.8-5.6 7.4-5.6s6.7 2.2 7.4 5.6" />
    </svg>
  )
}
