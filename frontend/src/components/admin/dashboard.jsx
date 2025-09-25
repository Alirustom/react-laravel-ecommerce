import React, { useContext } from 'react';
import Layout from "../common/Layout";
import { AdminAuthContext } from '../context/AdminAuth';


const Dashboard = () => {
  const {logout} = useContext(AdminAuthContext);
  return (
    <Layout>
    {/* <div>Dashboard</div>
    <button className='btn btn-danger' onClick={logout}>Logout</button> */}
     <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className="h4 pb-0 mb-el">Dashboard</h4>
          </div>
            <div className="col-md-3 sidebar">
              <div className="card shadow mb-5">
                <div className="card-body p-4">
                  <ul>
                  <li><a href="" onClick={(e) => e.preventDefault()}>Dashboard</a></li>
                  <li><a href="" onClick={(e) => e.preventDefault()}>Categories</a></li>
                  <li><a href="" onClick={(e) => e.preventDefault()}>Brands</a></li>
                  <li><a href="" onClick={(e) => e.preventDefault()}>Products</a></li>
                  <li><a href="" onClick={(e) => { e.preventDefault(); logout();}}>Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
          <div className="col-md-9">
            {/* Add content for right column here */}
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Dashboard;