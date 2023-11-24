import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"
const HeartLiked = (props: SvgProps) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF8181"
      d="m7.275 13.35-1.055-.96C2.474 8.992 0 6.75 0 4 0 1.761 1.76 0 4.001 0c1.266 0 2.481.59 3.274 1.52A4.357 4.357 0 0 1 10.55 0c2.24 0 4.001 1.76 4.001 4.001 0 2.75-2.473 4.991-6.22 8.396l-1.055.953Z"
    />
  </Svg>
  )
}

export default HeartLiked
