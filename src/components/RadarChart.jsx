import { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import getUrl from "../utils/urlParse";
import { UseFetchPerformance } from "../utils/Fetch";
import "../styles/radarchart.css";
import customLegend from "../utils/CustomLabel";

function RadarC() {
  const id = getUrl();
  let [data, setData] = useState({});
  let [label, setLabel] = useState({});

  useEffect(() => {
    const call = async () => {
      let [req, label] = await UseFetchPerformance(id);

      setData(req);
      setLabel(label);
      return 0;
    };
    call();
  }, [id]);

  return (
    <div className="ItemList2">
      <RadarChart width={175} height={190} outerRadius="100%" data={data}>
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis dataKey="kind" tick={customLegend} />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}

export default RadarC;
