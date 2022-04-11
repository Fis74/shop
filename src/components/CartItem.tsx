import React, { useCallback } from 'react'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import { IProduct } from '../model/IProduct'
import { productSlice } from '../store/reducer/ProductSlice'
interface CartItemProps {
    productData: IProduct
}
const CartItem:FC<CartItemProps> = React.memo(({productData}) => {
    const {cartProduct} = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()
    const {increment, decrement, remove,test} = productSlice.actions
    const handleIncrement = useCallback(() => {
        dispatch(increment(productData.id))
    }, [])
    const handleDecrement = useCallback(() => {
        dispatch(decrement(productData.id))
    },[])
    const handleRemove = useCallback(() => {
      dispatch(remove(productData.id))
  }, [])
  useEffect(() => {
    dispatch(test())
  }, [cartProduct])
  return (
      <div className='details cart'>
      <img src={productData.src} alt="" />
      <div className='details__box'>
          <div className='details__row'>
            <h2>{productData.title}</h2>
            <span>${productData.price * productData.count}</span>
          </div>
          <p className='details__desc'>{productData.description}</p>
          <p className='details__content'>{productData.content}</p>
          <div className='details__amount'>
          <button className='details__count' onClick={handleDecrement}>-</button>
            <span>
              {productData.count}
            </span>
            <button className='details__count' onClick={handleIncrement}>+</button>
          </div>
      </div>
        <div  className='details__delete' onClick={handleRemove}>X</div>
    </div> 
  )
})
export default CartItem