import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MyFiltersIconSvg = ( props: SvgProps ) => (
  <Svg
    width={ 24 }
    height={ 24 }
    fill="none"
    { ...props }
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 9.5a1 1 0 0 1 1 1v11.25a1 1 0 1 1-2 0V10.5a1 1 0 0 1 1-1ZM6.5 1.25a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1Z"
      fill="#474747"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 7.25a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3V8.5a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7.25Zm3-1a1 1 0 0 0-1 1V8.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7.25a1 1 0 0 0-1-1H4ZM17.5 17.75a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1ZM17.5 1.25a1 1 0 0 1 1 1V13.5a1 1 0 1 1-2 0V2.25a1 1 0 0 1 1-1Z"
      fill="#474747"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v1.25a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3V15.5Zm3-1a1 1 0 0 0-1 1v1.25a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V15.5a1 1 0 0 0-1-1h-5Z"
      fill="#474747"
    />
  </Svg>
);

export default MyFiltersIconSvg;