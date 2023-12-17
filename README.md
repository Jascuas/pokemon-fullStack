# Pokedex - FullStack proyect 🤘🚀

Project developed as part of a technical test, implementing a React frontend to display detailed information about Pokémon obtained from the PokeAPI. The backend, built with Node.js and Express, integrates with a MongoDB database to store and manage data related to Pokémon. Explore the list of Pokémon, access specific details, and enjoy an interactive experience.

![Captura de pantalla 2023-12-17 173007](https://github.com/Jascuas/pokemon-fullStack/assets/35936177/900e9cd2-f26c-47b0-a52d-940dcdeb216c)

## Technologies used

- React
- Next.js
- Tailwindcss
- Node.js
- Express
- MongoDB

## Demo

[https://pokemon-full-stack-git-main-jascuas.vercel.app/](https://pokemon-full-stack-git-main-jascuas.vercel.app/)

## Features

- **Pokémon List:** View a comprehensive list of Pokémon retrieved from the PokeAPI.
- **Detailed Information:** Access detailed information for each Pokémon, including types, evolutions, and more.
- **Interactive UI:** Enjoy a user-friendly interface for seamless navigation and exploration.
- **Backend Integration:** The Node.js and Express backend seamlessly connects with MongoDB to store and manage Pokémon data.
- **Search Functionality:** Easily search for specific Pokémon within the application.
- **Scalable Architecture:** Built with scalability in mind, allowing for potential future expansions and enhancements.
- **Responsive Design:** The frontend is designed to provide a consistent and engaging experience across various devices.

Explore the world of Pokémon with this Pokedex application, offering a rich user experience and showcasing the integration of React, Node.js, Express, and MongoDB technologies.

## Installation

### Backend (Node.js, Express, MongoDB)

1. Navigate to the backend directory and install dependencies.
   ```bash
   cd poke-api
   npm install
   
2. Start the server
   ```bash
   npm run dev

### FrontEnd (React.js, Next.js)

1. Navigate to the frontend directory and install dependencies.
   ```bash
   cd poke-app
   npm install

3. Set the environment variable NEXT_PUBLIC_POKEAPI_URL in the .env file. This variable can be set to either the PokeAPI URL or the URL of the Node.js API. (always localhost:3000)
   ```bash
   NEXT_PUBLIC_API_URL=https://api.pokeapi.com/v2/pokemon/
   # OR
   NEXT_PUBLIC_API_URL=http://localhost:3000/pokemon/

4. Start the frontend
   ```bash
   npm run dev

Ensure that the backend is running before starting the frontend. Access the application at http://localhost:3001.
