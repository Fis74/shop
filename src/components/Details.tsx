import { FC, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import { addToCartData, fetchProductId } from '../store/reducer/ActionsCreator'
import Colors from './Colors'

const Details:FC = () => {
  const params = useParams()
  const id = Number(params.id)
  const dispatch = useAppDispatch()
  useEffect(() => {
      dispatch(fetchProductId(id))
  }, [])
  const {product} = useAppSelector(state => state.product)
  const AddCart = () => {
   dispatch(addToCartData(product.id))
  }
  return (
    <div className='details'>
      <img src={product.src} alt="" />
      <div className='details__box'>
          <div className='details__row'>
            <h2>{product.title}</h2>
            <span>${product.price}</span>
          </div>
          <div>
          <Colors colors={product.colors} />
          </div>
          <div className='details__desc'>{product.description}</div>
          <div className='details__content'>{product.content}</div>
          <Link to="/cart" className='details__cart'>
            <button onClick={AddCart} >Add to card</button>
          </Link>
      </div>
    </div>
  )
}

export default Details