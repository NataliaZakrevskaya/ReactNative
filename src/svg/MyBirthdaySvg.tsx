import React from 'react';
import Svg, { Defs, Image, Path, Pattern, SvgProps, Use } from 'react-native-svg';

const MyBirthdaySvg = ( props: SvgProps ) => (
  <Svg
    width={ 20 }
    height={ 20 }
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    { ...props }
  >
    <Path fill="url(#a)" d="M0 0h20v20H0z"/>
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={ 1 }
        height={ 1 }
      >
        <Use xlinkHref="#b" transform="scale(.01111)"/>
      </Pattern>
      <Image
        id="b"
        width={ 90 }
        height={ 90 }
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFD0lEQVR4nO2cu28cVRTGv3Nnd3Y2xAXYhshIUUJBFGIrDVIaCgtoMKFIIm/2YTsCBUwaxD9ABwXpQkFMEI2dfXgtJRTBlhBSEEp6AyGhAkEBIQ8iJQ7emc3OoUCR/Jj13hmPh53x+ZVzz/n2zrdX987jzgEEQRC6C3N2LGfWiqPbUXMttFXCPRcmep2mewMAzLTa/+Do9N3toumF2gpRALCbrdMA9wPc7zjux9tJ04stGdHZeuEll9V3K/SZXHq5UTj/bdI12xH+iL48nHJZfYrVfyKx4k9weTiVaM0NCN1o6/bACQBDHk1D1q1nJ5KsuRHhTh31UTPD5s8A9raJ+N3u+ft5jCzYidPsQKgjOuOak2jfeQDYnVnqfTuJmp0Ib0TXR7MZNn8BsKtD5E2bnOeQm1tOjKYGoY1o000fRefOA8AuE+aRJGnqEJrRRKqoHctUSpKmDiHO0fxi+LFx0exMmIvhDh+xVsI0OxLe1AFc141lzdi4aOoQmtEMLuvGEpFWbFw0dQjNaLvn3mcAvtcIXbRhn0uSpg7hzdEjC7ZK4TA2PolFRcZh5OacRGlqEP7Tu/nXMpn7T73DhCIBgwDAwI9EVLFhnwvU+bhoCoIgCIIg/O+EdnmXmS2xn3j7eLnjb8dFU4ct224grEaMjggxOiLE6IgQoyNCjI4IMToixOiIEKMjQoyOCDE6IjZ/H18uPmkZ6hgTfx5Cf7oOIj7ZaOICSpV7m9IJmthTKfQ5hvoA4EmAMpvpRPfDNhhTpssfPihW7wRRCGS0VR0bZsU1AM8EyY8rDNwlRtHOl7/2m+t7jrZqY2+y4m+wzUwGAAJ6QZi3ZksnAuTqk5ktvAGoiwAMvz+UMB6BccTOly/pJmgbvbM+2t9k8xqApwN1LXncSbXcwYfF6l86wdpfHzmueZqorcnLYD7rgmpNR13HxMxDXd2uZHr8ibTVOqBY5QE+Be9dpX2PlPERgJM6klojekc1P9BSxq8AzHWNjN9YYcTJlUPbedlNmLXxQSL3KwC717eybaTU3n+Onf+zk47WYthS6ji8TAaWk2wyADj5mWvM6nUAjfWtlGm1kNPR0bzqoFc8DzOfTbLJj3HyM9cATHm38qs6GrqXdwe8DrqgmmZ+7HGJq94NeEEnX9doz0Ww6ajEj+bHNNH0PlfSu5/QNdr1PGo1tqwMRdfhmO288vZmDbpG3/Q6mHbN/Zr5sSdrKO9zZW9v1qK7GN7wTCYq6OX/9xCqp1Loi2u8Sy3vcyV4erMWPaPJXfBu4FNmpeC5UK7Equb3OIa64hjqilXN74lbvFkvDYFosk1zG29Wo2V0CuZFAF7fRFtkqHmzNj7YLjdbHT/EyrgKYB+AfayMq9nq+KG4xJv10hAxLsH77nA5Rekv2+WuRHsxy8yWzgB4r01zA8CUclVt2Wj8hIbF2TQfdBVPAHgLQHpNfBPAF4rc6eVG6gcA6Kp4q0FZ1xx0wXkQ3m37vJ35jJ2vvN/Gk1X4fai0CGBANyfh/GG23IO6LwK0n0cv5eZuE3gseL+SBYHH/Lxt8X0d7Hd/cVLxu29a3oJHhBgdEWJ0RIjRESFGR4QYHRFidESI0REhRkeEGB0RYnREiNEREcTopdB7ET/u+03wbbSfAn1JJUjhQd9G+ynQl1SCFB70bbSPAn1JJVDhQf9ztF6BvqQSuPBg8J1G6wv07Qys1d0sSeFBQRAEQRAEQRAEQRCE1fwLT9xyJXwM4MsAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);

export default MyBirthdaySvg;