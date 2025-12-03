# 🎵 Melodify - Music Streaming Platform

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://melodify-music-streaming.vercel.app)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1.0-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A modern, feature-rich music streaming platform inspired by Spotify, built with React and Vite. Melodify offers a seamless music listening experience with an intuitive interface, powerful search capabilities, and responsive design.

## 🌟 Live Demo

| Description | Link |
|------------|------|
| 🚀 View Live Demo | [https://melodify-music-streaming.vercel.app](https://melodify-music-streaming-rose.vercel.app/) |
| 📺 Project Video | https://youtu.be/G23q0XxZDdo |

## ✨ Features

- 🎧 **Music Player** - Full-featured audio player with play/pause, skip, and volume controls
- 🔍 **Smart Search** - Search songs by title or artist in real-time
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, Spotify-inspired interface with smooth animations
- ❤️ **Favorites** - Like and save your favorite tracks
- 📚 **Library Management** - Organize your music collection
- 🎵 **Playlists** - Create and manage custom playlists
- 🔊 **Volume Control** - Adjustable volume with mute functionality
- ⏱️ **Progress Tracking** - Visual progress bar with time display
- 🎭 **Multiple Views** - Home, Search, and Library views

## 🚀 Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.1.0
- **Icons:** Lucide React
- **Styling:** Pure CSS with CSS Variables
- **State Management:** React Hooks (useState, useEffect, useRef)
- **Deployment:** Vercel

## 📊 System Architecture

### Data Flow Diagram (DFD) - Level 0

![DFD Level 0](https://external-agents.nyc3.digitaloceanspaces.com/mermaid-diagrams/2025-12-03T19-56-34-0c948972-fc6c-427d-8515-b392d3400758-generate_flowchart-1764791794050.png)

The Level 0 DFD shows the high-level interaction between the user and the Melodify system, including authentication and data storage.

### Data Flow Diagram (DFD) - Level 1

![DFD Level 1](https://external-agents.nyc3.digitaloceanspaces.com/mermaid-diagrams/2025-12-03T19-57-17-8c0a12ef-56c4-4879-86de-0f033ade99bd-generate_flowchart-1764791837462.png)

The Level 1 DFD breaks down the system into core modules:
- **Authentication Module** - User login/signup management
- **Search Module** - Real-time song search functionality
- **Music Player Module** - Audio playback controls
- **Playlist Module** - Playlist creation and management

### UML Class Diagram

![UML Diagram](https://external-agents.nyc3.digitaloceanspaces.com/mermaid-diagrams/2025-12-03T19-57-46-39280bad-9329-4c87-ab5a-f4f0abfc63ba-generate_class_diagram-1764791866655.png)

The UML diagram illustrates the object-oriented structure with four main classes:
- **User** - User account management
- **Song** - Song metadata and playback
- **Playlist** - Playlist operations
- **Player** - Audio player controls

## 📁 Project Structure

```
melodify-music-streaming/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Navigation sidebar
│   │   ├── Sidebar.css
│   │   ├── MainContent.jsx      # Main content area
│   │   ├── MainContent.css
│   │   ├── SongCard.jsx         # Song card component
│   │   ├── SongCard.css
│   │   ├── Player.jsx           # Audio player
│   │   └── Player.css
│   ├── data/
│   │   └── songs.js             # Song data
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aptik09/melodify-music-streaming.git
   cd melodify-music-streaming
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Components

### 1. Sidebar Component
- Navigation menu with Home, Search, and Library
- Playlist management
- Responsive design with mobile optimization

### 2. MainContent Component
- Dynamic content rendering based on current view
- Featured playlists section
- Song grid with responsive layout
- Real-time search functionality

### 3. SongCard Component
- Album artwork display
- Song title and artist information
- Hover effects with play button
- Click-to-play functionality

### 4. Player Component
- Audio playback controls (play, pause, skip)
- Progress bar with seek functionality
- Volume control with mute option
- Current song information display
- Like/favorite functionality

## 🎨 Design Features

- **Dark Theme** - Eye-friendly dark color scheme
- **Smooth Animations** - Polished transitions and hover effects
- **Responsive Grid** - Adaptive layouts for all screen sizes
- **Custom Scrollbars** - Styled scrollbars matching the theme
- **Gradient Backgrounds** - Dynamic gradient effects
- **Icon Integration** - Lucide React icons for consistency

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds:
- Hot Module Replacement (HMR)
- Fast refresh
- Optimized production builds
- Port 3000 for development

### CSS Variables
Customizable theme colors in `src/index.css`:
```css
--bg-primary: #000000
--bg-secondary: #121212
--bg-tertiary: #181818
--bg-hover: #282828
--text-primary: #ffffff
--text-secondary: #b3b3b3
--accent-green: #1db954
--accent-hover: #1ed760
```

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Tablet:** 768px
- **Mobile:** < 768px

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Environment Variables
No environment variables required for basic functionality.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aptik09**
- GitHub: [@Aptik09](https://github.com/Aptik09)

## 🙏 Acknowledgments

- Inspired by Spotify's user interface
- Icons by [Lucide](https://lucide.dev/)
- Sample audio from [SoundHelix](https://www.soundhelix.com/)
- Images from [Unsplash](https://unsplash.com/)

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainer.

---

**Made with ❤️ by Aptik09**
