# Background Music Setup

## 🎵 Audio Files Required

Place 3 music tracks in the `/public/audio/` folder:

```
/public/audio/
  ├── track1.mp3  (HIGH volume - main melody/lead - 60%)
  ├── track2.mp3  (MEDIUM volume - harmony/rhythm - 40%)
  └── track3.mp3  (LOW volume - ambient/bass - 20%)
```

## 🎚️ Volume Levels

The system automatically mixes 3 tracks at different volumes:
- **Track 1 (High)**: 60% volume - Main melody or lead instrument
- **Track 2 (Medium)**: 40% volume - Supporting harmony or rhythm
- **Track 3 (Low)**: 20% volume - Ambient sounds or bass line

## 🎛️ Controls

Two floating buttons appear in the bottom-right corner:

1. **🔊 Volume Button** (Orange)
   - Click to mute/unmute all tracks
   - Smooth fade in/out animation
   - Shows 🔇 when muted

2. **▶️ Play/Pause Button** (Red)
   - Click to play/pause all tracks
   - Shows ⏸️ when playing
   - Shows ▶️ when paused

3. **🟢 Status Indicator** (Green dot)
   - Appears when music is playing and not muted
   - Pulses to show activity

## 🎼 Music Recommendations

For a spooky Halloween vibe, consider:

**Track 1 (High - 60%)**: Main spooky melody
- Haunted music box
- Creepy piano theme
- Ghostly whispers

**Track 2 (Medium - 40%)**: Atmospheric elements
- Distant thunder
- Wind howling
- Eerie strings

**Track 3 (Low - 20%)**: Deep ambience
- Low rumbling bass
- Heartbeat sounds
- Deep drone/pad

## 🔧 Customization

Edit `/src/components/BackgroundMusic.jsx` to adjust:
- Volume levels (lines 16-18)
- Track file paths (lines 74-82)
- Button positions (line 86)
- Button colors and styles (lines 90-104)

## 📝 Notes

- All tracks loop automatically
- Music auto-plays after 0.5 seconds (after loading screen)
- Smooth volume transitions (0.5s fade)
- Browser may block autoplay - buttons allow manual control
- All tracks are synchronized and start together
