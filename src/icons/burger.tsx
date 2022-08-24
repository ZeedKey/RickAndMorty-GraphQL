import * as React from "react"
import { SVGProps, memo } from "react"

const Burger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 8V6h18v2H3Zm0 5h18v-2H3v2Zm0 5h18v-2H3v2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
)

export const BurgerIcon = memo(Burger)
