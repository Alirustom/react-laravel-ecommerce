import React from 'react';
import { Button } from 'react-bootstrap';
import LatestProduct from '../components/common/latestproduct.jsx';
import FeaturedProduct from '../components/common/featuredproduct.jsx';
import Header from '../components/common/header.jsx';
import Footer from '../components/common/footer.jsx';
import Herobanner from '../components/common/herobanner.jsx';

const Home = () => {
  return (
    <>
      <Header/>
      <Herobanner/>
      <LatestProduct/>
      <FeaturedProduct/>
      <Footer/>

    </>
  )
}

export default Home
