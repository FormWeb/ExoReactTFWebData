import style from "./products-list.module.css"

const ProductListItem = (props) => {
    const { id, name, price, promo } = props

    return (
        <h3>- {name} : <span className={promo ? style.red : ""}>{price} euros</span></h3>
    )
}

export default ProductListItem