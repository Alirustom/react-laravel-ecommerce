import React from 'react';
import { Button } from 'react-bootstrap';
import LatestProduct from '../components/common/latestproduct.jsx';
import FeaturedProduct from '../components/common/featuredproduct.jsx';
import Herobanner from '../components/common/herobanner.jsx';
import Layout from '../components/common/Layout.jsx';

const Home = () => {
  return (
    <>
        <Layout>
              <Herobanner/>
              <LatestProduct/>
              <FeaturedProduct/>
        </Layout>

    </>
  )
}

export default Home
