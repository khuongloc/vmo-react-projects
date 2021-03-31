import quotes from "../apis/quotes";
import { FETCH_QUOTES } from "./types";

export const createFetchQuotes = () => async (dispatch) => {
  const responeQuotes = await quotes.get("");
  dispatch({
    type: FETCH_QUOTES,
    payload: responeQuotes.data.quotes,
  });
};
