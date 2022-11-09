import { fetchUser } from "../utils/fetchLocalStorageDatat";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
};
