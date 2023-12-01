import getUrl from "../utils/urlParse";
import { UseFetchUsers } from "../utils/Fetch";

import { useEffect, useState } from "react";

import "../styles/helloUser.css";
function HelloUser() {
  const id = getUrl();
  const [data, setData] = useState({});
  console.log(id);
  useEffect(() => {
    const call = async () => {
      let req = await UseFetchUsers(id);
      
      setData(req);
      return 0;
    };
    call();
  }, [id]);

  return (
    <div className="user_container">
      {data ? (
        <p className="HelloUser">
          Bonjour , <span className="name">{data.firstName}</span>
        </p>
      ) : (
        <p>NONAME</p>
      )}
      <p className="user_i">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default HelloUser;
