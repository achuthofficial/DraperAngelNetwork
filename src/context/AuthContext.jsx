import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const KEY = 'dan.session'

/* Three portal roles. `member` is the shared capability — learning modules and
   the events calendar — which both investors and founders get. Admin instead
   gets the founder directory and event management. */
export const ROLE_LABELS = {
  investor: 'Investor',
  founder: 'Founder',
  admin: 'Administrator',
}

export const isMember = (role) => role === 'investor' || role === 'founder'

function read() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return ROLE_LABELS[parsed?.role] ? parsed : null
  } catch {
    return null
  }
}

function write(session) {
  try {
    if (session) localStorage.setItem(KEY, JSON.stringify(session))
    else localStorage.removeItem(KEY)
  } catch {
    /* storage blocked — session stays in memory for this tab */
  }
}

/* Prototype auth. There is no backend: any credentials that pass the form's
   own validation are accepted, and the session is a single localStorage
   record. It exists so the portal has a real notion of "who is signed in"
   and can route and gate accordingly. */
export function AuthProvider({ children }) {
  const [session, setSession] = useState(read)

  const signIn = useCallback(({ role, email, name }) => {
    const next = {
      role,
      email: email || `${role}@dan.vc`,
      name: name || (role === 'admin' ? 'DAN Operations' : 'DAN Member'),
      since: new Date().toISOString(),
    }
    write(next)
    setSession(next)
    return next
  }, [])

  const signOut = useCallback(() => {
    write(null)
    setSession(null)
  }, [])

  const value = useMemo(
    () => ({
      session,
      role: session?.role ?? null,
      isAuthed: !!session,
      signIn,
      signOut,
    }),
    [session, signIn, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside an AuthProvider')
  return ctx
}
