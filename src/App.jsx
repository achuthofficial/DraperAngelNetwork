import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Loader from './components/chrome/Loader.jsx'

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

export default function App() {
  return (
    <>
      <Loader />
      <BackgroundTexture />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Navigate to="/login/member" replace />} />
        <Route path="/login/:role" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
