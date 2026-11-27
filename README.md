<div align="center">

# ☂️ Umbrella App

A simple weather app that shows today's weather, a smart suggestion, and colors and animations that change with the weather.

[Live Demo] (https://umbrella-app-rho.vercel.app) · [Report a Bug](https://github.com/TangkaGoswamiPuja/umbrella_app/issues)

</div>

## About

Umbrella App lets you search any city and see its current weather. It also gives a short suggestion (for example, "It's raining. Don't forget to take an umbrella") and changes the card colors and Lottie animation to match the weather.

## Features

- Search any city in the world
- Temperature, feels-like temperature, humidity and wind speed
- A color theme and Lottie animation for each weather type, with a separate night look
- Smart suggestions based on the weather and the temperature
- Change the location without going back to the home page
- Loading animation while data is coming

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite |
| Routing | React Router |
| Styling | Tailwind CSS v4, daisyUI |
| Animation | lottie-react |
| Icons | lucide-react |
| Data | [Open-Meteo](https://open-meteo.com) API (free, no API key needed) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20 or newer
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/TangkaGoswamiPuja/umbrella_app.git

# Go to the project folder
cd umbrella_app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Check the code with ESLint |

## Project Structure

```
umbrella_app/
├── public/
│   └── animations/
│       ├── weather/      # Lottie files for each weather type
│       └── advice/       # Lottie files for each suggestion
└── src/
    ├── assets/pages/     # Home, Weather and About pages
    ├── components/       # WeatherCard, FeelsLike, Recommendation, Stat, Loader, ...
    ├── layouts/          # Shared layout
    ├── services/         # Geocoding and weather API calls
    └── utils/            # Theme colors and suggestion logic
```

## How It Works

1. You type a city on the home page. The app finds its latitude and longitude.
2. The weather page asks Open-Meteo for the current weather and turns the weather code into a type such as `rain` or `clear`.
3. That type decides the card colors (`src/utils/getTheme.js`) and the animation (`public/animations/weather/`).
4. `src/utils/getRecom.js` picks one suggestion: snow, rain or fog first, then temperature, then sunny or cloudy.

If you open `/weather` directly without choosing a city, the app sends you back to the home page.

## Customization

- **Colors:** edit the matching weather type in `src/utils/getTheme.js`.
- **Animations:** add or replace a Lottie `.json` file in `public/animations/weather/` or `public/animations/advice/`. Use the exact file name (for example `rain.json`). No code change is needed.

## Troubleshooting

- **`Failed to resolve import "lottie-react"`**: run `npm install`, then restart `npm run dev`.
- **An animation does not show**: open the browser Network tab and look for a failed `/animations/...` request. A wrong file name is the most common cause.
- **VS Code shows `@plugin` as unknown**: this is only an editor warning. Install the *Tailwind CSS IntelliSense* extension to remove it.

## Author

**Tangka Goswami Puja** · [@TangkaGoswamiPuja](https://github.com/TangkaGoswamiPuja)
