import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/barchart.css";
import { useState, useEffect } from "react";
import { UseFetchActivity } from "../utils/Fetch";
import getUrl from "../utils/urlParse";
function BarChartUI() {
  const id = getUrl();
  const [data, setData] = useState({});

  useEffect(() => {
    const call = async () => {
      let req = await UseFetchActivity(id);

      setData(req);
      return 0;
    };
    call();
  }, [id]);

  return (
    <div className="ch_container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={"100%"}
          height={"100%"}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 30,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical="false" x={20} />
          <XAxis tickMargin={20} dataKey="" />
          <YAxis
            domain={[0, "auto"]}
            orientation="right"
            axisLine="false"
          ></YAxis>
          <Tooltip />
          <text>Activité quotidiennes</text>
          <Legend
            verticalAlign="top"
            height={36}
            align="end"
            iconType="circle"
          />
          <Bar
            maxBarSize={10}
            name="Poids (kg)"
            dataKey="kilogram"
            radius={[10, 10, 0, 0]}
            fill="#282D30"
            barSize={7}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartUI;
