//** context creation */
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducers";
const AppContext = React.createContext();
let API = "https://hn.algolia.com/api/v1/search?";

//** rovider creation */
//** wrap the whole application of the react */
//** now we define initialstate */

const initialState = {
  isLoading: true,
  query: "html",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //** define fatching method  */

  const fetchAPI = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        //** payload is the extra info which has to be passed in the reducer for ex- here we pass the hits which contain the response data "hits" */
        //** the hits which we define under the payload is not the actual response hits actually it is a variable which has been passed to reducer where action occure */
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //to remove post

  const removePost = (post_id) => {
    dispatch({ type: "REMOVE_POST", payload: post_id });
  };

  // to search
  const searchPost = (search_query) => {
    dispatch({ type: "SEARCH_POST", payload: search_query });
  };

  //pagination

  const getNextPage = () => {
    dispatch({ type: "GET_NEXT_PAGE" });
  };

  const getPrevPage = () => {
    dispatch({ type: "GET_PREV_PAGE" });
  };

  useEffect(() => {
    fetchAPI(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);
  return (
    //** now we can pass the state from reducer which has been updated */
    //** now we can pass this api state data in anywhere by using global context(custome hook) */
    //**'passig removePost fuction */
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

//** create custome hook to short our code */
//** custome hooks are the hooks where we pass a hook inside the function */

const useGlobalContext = () => {
  return useContext(AppContext);
};

//** export context and provider */
export { AppContext, AppProvider, useGlobalContext };
