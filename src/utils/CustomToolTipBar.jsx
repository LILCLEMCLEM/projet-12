import React, { PureComponent } from "react";
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{` ${payload[0].value} min`}</p>
      </div>
    );
  }
};

export default CustomTooltip;
