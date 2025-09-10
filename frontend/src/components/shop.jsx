import React from 'react';
import Layout from '../components/common/Layout.jsx';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ProductImg from '../assets/images/Mens/eight.jpg';


const Shop = () => {
  return (
    <>
      <Layout>
        
           <div className='container'>
              <div className='row breadcrumb'>
                <Breadcrumb>
                  <Breadcrumb.Item href="http://localhost:5173/">
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Shop</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className='row'>
                <div className='col-md-3'>
                    <div className='card shadow border-0 mb-3'>
                        <div className='card-body p-4'>
                            <h3 className='mb-3'>Categopries</h3>
                            <ul>
                                <li className='mb-2'>
                                    <input type='checkbox' />
                                    <label htmlFor='' className='ps-2'>Kids</label>
                                </li>
                                <li className='mb-2'>
                                    <input type='checkbox' />
                                    <label htmlFor='' className='ps-2'>Mens</label>
                                </li>
                                <li className='mb-2'>
                                    <input type='checkbox' />
                                    <label htmlFor='' className='ps-2'>Womens</label>
                                </li>
                                <li className='mb-2'>
                                    <input type='checkbox' />
                                    <label htmlFor='' className='ps-2'>Electronic</label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='card shadow border-0 mb-3'>
                        <div className='card-body p-4'>
                            <h3 className='mb-3'>Brands</h3>
                            <ul>
                                <li className='mb-2'>
                                    <input type='checkbox' />
                                    <label htmlFor='' className='ps-2'>Puma</label>
                                </li>
                                <li className='mb-2'>
                                    <input type='checkbox' />
                                    <label htmlFor='' className='ps-2'>Nike</label>
                                </li>
                                <li className='mb-2'>
                                    <input type='checkbox' />
                                    <label htmlFor='' className='ps-2'>Adidas</label>
                                </li>
                                <li className='mb-2'>
                                    <input type='checkbox' />
                                    <label htmlFor='' className='ps-2'>H&M</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className='col-md-9'>
                  <div className='row pb-5'>
                    <div className='col-md-4 col-6'>
                      <div className='product card border-0'>
                          <div className='card-img'>
                            <img src={ProductImg} alt='' className='w-100' />
                          </div>
                          <div className='card-body pt-3'>
                            <a href>Red Check shirt for men</a>
                            <div className='price'>
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-4 col-6'>
                      <div className='product card border-0'>
                          <div className='card-img'>
                            <img src={ProductImg} alt='' className='w-100' />
                          </div>
                          <div className='card-body pt-3'>
                            <a href>Red Check shirt for men</a>
                            <div className='price'>
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-4 col-6'>
                      <div className='product card border-0'>
                          <div className='card-img'>
                            <img src={ProductImg} alt='' className='w-100' />
                          </div>
                          <div className='card-body pt-3'>
                            <a href>Red Check shirt for men</a>
                            <div className='price'>
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-4 col-6'>
                      <div className='product card border-0'>
                          <div className='card-img'>
                            <img src={ProductImg} alt='' className='w-100' />
                          </div>
                          <div className='card-body pt-3'>
                            <a href>Red Check shirt for men</a>
                            <div className='price'>
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-4 col-6'>
                      <div className='product card border-0'>
                          <div className='card-img'>
                            <img src={ProductImg} alt='' className='w-100' />
                          </div>
                          <div className='card-body pt-3'>
                            <a href>Red Check shirt for men</a>
                            <div className='price'>
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-4 col-6'>
                      <div className='product card border-0'>
                          <div className='card-img'>
                            <img src={ProductImg} alt='' className='w-100' />
                          </div>
                          <div className='card-body pt-3'>
                            <a href>Red Check shirt for men</a>
                            <div className='price'>
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                      </div>
                    </div>
                 </div>
                </div>
              </div> 
           </div>

      </Layout>
    </>
  )
}

export default Shop
