# Top Courses

A React app that fetches and displays top courses from an external API. Users can filter by category and like courses.

## Features

- Browse top courses
- Filter by category: All, Liked, Development, Business, Design, Lifestyle
- Like/unlike courses
- Loading spinner while fetching data
- Error notifications with React Toastify

## Tech

- React 18
- Tailwind CSS
- React Icons
- React Toastify

## Install & Run

```bash
npm install
npm start
```

Open `http://localhost:3000`

## Project files

- `src/App.js` — main app logic
- `src/data.js` — API URL and filter data
- `src/Components/Filter.jsx` — category buttons
- `src/Components/Cards.jsx` — course list
- `src/Components/Card.jsx` — course card details
- `src/Components/Navbar.jsx` — header
- `src/Components/Spinner.jsx` — loading indicator

## API

Fetches courses from:

`https://codehelp-apis.vercel.app/api/get-top-courses`

Data is loaded from `response.data`.

## Notes

- Displays "Data Not Found" if no courses are returned
- Shows a toast error on failed API requests

## Scripts

- `npm start` — run development server
- `npm build` — build for production
- `npm test` — run tests
- `npm eject` — eject CRA
