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
    const obj = {
        a: {
            ac: 5
        }, 
        b: 55
    }
    const objCopy = {
        ...obj, 
        b: 60
    }

    const arr = ['a', 'b']
    // Create a new copy of arr, with "c" appended to the end
    const newArr2 = arr.slice()
    newArr2.push("m")
    newArr2.push("n")
    newArr2.push("o")

    return (
        <div>
            
            <h4>Total count is: {count}
            </h4>
            <pre>{JSON.stringify(obj, null, 8)}</pre>
            <pre>{JSON.stringify(objCopy, null, 8)}</pre>
            <pre>{JSON.stringify(newArr2, null, 8)}</pre>
            <button onClick={increment} >
                Click me
            </button>
            <button onClick={decrement} >Decrement</button>
            <button onClick={clear} >Clear</button>
        </div>
    )
}

export default Counter 