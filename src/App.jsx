import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Loader from './components/chrome/Loader.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Overview from './pages/portal/Overview.jsx'
import Founders from './pages/portal/Founders.jsx'
import Events from './pages/portal/Events.jsx'
import LearnIndex from './pages/portal/LearnIndex.jsx'
import LearnModule from './pages/portal/LearnModule.jsx'
import { useAuth, isMember } from './context/AuthContext.jsx'

function BackgroundTexture() {
  return (
    <div className="bg-texture" aria-hidden="true">
      <div className="bg-texture-wash" />
      <div className="bg-texture-grid">
        {Array.from({ length: 13 }).map((_, i) => <span key={i} />)}
      </div>
      <div className="bg-texture-glow" />
    </div>
  )
}

/* Route guard. `allow` is a predicate on the role, so the same component
   covers "signed in at all" and "signed in as the right thing" — and a member
   who lands on an admin URL is sent to their own overview rather than being
   shown a dead end. */
function RequireRole({ allow, children }) {
  const { isAuthed, role } = useAuth()
  const location = useLocation()

  if (!isAuthed) {
    return <Navigate to="/login/investor" replace state={{ from: location }} />
  }
  if (allow && !allow(role)) {
    return <Navigate to="/portal" replace />
  }
  return children
}

export default function App() {
  return (
    <>
      <Loader />
      <BackgroundTexture />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Navigate to="/login/investor" replace />} />
        <Route path="/login/:role" element={<LoginPage />} />

        <Route
          path="/portal"
          element={
            <RequireRole>
              <DashboardLayout />
            </RequireRole>
          }
        >
          <Route index element={<Overview />} />
          <Route path="events" element={<Events />} />
          <Route
            path="learn"
            element={
              <RequireRole allow={isMember}>
                <LearnIndex />
              </RequireRole>
            }
          />
          <Route
            path="learn/:slug"
            element={
              <RequireRole allow={isMember}>
                <LearnModule />
              </RequireRole>
            }
          />
          <Route
            path="founders"
            element={
              <RequireRole allow={(r) => r === 'admin'}>
                <Founders />
              </RequireRole>
            }
          />
          <Route path="*" element={<Navigate to="/portal" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
