import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const MyProfileIconForNavigation = ( props: SvgProps ) => (
  <Svg
    width={ 16 }
    height={ 18 }
    fill={ props.color }
    { ...props }
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.59 0-6.6 3.44-7.44 5.808C.158 16.942 1.063 18 2.266 18h11.469c1.203 0 2.108-1.058 1.706-2.192C14.6 13.44 12.59 10 8 10Z"
      fill={ props.color }
    />
  </Svg>
);