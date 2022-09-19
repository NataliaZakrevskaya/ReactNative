import React from 'react';
import Svg, { SvgProps, Path } from "react-native-svg"

const MyNotificationSvg = (props: SvgProps) => (
  <Svg
    width={18}
    height={21}
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M9 15.915c5.307 0 7.763-.68 8-3.413 0-2.731-1.712-2.556-1.712-5.907C15.288 3.978 12.808 1 9 1 5.193 1 2.712 3.978 2.712 6.595 2.712 9.946 1 9.771 1 12.502c.238 2.743 2.693 3.413 8 3.413Z"
      stroke="#1E212C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.248 18.748c-1.284 1.426-3.287 1.442-4.583 0"
      stroke="#1E212C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  );

export default MyNotificationSvg;
