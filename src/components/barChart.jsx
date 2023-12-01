import { UseFetchAverageSession } from "../utils/Fetch";
import { useEffect, useState } from "react";
import getUrl from "../utils/urlParse";
import "../styles/bargraph.css";
import CustomizedAxisTick from "../utils/CustomBarChart";
import CustomTooltip from "../utils/CustomToolTipBar";
import { LineChart, XAxis, CartesianGrid, Tooltip, Line } from "recharts";
function BottomLine() {
  const id = getUrl();
  const [data, setData] = useState({});

  useEffect(() => {
    const call = async () => {
      let req = await UseFetchAverageSession(id);

      setData(req);
      return 0;
    };
    call();
  }, [id]);

  return (
    <div className="ItemList1">
      <LineChart
        width={300}
        height={263}
        data={data}
        margin={{ top: 5, right: 35, left: 5, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset={`${0}%`} stopColor="#FF5555" />
            <stop offset={`${0}%`} stopColor="#FF4444" />
            <stop offset={`${100}%`} stopColor="white" />
          </linearGradient>
        </defs>
        <CartesianGrid fill="#FF0000" stroke="0" vertical="true" />
        <text x="5%" y="20" style={{ fill: "#FFFFFF", opacity: 0.5 }}>
          Durée de sessions
        </text>
        <XAxis dataKey="day" tick={<CustomizedAxisTick />} />
        <Tooltip
          content={<CustomTooltip />}
          labelStyle={{
            color: "black",
          }}
        />

        <Line
          dot={false}
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#colorUv)"
          strokeWidth={3}
        ></Line>
      </LineChart>
    </div>
  );
}

export default BottomLine;
