import { GET_SONDAGES_FAIL, GET_SONDAGES_REQUEST, GET_SONDAGES_SUCCESS, SONDAGE_DETAILS_FAIL, SONDAGE_DETAILS_REQUEST, SONDAGE_DETAILS_SUCCESS } from "../../contants/sondageContants";

export const sondageAddReducer = (state = {}, action) => {
    switch (action.type) {
      case SONDAGE_DETAILS_REQUEST:
        return { loading: true };
      case SONDAGE_DETAILS_SUCCESS:
        return { loading: false, sondageInfo: action.payload };
      case SONDAGE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  //GET
  export const sondagesListReducer = (state = { sondageInfo: [] }, action) => {
    switch (action.type) {
      case GET_SONDAGES_REQUEST:
        return { ...state,loading: true, sondageInfo: [] };
      case GET_SONDAGES_SUCCESS:
        return { loading: false, sondageInfo: action.payload };
      case GET_SONDAGES_FAIL:
        return { loading: false, error: action.payload, sondageInfo: [] };
      default:
        return state;
    }
  };