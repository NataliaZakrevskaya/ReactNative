import React from 'react';
import Svg, { SvgProps, Path } from "react-native-svg"

const MyBaseSvg = (props: SvgProps) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path d="M1 1h23v23H1V1Z" fill="#fff" stroke="#474747" strokeWidth={2} />
  </Svg>
)

export default MyBaseSvg;