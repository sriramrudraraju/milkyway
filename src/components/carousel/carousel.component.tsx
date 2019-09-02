import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner from '../../common/images/image.png';

import { useStyles } from './carousel.styles';

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Carousel: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider {...settings}>
        <div>
          <img src={banner} alt="fb" />
        </div>
        <div>
          <img src={banner} alt="fb" />
        </div>
        <div>
          <img src={banner} alt="fb" />
        </div>
        <div>
          <img src={banner} alt="fb" />
        </div>
      </Slider>
    </div>
  );
};
