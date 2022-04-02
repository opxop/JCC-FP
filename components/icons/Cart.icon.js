import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function CartIcon({color, size, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.49 6.664a2.073 2.073 0 0 0-1.581-.737H9.164a.758.758 0 0 0-.75.765c0 .423.336.765.75.765h10.745c.235 0 .38.131.447.209a.606.606 0 0 1 .137.481l-.948 6.693c-.076.525-.524.92-1.044.92H7.591a1.055 1.055 0 0 1-1.05-.984L5.578 3.07a.76.76 0 0 0-.62-.69l-2.08-.369a.752.752 0 0 0-.867.625.765.765 0 0 0 .61.884l1.51.267.915 11.118c.112 1.361 1.206 2.388 2.545 2.388H18.5c1.261 0 2.348-.96 2.527-2.232l.95-6.693a2.163 2.163 0 0 0-.489-1.703ZM5.907 20.455c0-.852.68-1.546 1.515-1.546.835 0 1.514.694 1.514 1.546 0 .852-.68 1.545-1.514 1.545-.835 0-1.515-.693-1.515-1.545Zm11.253 0c0-.852.679-1.546 1.514-1.546s1.515.694 1.515 1.546c0 .852-.68 1.545-1.515 1.545-.835 0-1.514-.693-1.514-1.545Zm.488-9.99a.758.758 0 0 1-.75.765h-2.773a.757.757 0 0 1-.75-.766c0-.422.335-.765.75-.765h2.773c.414 0 .75.343.75.765Z"
        fill={color}
        opacity={0.7}
      />
    </Svg>
  );
}
