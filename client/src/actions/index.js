import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user")

    dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitProduct = (values, history) => async dispatch => {
    console.log("saving...");
    const res = await axios.post("/api/products", values);
    console.log("saved!");
    history.push("/products");
    dispatch({ type: FETCH_USER, payload: res.data });
};
