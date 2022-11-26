import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}


const counterSlice = createSlice({
    name: 'users',
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        amountBy: (state,actionPayload) => {
            state.value += actionPayload.payload
        }
    },
    initialState
})


export const {increment, decrement, amountBy} = counterSlice.actions
export default counterSlice.reducer