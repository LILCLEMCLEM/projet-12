import mockData from "../data/data";

let isMocked = true;
export async function UseFetchUsers(id) {
  if (!isMocked) {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        dataType: "json",
      });
      const data = await response.json();
      return data.data.userInfos;
    } catch {
      return undefined;
    }
  } else {
    let result = mockData.USER_MAIN_DATA.filter((e) => {
      return e.id == id;
    });
    return result[0].userInfos;
  }
}

export async function UseFetchActivity(id) {
  if (!isMocked) {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`, {
      dataType: "json",
    });
    const data = await response.json();
    return data.data.sessions;
  } else {
    let result = mockData.USER_ACTIVITY.filter((e) => {
      return e.userId == id;
    });
    return result[0] !== undefined ? result[0].sessions : "";
  }
}

export async function UseFetchAverageSession(id) {
  if (!isMocked) {
    const response = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`,
      {
        dataType: "json",
      }
    );
    const data = await response.json();
    return data.data.sessions;
  } else {
    let result = mockData.USER_AVERAGE_SESSIONS.filter((e) => {
      return e.userId == id;
    });
    return result[0] !== undefined ? result[0].sessions : "";
  }
}

export async function UseFetchPerformance(id) {
  if (!isMocked) {
    const response = await fetch(
      `http://localhost:3000/user/${id}/performance`,
      {
        dataType: "json",
      }
    );
    const data = await response.json();
    return [data.data.data, data.data.kind];
  } else {
    let result = mockData.USER_PERFORMANCE.filter((e) => {
      return e.userId == id;
    });
    return result[0] !== undefined ? [result[0].data, result[0].kinds] : "";
  }
}

export async function UseFetchToday(id) {
  if (!isMocked) {
    const response = await fetch(`http://localhost:3000/user/${id}`, {
      dataType: "json",
    });
    const data = await response.json();
    return data.data.score !== undefined
      ? data.data.score
      : data.data.todayScore;
  } else {
    let result = mockData.USER_MAIN_DATA.filter((e) => {
      return e.id == id;
    });
    return result[0] === undefined
      ? ""
      : result[0].todayScore === undefined
      ? result[0].score
      : result[0].todayScore;
  }
}

export async function UseFetchKeyData(id) {
  if (!isMocked) {
    const response = await fetch(`http://localhost:3000/user/${id}`, {
      dataType: "json",
    });
    const data = await response.json();
    return data.data.keyData;
  } else {
    let result = mockData.USER_MAIN_DATA.filter((e) => {
      return e.id == id;
    });
    return result[0] !== undefined ? result[0].keyData : "";
  }
}
