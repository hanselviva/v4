/* eslint-disable react/no-unknown-property */
import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g transform="translate(50 50)">
      <g transform="scale(0.7)">
        <g transform="translate(-50 -50)">
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="0.7575757575757576s"></animateTransform>
            <path fillOpacity="0.8" fill="#000000" d="M50 50L50 0A50 50 0 0 1 100 50Z"></path>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1.0101010101010102s"></animateTransform>
            <path
              fillOpacity="0.8"
              fill="#de6bde"
              d="M50 50L50 0A50 50 0 0 1 100 50Z"
              transform="rotate(90 50 50)"></path>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1.5151515151515151s"></animateTransform>
            <path
              fillOpacity="0.8"
              fill="#ccd6f6"
              d="M50 50L50 0A50 50 0 0 1 100 50Z"
              transform="rotate(180 50 50)"></path>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="3.0303030303030303s"></animateTransform>
            <path
              fillOpacity="0.8"
              fill="#ca5010"
              d="M50 50L50 0A50 50 0 0 1 100 50Z"
              transform="rotate(270 50 50)"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default IconLoader;
