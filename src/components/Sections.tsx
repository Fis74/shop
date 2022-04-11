import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Cart from '../Pages/Cart'
import Contact from '../Pages/Contact'
import Details from './Details'
import Product from '../Pages/Product'

const Section:FC = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={ <Product />}/>
        <Route path="/contact" element={ <Contact />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/cart" element={ <Cart />}/>
        <Route path="/product" element={ <Product />}/>
        <Route path="/product/:id" element={ <Details />}/>
        <Route  path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </section>
  )
}

export default Section