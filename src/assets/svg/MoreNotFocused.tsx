import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"

const MoreNotFocused = (props: SvgProps) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={4}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#3E4554"
      d="M2 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
    <Path
      fill="#000"
      fillOpacity={0.2}
      d="M2 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
  </Svg>
  )
}

export default MoreNotFocused