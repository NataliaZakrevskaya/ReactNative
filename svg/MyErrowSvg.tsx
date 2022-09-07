import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MyArrowSvg = ( props: SvgProps ) => (
  <Svg
    width={ 12 }
    height={ 8 }
    fill="none"
    { ...props }
  >
    <Path
      d="M5.123 7.187c.228.228.609.228.837 0l4.952-4.926c.228-.254.228-.635 0-.864l-.584-.584c-.229-.228-.61-.228-.864 0l-3.91 3.91L1.62.814C1.365.585.984.585.755.813l-.584.584c-.228.229-.228.61 0 .864l4.952 4.926Z"
      fill="#07A95B"
    />
  </Svg>
);

export default MyArrowSvg;