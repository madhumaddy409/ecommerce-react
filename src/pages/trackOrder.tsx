import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/fotter/fotter'
import ProductTrackOrder from '../components/product/productTrackOrder'

function TrackOrder() {
  return (
    <div>
        <Header/>
        <ProductTrackOrder />
        <Footer/>
    </div>
  )
}

export default TrackOrder