import { FC, useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import { addToCartData, fetchProduct } from '../store/reducer/ActionsCreator'
import ProductBlock from '../components/ProductBlock'
import React from 'react'
const Product:FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const {products} = useAppSelector(state => state.product)
  useEffect(() => {
      dispatch(fetchProduct())
  }, [])
  console.log('render')
  const handleAddCart = (id: number) => {
    dispatch(addToCartData(id))
  }
  return (
    <div className='product'>
      {products &&
        products.map((product) => 
          <ProductBlock addToCart={handleAddCart} product={product} key={product.id} />
            )}
      </div>
  )
})

export default Product