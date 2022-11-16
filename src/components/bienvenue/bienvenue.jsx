import PropTypes from "prop-types"
import style from "./bienvenue.module.css"

const Bienvenue = (props) => {
    const { name, age } = props

    return (
        <>
            <p className={style.title}>Bienvenue {name} sur l'application React</p>
            <p className={style.content}>Vous avez {age} ans</p>
        </>
    )
}

Bienvenue.defaultProps = {
    age: 18
}

Bienvenue.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default Bienvenue