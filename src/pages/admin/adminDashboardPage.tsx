import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/fotter/fotter'
import AdminDashboard from '../../components/admin/adminDashBoard'


function AdminDashBoardPage() {
  return (
    <div>
        <Header />
        <AdminDashboard />
        <Footer />
    </div>
  )
}

export default AdminDashBoardPage