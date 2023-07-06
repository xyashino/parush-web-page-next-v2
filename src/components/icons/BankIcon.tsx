import { SVGProps } from "react";

export default function BankIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="currentColor"
        d="m3.5 13.56l1.5-.88V16h26v-3.29l1.48.85a1 1 0 0 0 1-1.73L18 2.92L2.5 11.83a1 1 0 1 0 1 1.73Zm14.35-6.45a.8.8 0 0 1 .8 0L25.37 11h-3.22l-3.9-2.24l-3.9 2.24h-3.21Z"
        className="clr-i-solid clr-i-solid-path-1"
      ></path>
      <path
        fill="currentColor"
        d="M32.85 27H32v-.85A1.15 1.15 0 0 0 30.85 25H28v-7.37h-4V25h-4v-7.37h-4V25h-4v-7.37H8V25H5.15A1.15 1.15 0 0 0 4 26.15V27h-.85A1.15 1.15 0 0 0 2 28.15V31h32v-2.85A1.15 1.15 0 0 0 32.85 27Z"
        className="clr-i-solid clr-i-solid-path-2"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}
