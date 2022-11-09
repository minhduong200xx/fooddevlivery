import { json } from "react-router-dom";

export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "underfined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear;
  return userInfo;
};
