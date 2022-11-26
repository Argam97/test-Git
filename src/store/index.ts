import {configureStore} from '@reduxjs/toolkit'

import counter from "./slices/counterSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const store = configureStore({
    reducer: {
        counter
    },
})


export type RootState = ReturnType<typeof store.getState>

export type TDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => TDispatch = useDispatch;

export default store