import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MyDoneSvg = ( props: SvgProps ) => (
  <Svg
    viewBox="0 0 48 48"
    width={ props.width }
    height={ props.height }
    { ...props }
  >
    <Path
      fill="#43A047"
      d="M40.6 12.1 17 35.7l-9.6-9.6L4.6 29 17 41.3l26.4-26.4z"
    />
  </Svg>
);

export default MyDoneSvg;