import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/fotter/fotter'
import ProductCheckout from '../components/product/productCheckout'

function CheckoutOrder() {
  return (
    <div>
        <Header/>
        <ProductCheckout />
        <Footer />
    </div>
  )
}

export default CheckoutOrder