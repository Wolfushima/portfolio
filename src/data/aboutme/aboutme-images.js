import BirdImage1200w from '../../assets/aboutme/bird/bird-1200w.webp';
import BirdImage800w from '../../assets/aboutme/bird/bird-800w.webp';
import BirdImage400w from '../../assets/aboutme/bird/bird-400w.webp';

import DeerImage1200w from '../../assets/aboutme/deer/deer-1200w.webp';
import DeerImage800w from '../../assets/aboutme/deer/deer-800w.webp';
import DeerImage400w from '../../assets/aboutme/deer/deer-400w.webp';

import DolphinImage1200w from '../../assets/aboutme/dolphin/dolphin-1200w.webp';
import DolphinImage800w from '../../assets/aboutme/dolphin/dolphin-800w.webp';
import DolphinImage400w from '../../assets/aboutme/dolphin/dolphin-400w.webp';

import PolarImage1200w from '../../assets/aboutme/polar/polar-1200w.webp';
import PolarImage800w from '../../assets/aboutme/polar/polar-800w.webp';
import PolarImage400w from '../../assets/aboutme/polar/polar-400w.webp';

const ABOUTME_IMAGES = {
  BIRD: {
    src: BirdImage1200w,
    srcSet: `
      ${BirdImage400w} 540w,
      ${BirdImage800w} 768w,
      ${BirdImage1200w} 1023w,
    `,
    alt: 'Bird - Wolfushima Original Artwork',
  },
  DEER: {
    src: DeerImage1200w,
    srcSet: `
      ${DeerImage400w} 540w,
      ${DeerImage800w} 768w,
      ${DeerImage1200w} 1023w,
    `,
    alt: 'Deer - Wolfushima Original Artwork',
  },
  DOLPHIN: {
    src: DolphinImage1200w,
    srcSet: `
      ${DolphinImage400w} 540w,
      ${DolphinImage800w} 768w,
      ${DolphinImage1200w} 1023w,
    `,
    alt: 'Dolphin - Wolfushima Original Artwork',
  },
  POLAR: {
    src: PolarImage1200w,
    srcSet: `
      ${PolarImage400w} 540w,
      ${PolarImage800w} 768w,
      ${PolarImage1200w} 1023w,
    `,
    alt: 'Polar - Wolfushima Original Artwork',
  },
};

export default ABOUTME_IMAGES;
