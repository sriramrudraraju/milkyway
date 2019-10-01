import React, { FC } from 'react';

import { Carousel } from '../carousel/carousel.component';
import { LazyRenderer } from '../../common/components/lazy-render/lazy-render.component';
import { HomeImage } from '../../common/components/home-image/home-image.component';
import homeImage1 from '../../common/images/home-image-1.jpg';
import homeImage2 from '../../common/images/home-image-2.jpg';
import homeImage3 from '../../common/images/home-image-3.jpg';
import homeImage4 from '../../common/images/home-image-4.jpg';
import homeImage5 from '../../common/images/home-image-5.jpg';
import homeImage6 from '../../common/images/home-image-6.jpg';

import { useStyles } from './home.styles';

const homeImages: { src: string; name: string }[] = [
  { name: 'One', src: homeImage1 },
  { name: 'Two', src: homeImage2 },
  { name: 'Three', src: homeImage3 },
  { name: 'Four', src: homeImage4 },
  { name: 'Five', src: homeImage5 },
  { name: 'Six', src: homeImage6 },
];

export const Home: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel />
      <div className={classes.images}>
        {homeImages.map((image) => (
          <LazyRenderer height={500} key={image.name}>
            <HomeImage name={image.name} src={image.src} />
          </LazyRenderer>
        ))}
      </div>
    </div>
  );
};
