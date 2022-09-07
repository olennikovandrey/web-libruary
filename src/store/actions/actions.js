import { RU, EN } from "./action-types";

export const setEnglish = payload => {
  return {
    type: EN,
    payload
  };
};

export const setRussian = payload => {
  return {
    type: RU,
    payload
  };
};
