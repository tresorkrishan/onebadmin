import * as actionTypes from '../constants/categoryConstants';


export const getCategoryReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_CATEGORY_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_CATEGORY_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

