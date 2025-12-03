import { Play } from 'lucide-react'
import './SongCard.css'

const SongCard = ({ song, onPlay }) => {
  return (
    <div className="song-card" onClick={() => onPlay(song)}>
      <div className="song-card-image">
        <img src={song.cover} alt={song.title} />
        <button className="play-button">
          <Play size={24} fill="currentColor" />
        </button>
      </div>
      <div className="song-card-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  )
}

export default SongCard
