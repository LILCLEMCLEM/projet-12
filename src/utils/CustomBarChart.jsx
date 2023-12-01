import React, { PureComponent } from "react";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={4}
          y={0}
          dx={-0}
          dy={16}
          textAnchor="end"
          fill="#FFFFFF"
          opacity={0.5}
        >
          {payload.value === 1
            ? "L"
            : payload.value === 2
            ? "M"
            : payload.value === 3
            ? "M"
            : payload.value === 4
            ? "J"
            : payload.value === 5
            ? "V"
            : payload.value === 6
            ? "S"
            : payload.value === 7
            ? "D"
            : null}
        </text>
      </g>
    );
  }
}

export default CustomizedAxisTick;
