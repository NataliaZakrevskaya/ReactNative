import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const MyHomeIconForNavigation = ( props: SvgProps ) => (
  <Svg
    width={ 18 }
    height={ 17 }
    fill={ props.color }
    { ...props }
  >
    <Path
      d="M5 1a1 1 0 1 0-2 0v3.587L.37 6.724a1 1 0 0 0 1.26 1.552L9 2.288l7.37 5.988a1 1 0 1 0 1.26-1.552l-8-6.5a1 1 0 0 0-1.26 0L5 2.962V1Z"
      fill={ props.color }
    />
    <Path
      d="M9 3.5 2.382 8.7A1 1 0 0 0 2 9.486V16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.486a1 1 0 0 0-.382-.786L9 3.5Z"
      fill={ props.color }
    />
  </Svg>
);