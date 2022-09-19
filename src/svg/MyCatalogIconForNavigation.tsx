import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MyCatalogIconForNavigation = ( props: SvgProps ) => (
  <Svg
    width={ 20 }
    height={ 16 }
    fill={props.color}
    { ...props }
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m.903 5.398-.012.008A2 2 0 0 0 0 7.07V15a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h14v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7.07a2 2 0 0 0-.89-1.664l-.013-.008c.365-.21.695-.417.76-.51.154-.221.225-.888 0-.888H18l-1.17-2.342A3 3 0 0 0 14.145 0H5.854a3 3 0 0 0-2.683 1.658L2 4H.144c-.226 0-.155.667 0 .889.064.092.394.299.759.51Zm3.199-3.34-1.71 3.207A.5.5 0 0 0 2.833 6h14.334a.5.5 0 0 0 .44-.735l-1.709-3.206A2 2 0 0 0 14.133 1H5.867a2 2 0 0 0-1.765 1.059ZM1 9.08V7.87a.5.5 0 0 1 .752-.431L5.09 9.386c.46.269.237.975-.294.93l-2.88-.24A1 1 0 0 1 1 9.08Zm18-1.21v1.21a1 1 0 0 1-.917.996l-2.88.24c-.531.045-.754-.661-.294-.93l3.34-1.947A.5.5 0 0 1 19 7.87Z"
      fill={props.color}
    />
  </Svg>
);

export default MyCatalogIconForNavigation;