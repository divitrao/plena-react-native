import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"
const DropArrow = (props: SvgProps) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={5}
    fill="none"
    {...props}
  >
    <Path
      stroke="#B2BBCE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 .757 3.471 3.486L7.942.757"
    />
  </Svg>
  )
}

export default DropArrow

const styles = StyleSheet.create({})