import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MyBackIcon = ( props: SvgProps ) => (
  <Svg
    width={ 14 }
    height={ 12 }
    fill="none"
    { ...props }
  >
    <Path
      d="M13.75 6a.667.667 0 0 1-.667.667H2.446l3.702 3.951a.644.644 0 0 1-.94.882L.396 6.378a.552.552 0 0 1 0-.748L5.209.5a.644.644 0 0 1 .94.881L2.445 5.333h10.637c.368 0 .667.299.667.667Z"
      fill="#474747"
    />
  </Svg>
);

export default MyBackIcon;