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
