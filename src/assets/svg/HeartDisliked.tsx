import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"
const HeartDisliked = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#323743"
      d="M6.557 12.02C4.672 10.31 3.15 8.93 2.091 7.635 1.04 6.35.5 5.212.5 4.001A3.463 3.463 0 0 1 4.001.5c1.115 0 2.192.521 2.894 1.345l.38.447.38-.447A3.857 3.857 0 0 1 10.55.5a3.463 3.463 0 0 1 3.501 3.501c0 1.211-.54 2.349-1.592 3.636-1.058 1.294-2.58 2.677-4.462 4.388h-.001l-.001.002-.718.648-.72-.655Z"
    />
  </Svg>
  )
}

export default HeartDisliked

