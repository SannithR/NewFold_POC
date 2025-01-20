import React from "react";

export const Arrows = ({ className }) => {
  return (
    <svg
      className={`arrows ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 144 56"
      width="144"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_b_471_10557)">
        <rect
          className="rect"
          height="55"
          rx="27.5"
          stroke="#667085"
          width="55"
          x="0.5"
          y="0.5"
        />

        <path
          className="path"
          d="M35 28H21M21 28L28 35M21 28L28 21"
          stroke="#475467"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>

      <g className="g" filter="url(#filter1_b_471_10557)">
        <rect
          className="rect"
          height="55"
          rx="27.5"
          stroke="#667085"
          width="55"
          x="88.5"
          y="0.5"
        />

        <path
          className="path"
          d="M109 28H123M123 28L116 21M123 28L116 35"
          stroke="#475467"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="72"
          id="filter0_b_471_10557"
          width="72"
          x="-8"
          y="-8"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            in="BackgroundImageFix"
            stdDeviation="4"
          />

          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_471_10557"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_471_10557"
            mode="normal"
            result="shape"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="72"
          id="filter1_b_471_10557"
          width="72"
          x="80"
          y="-8"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            in="BackgroundImageFix"
            stdDeviation="4"
          />

          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_471_10557"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_471_10557"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
