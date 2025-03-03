import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/fotter/fotter'
import { CheckBox } from '@mui/icons-material'
import Checkout from '../components/product/checkout'

function CheckoutProduct() {
  return (
    <div>
    <Header />
    <Checkout />
    <Footer />
    </div>
  )
}

export default CheckoutProduct