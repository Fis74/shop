import React from 'react'
import { FC, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import { productSlice } from '../store/reducer/ProductSlice'

const Header:FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const {totalCount, cartProduct} = useAppSelector(state => state.product)
  const {test} = productSlice.actions
  const [visible, setVisible] = useState<boolean>(false)
  const handleVisible = () => {
    setVisible(!visible)
  }
  useEffect(() => {
      dispatch(test())
  }, [cartProduct])
  return (
   <header>
    
      <div className='menu' onClick={handleVisible}>
        <svg aria-hidden="true" width="20" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </div>
      <div className='logo'>
        <Link to='/'>Nike</Link>
      </div>
      <nav>
        <ul className={visible ? "toggle" : ""}>
          <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'active' : ''
            }
          >
            Product
          </NavLink></li>
          <li><NavLink to='/contact'  className={({ isActive }) =>
              isActive ? 'active' : ''
            }>Contact</NavLink></li>
          <li><NavLink to='/about'  className={({ isActive }) =>
              isActive ? 'active' : ''
            }>About</NavLink></li>
          <li className='close' onClick={handleVisible}>
            <svg aria-hidden="true" width="20" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
          </li>
        </ul>
        <div className="nav-cart">
          <NavLink  className={({ isActive }) =>
              isActive ? 'active' : ''
            } to='/cart'>
            {totalCount && totalCount > 0 ? <span>{totalCount}</span> : <span>0</span>}
            <svg aria-hidden="true" width="20" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="test svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
          </NavLink>
        </div>
      </nav>
   </header>
  )
})

export default Header