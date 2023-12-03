import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const mainLayout = ({children}) => {
  return (
    <React.Fragment>
        <Header/>
            {children}
        <Footer/>
    </React.Fragment>
  )
}

export default mainLayout