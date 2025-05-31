import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Story from './pages/Story'
import Details from './pages/Details'
import RSVP from './pages/RSVP'
import Photos from './pages/Photos'
import Registry from './pages/Registry'

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/details" element={<Details />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/registry" element={<Registry />} />
      </Routes>
    </Box>
  )
}

export default App
