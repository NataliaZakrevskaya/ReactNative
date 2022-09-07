import React from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg';

const MyEllipseSvg = ( props: SvgProps ) => (
  <Svg
    width={ 7 }
    height={ 7 }
    fill="none"
    { ...props }
  >
    <Circle cx={ 3.5 } cy={ 3.5 } r={ 3.5 } fill="#07A95B"/>
  </Svg>
);

export default MyEllipseSvg;