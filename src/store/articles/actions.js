import {API_URL} from "../../utils/constants";

export const GET_ARTICLES = "ARTICLES::GET_ARTICLES";
export const GET_ARTICLES_REQUEST = "ARTICLES::GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";

export const getArticles = () => async (dispatch)  => {
    dispatch(getArticlesRequest());
    try {
        const res = await fetch(API_URL);
        const response = await res.json();
        dispatch(getArticlesSuccess(response));
    } catch(err) {
        dispatch(getArticlesFailure(err));
    }
};

export const getArticlesRequest = () => ({
    type: GET_ARTICLES_REQUEST
});
export const getArticlesSuccess = (data) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: data
});
export const getArticlesFailure = (err) => ({
    type: GET_ARTICLES_FAILURE,
    payload:err
});