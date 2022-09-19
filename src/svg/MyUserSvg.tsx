import React from 'react';
import Svg, { Defs, Image, Path, Pattern, SvgProps, Use } from 'react-native-svg';

const MyUserSvg = ( props: SvgProps ) => (
  <Svg
    width={ 20 }
    height={ 20 }
    fill="#07A95B"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    { ...props }
  >
    <Path fill="url(#a)" d="M0 0h20v20H0z"/>
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={ 1 }
        height={ 1 }
      >
        <Use xlinkHref="#b" transform="scale(.01111)"/>
      </Pattern>
      <Image
        id="b"
        width={ 90 }
        height={ 90 }
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default MyUserSvg;