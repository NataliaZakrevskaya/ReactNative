import React from 'react';
import Svg, { Defs, Image, Path, Pattern, SvgProps, Use } from 'react-native-svg';

const MyPhoneSvg = ( props: SvgProps ) => (
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

export default MyPhoneSvg;