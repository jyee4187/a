export const docs = [
  {
    id: '1',
    title: 'Getting Started',
    icon: '🚀',
    content: `# Getting Started

Welcome to **DocsApp** — a mobile documentation viewer built with React Native and Expo.

## Prerequisites

- Node.js 18+
- npm or yarn
- Expo Go app on your device (for quick previews)

## Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-org/your-repo.git
   cd DocsApp
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`
   npm start
   \`\`\`

4. Scan the QR code with the **Expo Go** app on Android or iOS.

## Running on a Device

- **Android**: \`npm run android\`
- **iOS**: \`npm run ios\` *(requires macOS + Xcode)*
- **Web**: \`npm run web\`
`,
  },
  {
    id: '2',
    title: 'Architecture',
    icon: '🏗️',
    content: `# Architecture

DocsApp follows a simple, flat component architecture powered by **React Native** and **Expo**.

## Folder Structure

\`\`\`
DocsApp/
├── src/
│   ├── data/
│   │   └── docs.js       # Documentation content
│   └── screens/
│       ├── HomeScreen.js # Document list
│       └── DetailScreen.js # Document viewer
├── App.js                # Navigation root
├── app.json              # Expo config
└── package.json
\`\`\`

## Key Libraries

| Library | Purpose |
|---------|---------|
| Expo | Build tooling & native APIs |
| React Navigation | Screen navigation |
| React Native | Cross-platform UI |

## Data Flow

1. \`docs.js\` exports an array of documentation entries.
2. \`HomeScreen\` lists all entries.
3. Tapping an entry navigates to \`DetailScreen\` with the full content.
`,
  },
  {
    id: '3',
    title: 'Adding Documentation',
    icon: '📝',
    content: `# Adding Documentation

You can add new documentation pages by editing \`src/data/docs.js\`.

## Format

Each entry is a JavaScript object:

\`\`\`js
{
  id: '4',           // Unique string ID
  title: 'My Topic', // Shown in the list
  icon: '📦',        // Emoji icon
  content: \`         // Markdown-style content
# My Topic
Your content here...
\`
}
\`\`\`

## Tips

- Use **Markdown headings** (\`#\`, \`##\`) for structure.
- Use **backtick blocks** for code samples.
- Keep titles short — they appear in the list.
- Pick a relevant emoji for the icon.

## Rebuilding

After editing \`docs.js\`, the Expo dev server hot-reloads automatically — no restart needed.
`,
  },
  {
    id: '4',
    title: 'Deployment',
    icon: '📦',
    content: `# Deployment

## Building for Android

1. Install EAS CLI:
   \`\`\`
   npm install -g eas-cli
   \`\`\`

2. Log in to Expo:
   \`\`\`
   eas login
   \`\`\`

3. Configure the build:
   \`\`\`
   eas build:configure
   \`\`\`

4. Build the APK:
   \`\`\`
   eas build -p android --profile preview
   \`\`\`

## Building for iOS

1. Requires an Apple Developer account.
2. Run:
   \`\`\`
   eas build -p ios --profile preview
   \`\`\`

## Over-the-Air Updates

Expo supports OTA updates via:
\`\`\`
eas update --branch production --message "Update docs"
\`\`\`

No app store submission needed for JS-only changes.
`,
  },
  {
    id: '5',
    title: 'Troubleshooting',
    icon: '🔧',
    content: `# Troubleshooting

## App Won't Start

- Ensure Node.js 18+ is installed.
- Delete \`node_modules\` and run \`npm install\` again.
- Clear Expo cache: \`npx expo start --clear\`

## Expo Go Disconnects

- Make sure your phone and computer are on the **same Wi-Fi network**.
- Try switching to **tunnel mode**: \`npx expo start --tunnel\`

## Android Build Fails

- Check that Android Studio and Android SDK are installed.
- Ensure \`ANDROID_HOME\` is set correctly in your environment.
- Run \`npx expo doctor\` to diagnose SDK issues.

## iOS Build Fails

- macOS and Xcode are required.
- Run \`sudo gem install cocoapods\` and then \`npx pod-install\` in the project root.

## Getting Help

- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [GitHub Issues](https://github.com/your-org/your-repo/issues)
`,
  },
];
