import React from 'react'
import Svg, { SvgProps,Circle, Path } from "react-native-svg"
const GoBackIcon = (props: SvgProps) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#F8F9FB" />
    <Path
      fill="#1E222B"
      d="M22.25 15.557a.747.747 0 0 0-.528.22l-3.487 3.47a.751.751 0 0 0 0 1.062l3.487 3.472a.749.749 0 1 0 1.058-1.063l-2.953-2.94 2.953-2.94a.75.75 0 0 0-.53-1.28Z"
    />
  </Svg>
  )
}

export default GoBackIcon
