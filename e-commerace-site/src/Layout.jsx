// import React from 'react'
import Header from './components/Header/Header'
// import About from './components/About/About'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    {/* <About /> */}
    </>
  )
}

export default Layout