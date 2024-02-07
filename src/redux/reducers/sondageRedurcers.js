import { SONDAGE_DETAILS_FAIL, SONDAGE_DETAILS_REQUEST, SONDAGE_DETAILS_SUCCESS } from "../../contants/sondageContants";

export const sondageAddReducer = (state = {}, action) => {
    switch (action.type) {
      case SONDAGE_DETAILS_REQUEST:
        return { loading: true };
      case SONDAGE_DETAILS_SUCCESS:
        return { loading: false, Info: action.payload };
      case SONDAGE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };