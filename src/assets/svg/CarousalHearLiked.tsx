import React from 'react'
import Svg, { SvgProps, Rect, Path, G } from "react-native-svg"
const CarousalHearLiked = (props: SvgProps) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    fill="none"
    {...props}
  >
    <Rect
      width={58}
      height={58}
      y={58}
      fill="#fff"
      rx={20}
      transform="rotate(-90 0 58)"
    />
    <Path
      fill="red"
      fillRule="evenodd"
      d="M19.872 28.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#3E4554"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.872 28.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      d="M19.872 28.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4Z"
      clipRule="evenodd"
    />
    <G
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path stroke="#3E4554" d="M33 23.7a2.781 2.781 0 0 1 1.917 2.422" />
      <Path
        stroke="#000"
        strokeOpacity={0.2}
        d="M33 23.7a2.781 2.781 0 0 1 1.917 2.422"
      />
    </G>
  </Svg>
  )
}

export default CarousalHearLiked
