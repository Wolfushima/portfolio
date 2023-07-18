import PROJECTS_IMAGES from './projects-images';
import PROJECTS_SKILLS from './projects-skills';

const PROJECTS_DATA = {
  studioGhibliShoppingCart: {
    title: 'Studio Ghibli Shopping Cart',
    description:
      'Studio Ghibli Shopping Cart is an e-commerce web application built using React and designed to allow users to browse, search and purchase films from the world of Studio Ghibli. I used React Router to handle client-side routing and React Context API to handle the users cart.',
    images: PROJECTS_IMAGES.studioGhibliShoppingCart,
    liveLink: 'https://wolfushima.github.io/react-shopping-cart/',
    codeLink: 'https://github.com/Wolfushima/react-shopping-cart/',
    skills: PROJECTS_SKILLS.studioGhibliShoppingCart,
  },
  whereIsWaldo: {
    title: `Where's Waldo?`,
    description:
      'Photo-tagging application that incorporates a backend using Firebase. The objective of the project is to find Waldo and other hidden characters within six different levels.',
    images: PROJECTS_IMAGES.whereIsWaldo,
    liveLink: 'https://wolfushima.github.io/where-is-waldo/',
    codeLink: 'https://github.com/Wolfushima/where-is-waldo',
    skills: PROJECTS_SKILLS.whereIsWaldo,
  },
  portfolio: {
    title: 'Portfolio',
    description:
      'Used React and Framer Motion to create a smooth and visually engaging portfolio with reusable components and animations. Used React and Framer Motion to create a smooth and visually engaging portfolio with reusable components and animations.',
    images: PROJECTS_IMAGES.portfolio,
    liveLink: 'https://adolfoherrera.netlify.app/',
    codeLink: 'https://github.com/Wolfushima/portfolio/',
    skills: PROJECTS_SKILLS.portfolio,
  },
  weatherApp: {
    title: 'Weather App',
    description:
      'Weather forecast site that uses the API OpenWeatherMap. Display current and the next 7 days forecast data for a given location.',
    images: PROJECTS_IMAGES.weatherApp,
    liveLink: 'https://wolfushima.github.io/weather-app/',
    codeLink: 'https://github.com/Wolfushima/weather-app/',
    skills: PROJECTS_SKILLS.weatherApp,
  },
  battleship: {
    title: 'Battleship',
    description:
      'Battleship game to practice TDD with Jest. Used factory functions to create players, ships and game board objects.',
    images: PROJECTS_IMAGES.battleship,
    liveLink: 'https://wolfushima.github.io/battleship/',
    codeLink: 'https://github.com/Wolfushima/battleship/',
    skills: PROJECTS_SKILLS.battleship,
  },
};

export default PROJECTS_DATA;
