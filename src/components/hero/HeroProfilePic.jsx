import React from 'react';
import ProfilePicDrawingImage800w from '../../assets/hero/profile-pic-drawing/profile-pic-drawing-800w.webp';
import ProfilePicDrawingImage400w from '../../assets/hero/profile-pic-drawing/profile-pic-drawing-400w.webp';

const HeroProfilePic = () => (
  <div className="hero__profile-pic">
    <img
      src={ProfilePicDrawingImage800w}
      srcSet={`${ProfilePicDrawingImage400w} 540w,
      ${ProfilePicDrawingImage800w} 768w`}
      alt="Profile Pic - Original Artwork by Wolfushima"
    />
  </div>
);

export default HeroProfilePic;
