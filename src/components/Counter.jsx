import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [deadInsade, setDeadInsade] = useState("");
    const [deadInsade2, setDeadInsade2] = useState("");
    function increment() {
        setCount(count + 1);
        if (count + 1 == -7) {
            setDeadInsade("DEAD INSADE")
            setDeadInsade2("1000")
        } else {
            setDeadInsade("")
            setDeadInsade2("")
        }
    }

    function decrement() {
        setCount(count - 1);
        if (count - 1 == -7) {
            setDeadInsade("DEAD INSADE")
            setDeadInsade2("1000")
        }else {
            setDeadInsade("")
            setDeadInsade2("")
        }
    }



    return (
        <div>
            <div className="">
                <h1 className="count">{deadInsade2} {count}</h1>
                <h1 className="dead__insade" >{deadInsade}</h1>
            </div>


            <button className="btn" onClick={increment} >Increment</button>
            <button className="btn" onClick={decrement} >Decrement</button>
        </div>
    );
}
export default Counter;