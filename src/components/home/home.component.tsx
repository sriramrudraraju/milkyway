import React, { FC } from 'react';

import { Carousel } from '../carousel/carousel.component';
import { LazyRenderer } from '../../common/components/lazy-render/lazy-render.component';
import { HomeImage } from '../../common/components/home-image/home-image.component';

export const Home: FC = () => {
  return (
    <div>
      <Carousel />
      <LazyRenderer height={300}>
        <HomeImage />
      </LazyRenderer>
      <LazyRenderer height={300}>
        <HomeImage />
      </LazyRenderer>
      <LazyRenderer height={300}>
        <HomeImage />
      </LazyRenderer>
      <LazyRenderer height={300}>
        <HomeImage />
      </LazyRenderer>
      <LazyRenderer height={300}>
        <HomeImage />
      </LazyRenderer>
    </div>
  )
};