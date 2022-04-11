import axios from "axios";
import { IProduct } from "../../model/IProduct";
import { AppDispatch } from "../store";
import { productSlice } from "./ProductSlice";

export const fetchProduct = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.fetchProductisLoading(true))
        const response = await axios.get<IProduct[]>("http://localhost:3001/products")
        dispatch(productSlice.actions.fetchProductSucces(response.data))
    } catch (error) {
        dispatch(productSlice.actions.fetchProductError("Ошибка при получении данных"))
    }
}
export const fetchProductId = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.fetchProductIdisLoading(true))
        const response = await axios.get<IProduct>(`http://localhost:3001/products/${id}`)
        dispatch(productSlice.actions.fetchProductIdSucces(response.data))
    } catch (error) {
        dispatch(productSlice.actions.fetchProductIdError("Ошибка при получении данных"))
    }
}
export const addToCartData = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.fetchProductIdisLoading(true))
        const response = await axios.get<IProduct>(`http://localhost:3001/products/${id}`)
        const data = response.data
        dispatch(productSlice.actions.addToCart(data))
    } catch (error) {
        dispatch(productSlice.actions.fetchProductIdError("Ошибка при получении данных"))
    }
}

// export const addToCartData = (data: IProduct) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(productSlice.actions.fetchProductIdisLoading(true))
//         dispatch(productSlice.actions.addToCart(data))
//     } catch (error) {
//         dispatch(productSlice.actions.fetchProductIdError("Ошибка при получении данных"))
//     }
// }

