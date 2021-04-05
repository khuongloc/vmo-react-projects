import randomUser from "../apis/randomUser";
import { FETCH_USERS, CLEAR_USERS } from "../actions/types";

export const createFetchUsers = () => async (dispatch) => {
  const responeUsers = await randomUser.get("", {
    params: {
      results: 10,
    },
  });
  dispatch({
    type: FETCH_USERS,
    payload: responeUsers.data.results,
  });
};

export const createClearUsers = () => {
  return {
    type: CLEAR_USERS,
  };
};
