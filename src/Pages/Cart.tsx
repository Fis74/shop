import { FC } from 'react'
import { useAppSelector } from '../hooks/Hooks'
import CartItem from '../components/CartItem'
const Cart:FC = () => {
  const {cartProduct, totalPrice, totalCount} = useAppSelector(state => state.product)
  return (
    <div>
      {totalCount ? ( 
        <><div>
          {cartProduct.map((productData) => (
            <CartItem key={productData.id} productData={productData} />
          ))}
        </div><div className="total">
            <h3>Total: ${totalPrice}</h3>
          </div></> ): 
        <div className='nothing'>Nothing Product</div>
      }
    </div>
  )
}

export default Cart