import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MyWrenchIcon = ( props: SvgProps ) => (
  <Svg
    width={ 19 }
    height={ 18 }
    fill="none"
    { ...props }
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.59.374A5.566 5.566 0 0 0 13.573 0c-2.928 0-5.302 2.239-5.302 5 0 .795.196 1.546.546 2.213L.911 14.667a1.44 1.44 0 0 0 0 2.122 1.66 1.66 0 0 0 2.25 0l7.856-7.408c.758.395 1.63.619 2.556.619 2.929 0 5.303-2.239 5.303-5a4.74 4.74 0 0 0-.419-1.95c-.09.146-.2.282-.33.405l-2.121 2a2 2 0 0 1-2.744-2.91l2.12-2c.067-.062.136-.12.208-.17Z"
      fill="#07A95B"
    />
  </Svg>
);

export default MyWrenchIcon;