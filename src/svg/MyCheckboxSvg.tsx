import React from 'react';
import Svg, { Rect, SvgProps } from 'react-native-svg';

const MyCheckboxSvg = ( props: SvgProps ) => (
  <Svg
    width={ 20 }
    height={ 20 }
    fill="none"
    { ...props }
  >
    <Rect x={ 0.5 } y={ 0.5 } width={ 19 } height={ 19 } rx={ 3.5 } stroke="#474747"/>
    <Rect x={ 0.5 } y={ 0.5 } width={ 19 } height={ 19 } rx={ 3.5 } stroke="#474747"/>
    <Rect x={ 0.5 } y={ 0.5 } width={ 19 } height={ 19 } rx={ 3.5 } stroke="#474747"/>
  </Svg>
);

export default MyCheckboxSvg;