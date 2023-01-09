const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((elm) => elm.objectID !== action.payload),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };
    case "GET_NEXT_PAGE":
      let pageNums = state.page + 1;
      if (pageNums >= state.nbPages) {
        pageNums = 0;
      } else {
        pageNums = pageNums;
      }
      return {
        ...state,
        page: pageNums,
      };
    case "GET_PREV_PAGE":
      let pageNum = state.page;
      if (pageNum <= 0) {
        pageNum = 0;
      } else {
        pageNum = pageNum - 1;
      }
      return {
        ...state,
        page: pageNum,
      };
  }

  return state;
};
export default reducer;
