# Contributing to Melodify

Thank you for considering contributing to Melodify! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and OS information

### Suggesting Features

1. **Open an issue** with the `enhancement` label
2. **Describe the feature** clearly
3. **Explain the use case** and benefits
4. **Provide examples** if possible

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   npm run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**

## 📝 Code Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Use meaningful variable and function names
- Keep components small and focused
- Use PropTypes or TypeScript for type checking
- Follow React best practices

### CSS

- Use CSS variables for theming
- Follow BEM naming convention where applicable
- Keep selectors specific but not overly complex
- Use mobile-first responsive design

### File Organization

- One component per file
- Co-locate CSS with components
- Use descriptive file names
- Keep folder structure flat when possible

## 🧪 Testing

Before submitting a PR:

1. Test on multiple browsers (Chrome, Firefox, Safari)
2. Test responsive design on different screen sizes
3. Verify no console errors or warnings
4. Test all interactive features

## 📋 Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] Tested on multiple browsers
- [ ] Responsive design verified
- [ ] Commits are clear and descriptive

## 🎯 Priority Areas

We especially welcome contributions in:

- **Backend Integration** - Add real authentication and database
- **Playlist Features** - Enhanced playlist management
- **Social Features** - Sharing, following, collaborative playlists
- **Audio Features** - Equalizer, crossfade, gapless playback
- **Accessibility** - Keyboard navigation, screen reader support
- **Performance** - Optimization and caching
- **Testing** - Unit and integration tests

## 💬 Communication

- **Issues** - For bugs and feature requests
- **Pull Requests** - For code contributions
- **Discussions** - For questions and ideas

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Assume good intentions

## 🏆 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Credited in commit history

Thank you for contributing to Melodify! 🎵
