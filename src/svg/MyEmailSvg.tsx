import React from 'react';
import Svg, { Defs, Image, Path, Pattern, SvgProps, Use } from 'react-native-svg';

const MyEmailSvg = ( props: SvgProps ) => (
  <Svg
    width={ 20 }
    height={ 20 }
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

export default MyEmailSvg;