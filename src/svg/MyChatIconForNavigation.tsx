import React from 'react';
import Svg, { SvgProps, Path } from "react-native-svg"

export const MyChatIconForNavigation = (props: SvgProps) => (
  <Svg
    width={22}
    height={22}
    fill={props.color}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 13.75v-8.5a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3v14.307l3.93-2.807h10.57a3 3 0 0 0 3-3Zm2-8.5v8.5a5 5 0 0 1-5 5H6.82l-3.408 2.434c-1.323.946-3.162 0-3.162-1.627V5.25a5 5 0 0 1 5-5h11.5a5 5 0 0 1 5 5Z"
      fill={props.color}
    />
  </Svg>
)