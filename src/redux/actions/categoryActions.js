import * as actionTypes from "../constants/categoryConstants";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    // console.log("Hiiiiii");
    const { data } = await axios.get(
      `http://localhost:3010/api/category/allcategories`
    );
    console.log("objectsssssssss", data);
    dispatch({ type: actionTypes.GET_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_CATEGORY_FAIL, payload: error.response });
  }
};
