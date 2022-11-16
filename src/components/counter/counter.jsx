import { useState } from "react"

const Counter = (props) => {

    const { incr } = props

    const [counter, setCounter] = useState(0)

    function handleIncrement() {
        setCounter(c => c + incr)
    }

    function handleReset() {
        setCounter(0)
    }

    return (
    <>
        <h3>{counter}</h3>
        <button onClick={handleIncrement}>+</button>
        {counter !== 0 && (
            <button onClick={handleReset}>Reset</button>
        )}
        
    </>
    )
}

Counter.defaultProps = {
    incr: 1
}

export default Counter