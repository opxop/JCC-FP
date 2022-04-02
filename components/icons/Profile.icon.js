import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function ProfileIcon({ color, size, ...props }) {
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
        d="M8.058 7.354c0-2.16 1.768-3.917 3.942-3.917 2.174 0 3.942 1.757 3.942 3.917 0 2.159-1.768 3.916-3.942 3.916-2.174 0-3.942-1.757-3.942-3.916Zm-1.446 0c0 2.95 2.417 5.353 5.388 5.353 2.97 0 5.387-2.402 5.387-5.353C17.387 4.402 14.97 2 12 2 9.03 2 6.612 4.402 6.612 7.354Zm4.366 14.631c.335.01.676.015 1.022.015 3.434 0 8-.381 8-3.67 0-3.69-6.022-3.69-8-3.69-3.434 0-8 .38-8 3.67 0 .985.46 2.314 2.657 3.053.379.13.788-.075.916-.45a.716.716 0 0 0-.453-.909c-1.502-.506-1.675-1.209-1.675-1.694 0-1.483 2.206-2.235 6.555-2.235 4.35 0 6.555.76 6.555 2.255 0 1.482-2.206 2.233-6.555 2.233-.332 0-.66-.004-.981-.013-.386.003-.73.301-.742.697a.717.717 0 0 0 .7.738Z"
        fill={color}
        opacity={0.7}
      />
    </Svg>
  );
}
