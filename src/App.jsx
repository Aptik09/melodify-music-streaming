import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Player from './components/Player'
import './App.css'

function App() {
  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')

  const handlePlaySong = (song) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="app">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <MainContent 
        currentView={currentView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onPlaySong={handlePlaySong}
      />
      <Player 
        currentSong={currentSong}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
      />
    </div>
  )
}

export default App
