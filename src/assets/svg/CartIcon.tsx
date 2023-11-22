import React from 'react'
import Svg, { SvgProps, Path,Circle } from "react-native-svg"
const CartIcon = (props: SvgProps) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="None"
    stroke="#fff"
    strokeLinecap="square"
    strokeLinejoin="bevel"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 2 3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
  </Svg>
  )
}

export default CartIcon
