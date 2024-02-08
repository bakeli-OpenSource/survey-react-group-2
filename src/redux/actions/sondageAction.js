import axios from "axios";
import { GET_SONDAGES_FAIL, GET_SONDAGES_REQUEST, GET_SONDAGES_SUCCESS, SONDAGE_DETAILS_FAIL, SONDAGE_DETAILS_REQUEST, SONDAGE_DETAILS_SUCCESS } from "../../contants/sondageContants";


export const sondageAdd = (titre,option,token) =>
  async (dispatch) => {
    console.log(titre,option);
    try {
      dispatch({ type: SONDAGE_DETAILS_REQUEST });

      console.log(token);

      const config = { 
        headers: { 
            "content-Type": "application/json",
            'Authorization': `Bearer ${token}`
     } 
    };
      const { data } = await axios.post( "https://api-survey-2.fewnu.app/api/sondage/create",
        { titre,option},
        config
      );
      dispatch({
        type: SONDAGE_DETAILS_SUCCESS,
        payload: data,
      });

      dispatch(getSondages(token));

      localStorage.setItem("sondageInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error);
      dispatch({
        type: SONDAGE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  //get

  export const getSondages = (token) => async (dispatch) => {
    try {
      dispatch({ type: GET_SONDAGES_REQUEST });
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.get('https://api-survey-2.fewnu.app/api/sondage/liste', config);
  
      dispatch({
        type: GET_SONDAGES_SUCCESS,
        payload: data.sondage,
      });
      console.log("sondage",data.sondage);

      localStorage.setItem("sondageInfo", JSON.stringify(data));
  
    } catch (error) {
      dispatch({
        type: GET_SONDAGES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

