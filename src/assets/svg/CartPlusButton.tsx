import React from 'react'
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const CartPlusButton = (props: SvgProps) => {
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
      stroke="#130F26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 16.327v7.327M23.667 19.99h-7.334"
    />
  </Svg>
  )
}

export default CartPlusButton