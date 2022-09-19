import React from 'react';
import Svg, { SvgProps, Path } from "react-native-svg"

const MyArrowRightSvg = (props: SvgProps) => (
  <Svg
    width={10}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      d="M9.537 7.53a.726.726 0 0 0 0-1.06L2.958.217c-.34-.288-.848-.288-1.153 0l-.78.738c-.305.289-.305.77 0 1.09l5.222 4.94-5.222 4.971c-.305.321-.305.802 0 1.09l.78.739c.305.288.814.288 1.153 0l6.579-6.255Z"
      fill="#07A95B"
    />
  </Svg>
)

export default MyArrowRightSvg;