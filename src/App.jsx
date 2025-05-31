import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import RSVP from './pages/RSVP'
import Photos from './pages/Photos'
import SongRequests from './pages/SongRequests'
import Location from './pages/Location'

function App() {
  return (
    <Box minH="100vh" bg="#f0f3dc">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/song-requests" element={<SongRequests />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
