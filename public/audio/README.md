# Audio Files for ShauryaSetu

## Intro Screen Background Music

### Requirements:
- **Type:** Instrumental patriotic music (NO VOCALS)
- **Instruments:** Tabla, flute, sitar, or similar traditional Indian instruments
- **Duration:** 15-30 seconds (will loop)
- **Volume:** Low/ambient (30% volume set in code)
- **Format:** MP3 (primary) and OGG (fallback)
- **File Size:** < 500KB recommended

### File Naming:
- Primary: `intro-patriotic-instrumental.mp3`
- Fallback: `intro-patriotic-instrumental.ogg`

### Where to Find Royalty-Free Music:

1. **YouTube Audio Library**
   - Search: "Indian instrumental patriotic"
   - Filter: No copyright
   - Download and convert to MP3

2. **Free Music Archive**
   - https://freemusicarchive.org
   - Search: "Indian classical instrumental"

3. **Incompetech**
   - https://incompetech.com
   - Search: "Indian" or "World"
   - All music is royalty-free with attribution

4. **Pixabay Music**
   - https://pixabay.com/music
   - Search: "Indian instrumental"
   - 100% free, no attribution required

### Recommended Tracks (Examples):
- Soft tabla rhythm with flute melody
- Sitar ambient background
- Peaceful Indian classical fusion
- Gentle patriotic theme (instrumental only)

### How to Add:

1. Download your chosen instrumental track
2. Convert to MP3 if needed (use online converter)
3. Rename to: `intro-patriotic-instrumental.mp3`
4. Place in: `public/audio/` directory
5. (Optional) Create OGG version for better browser support

### Testing:
```bash
# After adding the file
npm start
# Music should auto-play on intro screen
# Should stop when clicking "Enter"
```

### Accessibility Note:
- Music is set to low volume (30%)
- Users can mute browser tab if needed
- Music stops immediately on interaction
- No music plays after intro screen

### Browser Compatibility:
- Chrome: ✅ MP3
- Firefox: ✅ MP3, OGG
- Safari: ✅ MP3
- Edge: ✅ MP3

### File Structure:
```
public/
  audio/
    intro-patriotic-instrumental.mp3  (Add this file)
    intro-patriotic-instrumental.ogg  (Optional fallback)
    README.md                          (This file)
```

---

**Note:** If you don't add an audio file, the intro screen will still work perfectly - it just won't have background music. The code handles missing audio gracefully.