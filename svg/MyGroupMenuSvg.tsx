import React from 'react';
import Svg, { SvgProps, Circle } from "react-native-svg"

const MyGroupMenuSvg = (props: SvgProps) => (
  <Svg
    width={3}
    height={11}
    fill="none"
    {...props}
  >
    <Circle cx={1.5} cy={1.5} r={1.5} fill="#07A95B" />
    <Circle cx={1.5} cy={5.5} r={1.5} fill="#07A95B" />
    <Circle cx={1.5} cy={9.5} r={1.5} fill="#07A95B" />
  </Svg>
)

export default MyGroupMenuSvg