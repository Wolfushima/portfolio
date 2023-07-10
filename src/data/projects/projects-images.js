import {
  StudioGhibliShoppingCart1Image1200w,
  StudioGhibliShoppingCart1Image800w,
  StudioGhibliShoppingCart1Image400w,
  StudioGhibliShoppingCart2Image1200w,
  StudioGhibliShoppingCart2Image800w,
  StudioGhibliShoppingCart2Image400w,
  StudioGhibliShoppingCart3Image1200w,
  StudioGhibliShoppingCart3Image800w,
  StudioGhibliShoppingCart3Image400w,
  StudioGhibliShoppingCart4Image1200w,
  StudioGhibliShoppingCart4Image800w,
  StudioGhibliShoppingCart4Image400w,
  StudioGhibliShoppingCart5Image1200w,
  StudioGhibliShoppingCart5Image800w,
  StudioGhibliShoppingCart5Image400w,
  StudioGhibliShoppingCart6Image1200w,
  StudioGhibliShoppingCart6Image800w,
  StudioGhibliShoppingCart6Image400w,
  StudioGhibliShoppingCart7Image1200w,
  StudioGhibliShoppingCart7Image800w,
  StudioGhibliShoppingCart7Image400w,
  StudioGhibliShoppingCart8Image1200w,
  StudioGhibliShoppingCart8Image800w,
  StudioGhibliShoppingCart8Image400w,
  StudioGhibliShoppingCart9Image1200w,
  StudioGhibliShoppingCart9Image800w,
  StudioGhibliShoppingCart9Image400w,
  StudioGhibliShoppingCart10Image1200w,
  StudioGhibliShoppingCart10Image800w,
  StudioGhibliShoppingCart10Image400w,
} from '../../assets/projects/studioghibli-shopping-cart';

import {
  WhereIsWaldo1Image1200w,
  WhereIsWaldo1Image800w,
  WhereIsWaldo1Image400w,
  WhereIsWaldo2Image1200w,
  WhereIsWaldo2Image800w,
  WhereIsWaldo2Image400w,
  WhereIsWaldo3Image1200w,
  WhereIsWaldo3Image800w,
  WhereIsWaldo3Image400w,
  WhereIsWaldo4Image1200w,
  WhereIsWaldo4Image800w,
  WhereIsWaldo4Image400w,
} from '../../assets/projects/where-is-waldo';

import {
  Battleship1Image800w,
  Battleship1Image400w,
  Battleship2Image800w,
  Battleship2Image400w,
} from '../../assets/projects/battleship';

import {
  WeatherApp1Image800w,
  WeatherApp1Image400w,
  WeatherApp2Image800w,
  WeatherApp2Image400w,
} from '../../assets/projects/weather-app';

import {
  Portfolio1Image800w,
  Portfolio1Image400w,
  Portfolio2Image800w,
  Portfolio2Image400w,
} from '../../assets/projects/portfolio';

