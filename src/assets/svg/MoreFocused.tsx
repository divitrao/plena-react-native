import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"
const MoreFocused = (props: SvgProps) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E222B"
      d="m28 0 6.7.814 6.312 2.393 5.555 3.835 4.477 5.052 3.137 5.977 1.615 6.554v6.75l-1.615 6.554-3.137 5.977-4.477 5.052-5.555 3.835-6.311 2.393L28 56l-6.7-.814-6.312-2.393-5.555-3.835-4.477-5.052-3.136-5.977-1.616-6.554v-6.75l1.616-6.554 3.136-5.977 4.477-5.052 5.555-3.835L21.299.814 28 0Z"
    />
    <Path
      fill="#fff"
      d="M28 35a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
    <Path
      fill="#fff"
      fillOpacity={0.2}
      d="M28 35a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
  </Svg>
  )
}

export default MoreFocused
