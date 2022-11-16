import ProductListItem from "./products-list-item"

const ProductList = (props) => {

    const { products } = props

    const productsJSX = products.map(
        (elem) => <ProductListItem key={elem.id} {...elem}></ProductListItem>
    )

    return (
        <>{productsJSX}</>
    )
}

export default ProductList