const PROJECTS_IMAGES = {
  studioGhibliShoppingCart: {
    src: [
      StudioGhibliShoppingCart1Image1200w,
      StudioGhibliShoppingCart2Image1200w,
      StudioGhibliShoppingCart3Image1200w,
      StudioGhibliShoppingCart4Image1200w,
      StudioGhibliShoppingCart5Image1200w,
      StudioGhibliShoppingCart6Image1200w,
      StudioGhibliShoppingCart7Image1200w,
      StudioGhibliShoppingCart8Image1200w,
      StudioGhibliShoppingCart9Image1200w,
      StudioGhibliShoppingCart10Image1200w,
    ],
    srcSet: [
      `
        ${StudioGhibliShoppingCart1Image400w} 540w,
        ${StudioGhibliShoppingCart1Image800w} 768w,
        ${StudioGhibliShoppingCart1Image1200w} 1023w,
      `,
      `
        ${StudioGhibliShoppingCart2Image400w} 540w,
        ${StudioGhibliShoppingCart2Image800w} 768w,
        ${StudioGhibliShoppingCart2Image1200w} 1023w,
      `,
      `
        ${StudioGhibliShoppingCart3Image400w} 540w,
        ${StudioGhibliShoppingCart3Image800w} 768w,
        ${StudioGhibliShoppingCart3Image1200w} 1023w,
      `,
      `
        ${StudioGhibliShoppingCart4Image400w} 540w,
        ${StudioGhibliShoppingCart4Image800w} 768w,
        ${StudioGhibliShoppingCart4Image1200w} 1023w,
      `,
      `
        ${StudioGhibliShoppingCart5Image400w} 540w,
        ${StudioGhibliShoppingCart5Image800w} 768w,
        ${StudioGhibliShoppingCart5Image1200w} 1023w,
      `,
      `
        ${StudioGhibliShoppingCart6Image400w} 540w,
        ${StudioGhibliShoppingCart6Image800w} 768w,
        ${StudioGhibliShoppingCart6Image1200w} 1023w,
      `,
      `
        ${StudioGhibliShoppingCart7Image400w} 540w,
        ${StudioGhibliShoppingCart7Image800w} 768w,
        ${StudioGhibliShoppingCart7Image1200w} 1023w,
      `,
      `
        ${StudioGhibliShoppingCart8Image400w} 540w,
        ${StudioGhibliShoppingCart8Image800w} 768w,
        ${StudioGhibliShoppingCart8Image1200w} 1023w,
      `,
      `
        ${StudioGhibliShoppingCart9Image400w} 540w,
        ${StudioGhibliShoppingCart9Image800w} 768w,
        ${StudioGhibliShoppingCart9Image1200w} 1023w,
      `,
      `
        ${StudioGhibliShoppingCart10Image400w} 540w,
        ${StudioGhibliShoppingCart10Image800w} 768w,
        ${StudioGhibliShoppingCart10Image1200w} 1023w,
      `,
    ],
    alt: 'Studio Ghibli Shopping Cart',
  },
  whereIsWaldo: {
    src: [
      WhereIsWaldo1Image1200w,
      WhereIsWaldo2Image1200w,
      WhereIsWaldo3Image1200w,
      WhereIsWaldo4Image1200w,
    ],
    srcSet: [
      `
        ${WhereIsWaldo1Image400w} 540w,
        ${WhereIsWaldo1Image800w} 768w,
        ${WhereIsWaldo1Image1200w} 1023w,
      `,
      `
        ${WhereIsWaldo2Image400w} 540w,
        ${WhereIsWaldo2Image800w} 768w,
        ${WhereIsWaldo2Image1200w} 1023w,
      `,
      `
        ${WhereIsWaldo3Image400w} 540w,
        ${WhereIsWaldo3Image800w} 768w,
        ${WhereIsWaldo3Image1200w} 1023w,
      `,
      `
        ${WhereIsWaldo4Image400w} 540w,
        ${WhereIsWaldo4Image800w} 768w,
        ${WhereIsWaldo4Image1200w} 1023w,
      `,
    ],
    alt: 'Where is Waldo?',
  },
  battleship: {
    src: [Battleship1Image800w, Battleship2Image800w],
    srcSet: [
      `
        ${Battleship1Image400w} 540w,
        ${Battleship1Image800w} 768w,
      `,
      `
        ${Battleship2Image400w} 540w,
        ${Battleship2Image800w} 768w,
      `,
    ],
    alt: 'Battleship',
  },
  weatherApp: {
    src: [WeatherApp1Image800w, WeatherApp2Image800w],
    srcSet: [
      `
        ${WeatherApp1Image400w} 540w,
        ${WeatherApp1Image800w} 768w,
      `,
      `
        ${WeatherApp2Image400w} 540w,
        ${WeatherApp2Image800w} 768w,
      `,
    ],
    alt: 'Weather App',
  },
  portfolio: {
    src: [Portfolio1Image800w, Portfolio2Image800w],
    srcSet: [
      `
        ${Portfolio1Image400w} 540w,
        ${Portfolio1Image800w} 768w,
      `,
      `
        ${Portfolio2Image400w} 540w,
        ${Portfolio2Image800w} 768w,
      `,
    ],
    alt: 'Portfolio',
  },
};

export default PROJECTS_IMAGES;
