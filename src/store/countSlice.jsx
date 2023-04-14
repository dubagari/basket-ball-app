
import { createSlice } from "@reduxjs/toolkit";
import { data } from "./component/data"; 

const initialState = {
    product: data
}
const countSlice = createSlice({
    name: 'Basket',
    initialState,
    reducers: {
        POINT1: (state, { payload }) => {
            const item = state.product.find(item => item.name === payload.name)
            item.count++
        },
        POINT2: (state, { payload }) => {
            const item = state.product.find(item => item.name === payload.name)
            item.count += 2
        },
        POINT3: (state, { payload }) => {
            const item = state.product.find(item => item.name === payload.name)
            item.count += 3
        },

        RESET: (state, { payload }) => {
            state.product.find(item=> item.count = 0)
        }
    }
})

export const { POINT1, POINT2, POINT3, RESET } = countSlice.actions


export default countSlice.reducer