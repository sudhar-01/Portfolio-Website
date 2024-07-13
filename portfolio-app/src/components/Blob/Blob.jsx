import React from "react";
import "./styles.css";

export default function Blob() {
  return (
    <svg
      width="2227"
      height="1485"
      viewBox="0 0 2227 1485"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="blob-style"
    >
      <g filter="url(#filter0_b_30_2)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1069.64 3.87428C1315.24 11.7192 1552.65 47.9353 1747.74 159.878C1975.91 290.805 2220.37 452.22 2225.89 667.354C2231.47 884.361 2149.61 1130.72 1906 1248.5C1700.52 1347.84 1245.7 1261.56 1002 1277.5C710.37 1296.58 447.369 1578.34 208.303 1451.9C-37.1423 1322.08 -6.52559 891.821 12.6937 667.354C30.5152 459.211 117.545 248.665 331.071 114.628C531.051 -10.9069 808.857 -4.45534 1069.64 3.87428Z"
          fill="black"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_30_2"
          x="-9.91992"
          y="-10"
          width="2246.08"
          height="1504.41"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_30_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_30_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
