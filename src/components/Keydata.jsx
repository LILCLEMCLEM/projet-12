import "../styles/keydata.css";
import { UseFetchKeyData } from "../utils/Fetch";
import getUrl from "../utils/urlParse";
import Databoxes from "./databoxe";
import { useState, useEffect } from "react";

function Keydata() {
  const id = getUrl();
  let [data, setData] = useState({});

  useEffect(() => {
    const call = async () => {
      let req = await UseFetchKeyData(id);
      setData(req);
      return 0;
    };
    call();
  }, [id]);

  return (
    <div className="rightPannel">
      <div className="pannel_item">
        <Databoxes value={data.calorieCount} name={"energies"} type={0} />
        <Databoxes value={data.proteinCount} name={"proteines"} type={0} />
        <Databoxes value={data.carbohydrateCount} name={"glucides"} type={0} />
        <Databoxes value={data.lipidCount} name={"cheeseburger"} type={0} />
      </div>
    </div>
  );
}

export default Keydata;
