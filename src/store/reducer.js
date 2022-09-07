import { RU, EN } from "./actions/action-types";

export const initState = {
  lang: "english"
};

const reducer = (state = initState, action) => {
  switch (action.type) {
  case EN: {
    localStorage.setItem("lang", "english");
    return {
      lang: "english"
    };
  }

  case RU: {
    localStorage.setItem("lang", "russian");
    return {
      leng: "russian"
    };
  }

  default: {
    return {
      ...state
    };
  }
  }
};

export default reducer;
