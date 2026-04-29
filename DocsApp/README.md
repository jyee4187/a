# DocsApp 📖

A simple cross-platform **documentation viewer** app built with [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/).

Works on **Android**, **iOS**, and **Web** from a single codebase.

---

## Screenshots

| Home Screen | Article Screen |
|---|---|
| List of documentation topics | Full article with formatted content |

---

## Quick Start

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [Expo Go](https://expo.dev/go) app on your phone *(for the fastest preview)*

### Install & Run

```bash
cd DocsApp
npm install
npm start
```

Scan the QR code in the terminal with the **Expo Go** app.

### Run on Specific Platform

```bash
npm run android   # Android emulator or device
npm run ios       # iOS simulator (macOS + Xcode required)
npm run web       # Web browser
```

---

## Project Structure

```
DocsApp/
├── src/
│   ├── data/
│   │   └── docs.js          # ← Add/edit documentation here
│   └── screens/
│       ├── HomeScreen.js    # Document list
│       └── DetailScreen.js  # Document viewer
├── App.js                   # Navigation setup
├── app.json                 # Expo configuration
└── package.json
```

---

## Adding New Documentation

Open `src/data/docs.js` and add a new entry to the `docs` array:

```js
{
  id: '6',
  title: 'My New Topic',
  icon: '✨',
  content: `# My New Topic

Your documentation content here.

## Subheading

- Bullet point
- Another point

## Code Example

\`\`\`
npm install my-package
\`\`\`
`,
}
```

The app hot-reloads automatically — no restart needed.

---

## Tech Stack

| Library | Version | Purpose |
|---|---|---|
| Expo | ~54 | Build tooling & SDK |
| React Native | 0.81 | Cross-platform UI |
| React Navigation | 7 | Screen routing |

---

## Building for Production

Install [EAS CLI](https://docs.expo.dev/eas/) and run:

```bash
npm install -g eas-cli
eas login
eas build:configure

# Android APK/AAB
eas build -p android --profile preview

# iOS IPA (requires Apple Developer account)
eas build -p ios --profile preview
```

---

## License

MIT
