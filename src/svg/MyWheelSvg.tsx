import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MyWheelSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10ZM8.763 17.905C8.103 16.288 6.22 11.907 5 11.5c-.854-.285-2.032-1.245-2.888-1.158.57 3.378 3.258 7.036 6.65 7.563ZM2.329 7.72a8.004 8.004 0 0 1 15.342 0A42.78 42.78 0 0 0 10 7c-3.258 0-6.092.425-7.67.72Zm15.559 2.622c-.856-.087-2.034.873-2.888 1.158-1.22.407-3.104 4.788-3.763 6.405 3.393-.527 6.08-4.185 6.651-7.563Z"
      fill="#474747"
    />
  </Svg>
)

export default MyWheelSvg;