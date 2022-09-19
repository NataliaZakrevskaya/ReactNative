import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MyPlusForMessageSvg = ( props: SvgProps ) => (
  <Svg
    width={ 24 }
    height={ 24 }
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    { ...props }
  >
    <Path d="M13 13v6h-2v-6H5v-2h6V5h2v6h6v2h-6Z" fill="#ADB5BD"/>
  </Svg>
);

export default MyPlusForMessageSvg;