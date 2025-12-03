import { Search } from 'lucide-react'
import SongCard from './SongCard'
import { songs } from '../data/songs'
import './MainContent.css'

const MainContent = ({ currentView, searchQuery, setSearchQuery, onPlaySong }) => {
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const renderContent = () => {
    switch (currentView) {
      case 'search':
        return (
          <div className="search-view">
            <div className="search-bar">
              <Search size={24} />
              <input
                type="text"
                placeholder="What do you want to listen to?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="songs-grid">
              {filteredSongs.map(song => (
                <SongCard key={song.id} song={song} onPlay={onPlaySong} />
              ))}
            </div>
          </div>
        )
      
      case 'library':
        return (
          <div className="library-view">
            <h1>Your Library</h1>
            <div className="songs-grid">
              {songs.slice(0, 8).map(song => (
                <SongCard key={song.id} song={song} onPlay={onPlaySong} />
              ))}
            </div>
          </div>
        )
      
      default:
        return (
          <div className="home-view">
            <h1>Good afternoon</h1>
            <div className="featured-playlists">
              <div className="playlist-card-large">
                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" alt="Playlist" />
                <div className="playlist-info">
                  <h3>Today's Top Hits</h3>
                  <p>The hottest tracks right now</p>
                </div>
              </div>
              <div className="playlist-card-large">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" alt="Playlist" />
                <div className="playlist-info">
                  <h3>RapCaviar</h3>
                  <p>New music from Drake and more</p>
                </div>
              </div>
              <div className="playlist-card-large">
                <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop" alt="Playlist" />
                <div className="playlist-info">
                  <h3>All Out 2010s</h3>
                  <p>The biggest songs of the 2010s</p>
                </div>
              </div>
            </div>
            
            <h2>Made for you</h2>
            <div className="songs-grid">
              {songs.slice(0, 6).map(song => (
                <SongCard key={song.id} song={song} onPlay={onPlaySong} />
              ))}
            </div>

            <h2>Recently played</h2>
            <div className="songs-grid">
              {songs.slice(6, 12).map(song => (
                <SongCard key={song.id} song={song} onPlay={onPlaySong} />
              ))}
            </div>
          </div>
        )
    }
  }

  return (
    <main className="main-content">
      <div className="content-wrapper">
        {renderContent()}
      </div>
    </main>
  )
}

export default MainContent
