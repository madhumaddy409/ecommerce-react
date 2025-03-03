import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/fotter/fotter'
import UserDashboard from '../components/user/userDashboard'

function UserDashboardPage() {
  return (
    <div>
        <Header />
        <UserDashboard />
        <Footer />
    </div>
  )
}

export default UserDashboardPage