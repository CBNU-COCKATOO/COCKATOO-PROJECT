const URL =" http://43.200.68.165:3000";

export const postSignup = async (data) => {
    return fetch(`${URL}/user`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json());
  }
