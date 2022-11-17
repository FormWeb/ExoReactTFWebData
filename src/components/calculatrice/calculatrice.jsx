import { useState } from "react"

const Calculatrice = (props) => {

    // Props
    const { scientifique } = props

    // State
    const [nb1, setNb1] = useState("")
    const [nb2, setNb2] = useState("")
    const [operator, setOperator] = useState("+")
    const [result, setResult] = useState("")

    // Logique
    function handleResult(e) {
        e.preventDefault()

        // const nb1Parse = parseFloat(nb1)
        // const nb2Parse = parseFloat(nb2)

        switch (operator) {
            case "+":
                setResult(parseFloat(nb1) + parseFloat(nb2))
                break
            case "-":
                setResult(nb1 - nb2)
                break
            case "*":
                setResult(nb2 * nb2)
                break
            case "/":
                setResult(nb1 / nb2)
                break
            case "%":
                if (nb2 === 0) {
                    setResult("Pas de modulo par 0")
                }
                else {
                    setResult(nb1 % nb2)
                }
                break
        }
    }

    return (
        <form>
            <label>Nb1</label>
            <input type="number" value={nb1} onChange={e => setNb1(e.target.value)}></input>
            <select value={operator} onChange={e => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                {
                    scientifique && (
                        <option value="%">%</option>
                    )
                }
            </select>
            <label>Nb2</label>
            <input type="number" value={nb2} onChange={e => setNb2(e.target.value)}/>
            <button onClick={handleResult}>=</button>
            <input type="text" value={result} readOnly></input>
        </form>
    )
}

export default Calculatrice