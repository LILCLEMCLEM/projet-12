function customLegend({ payload, x, y, textAnchor, stroke, radius }) {
  return (
    <g className="recharts-layer recharts-polar-angle-axis-tick">
      <text
        radius={radius}
        stroke={stroke}
        x={x}
        y={y}
        className="recharts-text recharts-polar-angle-axis-tick-value"
        textAnchor={textAnchor}
      >
        <tspan fontSize={12} fill="#FFFFFF" x={x} dy="0em">
          {payload.value === 1
            ? "cardio"
            : payload.value === 2
            ? "energy"
            : payload.value === 3
            ? "endurence"
            : payload.value === 4
            ? "strength"
            : payload.value === 5
            ? "speed"
            : payload.value === 6
            ? "intensity"
            : null}
        </tspan>
      </text>
    </g>
  );
}

export default customLegend;
