import React from 'react';
import Header from '../../components/common/header.jsx';
import Footer from '../../components/common/footer.jsx';


const Layout = ({children}) => {
  return (
    <>
       <Header/>
       {children}
       <Footer/>
    </>
  )
}

export default Layout
