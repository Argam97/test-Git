import React from 'react';
import './App.css';
import {increment,decrement,amountBy} from "./store/slices/counterSlice";
import {useAppDispatch, useAppSelector} from "./store";

function App() {
    const value = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()
    return (
    <div className="App">
        <button onClick={() => dispatch(decrement())} >sub</button>
        {value}
        <button onClick={() => dispatch(increment())} >add</button>
        <button onClick={() => dispatch(amountBy(10))} >increment mount by 10</button>

    </div>
  );
}

export default App;
