import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../model/IProduct'

interface ProductBlockProps {
    product: IProduct,
    addToCart: (data: number) => void
}
const ProductBlock:FC<ProductBlockProps> = ({product, addToCart}) => {
  const AddCart = () => {
    addToCart(product.id)
  }
  return (
    <div className='card'>
        <Link to={`/product/${product.id}`}>
            <img src={product.src} alt="" />
        </Link>
        <div className='content'>
            <h3>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h3>
            <span>${product.price}</span>
            <p>{product.description}</p>
            <button onClick={AddCart}>Add to card</button>
        </div>
    </div>
  )
}

export default ProductBlock