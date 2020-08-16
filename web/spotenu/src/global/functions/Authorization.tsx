

export const autorização = (history: any) => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/Login");
    }
  };