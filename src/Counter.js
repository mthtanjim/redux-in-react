import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState("")
    const increment= () => {
    
        setCount(prevCount => prevCount +1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount -1)
    }
    const clear = () => {
        setCount(null)
    }
    return (
        <div>
            
            <h4>Total count is: {count}
            </h4>
            <button onClick={increment} >
                Click me
            </button>
            <button onClick={decrement} >Decrement</button>
            <button onClick={clear} >Clear</button>
        </div>
    )
}

export default Counter 