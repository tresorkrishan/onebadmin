import * as actionTypes from "../constants/categoryConstants";
import axios from "axios";
import config from "../../config";

export const getCategories = () => async (dispatch) => {
  try {
    // console.log("Hiiiiii");
    const { data } = await axios.get(
      `${config.BASE_URL}api/category/allcategories`
    );
    console.log("objectsssssssss", data);
    dispatch({ type: actionTypes.GET_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_CATEGORY_FAIL, payload: error.response });
  }
};
