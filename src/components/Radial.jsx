import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { UseFetchToday } from "../utils/Fetch";
import getUrl from "../utils/urlParse";
import { useState, useEffect } from "react";
import "../styles/radial.css";
import { DataToJson, ScoreParser } from "../utils/Dataset";

function RadialC() {
  const id = getUrl();
  let [data, setData] = useState({});

  useEffect(() => {
    const call = async () => {
      let req = await UseFetchToday(id);
      setData(req);
      return 0;
    };
    call();
  }, [id]);
  console.log(data);
  let d = DataToJson(data);

  return (
    <div className="ItemList3">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx={80}
          cy={90}
          width={330}
          height={250}
          innerRadius={85}
          outerRadius={100}
          startAngle={200}
          endAngle={-180}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          data={d.data}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            name="data"
            dataKey={"score"}
            stroke-linejoin="round"
            fill="#E60000"
            cornerRadius={100}
          />
          <text textAnchor="middle" fontSize={15} fontWeight={600}>
            <tspan y={"-10px"}>Score</tspan>
            <tspan x="35%" y="30%" fontSize={22}>
              {ScoreParser(data)}%
            </tspan>
            <tspan x="35%" y="38.5%" fill={"#74798c"}>
              de votre{" "}
            </tspan>
            <tspan x="34%" y="47%" fill={"#74798c"}>
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadialC;
