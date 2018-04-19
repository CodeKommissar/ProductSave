import axios from "axios";
import { FETCH_USER, FETCH_PRODUCTS } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user")

    dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitProduct = (values, history) => async dispatch => {
    const res = await axios.post("/api/products", values);

    history.push("/products");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProducts = () => async dispatch => {
    const res = await axios.get("/api/products");

    dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const deleteProduct = (product_id) => async dispatch => {
    const res = await axios.delete("/api/products/" + product_id);

    dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const editProduct = (values, history) => async dispatch => {
    const res = await axios.put("/api/products/" + values._id, values);

    history.push("/products");
    dispatch({ type: FETCH_USER, payload: res.data });
};