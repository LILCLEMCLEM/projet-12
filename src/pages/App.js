import BarChartUI from "../components/BarGraph";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import HelloUser from "../components/UserInfo";
import "../styles/App.css";
import BottomLine from "../components/barChart";
import RadarC from "../components/RadarChart";
import Keydata from "../components/Keydata";
import getUrl from "../utils/urlParse";
import { useState, useEffect } from "react";
import { UseFetchUsers } from "../utils/Fetch";
import RadialC from "../components/Radial";
import { Navigate, useNavigate } from "react-router-dom";

function App() {
  const id = getUrl();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  console.log(id);
  const goToHomePage = () => navigate("/Error");

  useEffect(() => {
    const call = async () => {
      let req = await UseFetchUsers(id);

      setData(req);
      return 0;
    };
    call();
  }, [id]);
  if (id === "") {
    goToHomePage();
    return 0;
  } else if (data === undefined) {
    goToHomePage();
    return 0;
  } else {
    return (
      <div className="App">
        {data === undefined ? (
          <Navigate to={"/Error"} />
        ) : id === "" ? (
          <Navigate to={"/Error"} />
        ) : (
          <div className="Container">
            <div className="left_pannel">
              <Header />
              <SideBar />
              <HelloUser />
              <div className="vertical">
                <BarChartUI />
                <div className="vertical_foot">
                  <BottomLine />
                  <RadarC />
                  <RadialC />
                </div>
              </div>
            </div>
            <Keydata type="calorieCount" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
