import { FC } from 'react'
import { IProduct } from '../model/IProduct'

interface ColorsProps {
    colors: []
}
const Colors:FC<ColorsProps> = ({colors}) => {
  return (
      <div className='details__colors'>
         {colors && colors.map((color, index) => (
         <button key={index} style={{background: color}}></button>)
             )}
             </div>
  )
}

export default Colors