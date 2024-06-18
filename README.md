# Forum Timeline App

---

This is a React-based forum timeline application that fetches and displays posts, users, and comments from a mock API. The application is styled using Material-UI and incorporates dark mode functionality and animations with Framer Motion.

## Features

- **Timeline of Posts:** Displays a list of posts with their titles, bodies, and corresponding user names.
- **Comments:** Users can expand each post to view the related comments.
- **Dark Mode:** Users can toggle between light and dark themes.
- **Animations:** Smooth animations are used for displaying posts and comments.
- **Error Boundary:** Handles any runtime errors gracefully by displaying a fallback UI.

## Demo

You can view a live demo of this application at [https://forum-timeline-app.netlify.app](https://forum-timeline-app.netlify.app)

---

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Superset of JavaScript that adds static types.
- **Material-UI (MUI):** React components for faster and easier web development.
- **Framer Motion:** A library to power animations in React.
- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **JSONPlaceholder:** Free fake online REST API for testing and prototyping.

## Project Structure

src/
components/
Comment.tsx
Post.tsx
PostList.tsx
ThemeToggle.tsx
hooks/
useFetchData.ts
themes/
index.ts
types/
index.ts
ErrorBoundary.tsx
App.tsx
index.tsx

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.0.0)
- npm (>=6.0.0)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/forum-frontend.git
   cd forum-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

### Usage

1. View Posts: The main page will display a list of posts sorted in descending order of post ID.
2. View Comments: Click the "Show Comments" button under each post to toggle the display of comments.
3. Toggle Dark Mode: Use the switch in the top-right corner of the app bar to toggle between light and dark modes.

## Code Overview

### Custom Hooks

useFetchData.ts: Fetches posts, users, and comments from the API and handles loading and error states.

### Components

- Comment.tsx: Displays individual comments.
- Post.tsx: Displays individual posts along with a button to toggle comments.
- PostList.tsx: Renders a list of posts.
- ThemeToggle.tsx: Provides a switch to toggle between light and dark themes.

### Error Handling

-ErrorBoundary.tsx: Catches JavaScript errors anywhere in the child component tree, logs those errors, and displays a fallback UI.

### Theming

- themes/index.ts: Defines light and dark themes using Material-UI's theming capabilities.
  Screenshots
- Light Mode
- Dark Mode
