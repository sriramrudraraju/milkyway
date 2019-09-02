import React from 'react';
import 'intersection-observer'; //polyfill
import { useInView } from 'react-intersection-observer';

interface LazyRendererProps {
  children: JSX.Element | React.Component;
  height: number;
}

export const LazyRenderer = ({ children, height }: LazyRendererProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {inView ? children : null}
    </div>
  );
};
