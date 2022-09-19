import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MyPlusIcon = ( props: SvgProps ) => (
  <Svg width={ 62 } height={ 62 } { ...props }>
    <Path
      fill="#07a95b"
      d="M44 24c0 11.045-8.955 20-20 20S4 35.045 4 24 12.955 4 24 4s20 8.955 20 20z"
    />
    <Path fill="#fff" d="M21 14h6v20h-6V14z"/>
    <Path fill="#fff" d="M14 21h20v6H14v-6z"/>
  </Svg>
);

export default MyPlusIcon;