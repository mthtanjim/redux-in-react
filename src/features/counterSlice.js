import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'coutner', 
    initialState: {
        value: 0
    }, 
    reducers: {
        increment: state => {
            state.value += 1
        }, 
        decrement: state => {
            state.vlaue -= 1
        }, 
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }, 
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer