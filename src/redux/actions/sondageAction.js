import axios from "axios";
import { SONDAGE_DETAILS_FAIL, SONDAGE_DETAILS_REQUEST, SONDAGE_DETAILS_SUCCESS } from "../../contants/sondageContants";


export const sondageAdd = (titre,option) =>
  async (dispatch) => {
    console.log(titre,option);
    try {
      dispatch({ type: SONDAGE_DETAILS_REQUEST });

      const token = localStorage.getItem('token');
      console.log(token);

      const config = { 
        headers: { 
            "content-Type": "application/json",
            'Authorization': `Bearer ${token}`
     } 
    };
      const { data } = await axios.post( "http://localhost:8000/api/sondage/create",
        { titre,option ,config},
        // config
      );
      dispatch({
        type: SONDAGE_DETAILS_SUCCESS,
        payload: data,
      });

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