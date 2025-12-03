import { useState, useEffect, useRef } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle, Heart } from 'lucide-react'
import './Player.css'

const Player = ({ currentSong, isPlaying, onTogglePlay }) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(70)
  const [isMuted, setIsMuted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * duration
    audioRef.current.currentTime = time
    setCurrentTime(time)
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
    setIsMuted(false)
  }

  if (!currentSong) {
    return (
      <div className="player">
        <div className="player-content">
          <div className="player-info">
            <div className="song-placeholder">
              <p>Select a song to play</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => onTogglePlay()}
      />
      
      <div className="player-content">
        <div className="player-left">
          <img src={currentSong.cover} alt={currentSong.title} />
          <div className="song-info">
            <h4>{currentSong.title}</h4>
            <p>{currentSong.artist}</p>
          </div>
          <button 
            className={`icon-button ${isLiked ? 'liked' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="player-center">
          <div className="player-controls">
            <button className="icon-button">
              <Shuffle size={16} />
            </button>
            <button className="icon-button">
              <SkipBack size={20} />
            </button>
            <button className="play-pause-button" onClick={onTogglePlay}>
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
            </button>
            <button className="icon-button">
              <SkipForward size={20} />
            </button>
            <button className="icon-button">
              <Repeat size={16} />
            </button>
          </div>
          <div className="progress-bar-container">
            <span className="time">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0}
              onChange={handleSeek}
              className="progress-bar"
            />
            <span className="time">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="player-right">
          <button 
            className="icon-button"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="volume-bar"
          />
        </div>
      </div>
    </div>
  )
}

export default Player
