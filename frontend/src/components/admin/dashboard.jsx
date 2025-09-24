import React, { useContext } from 'react';
import Layout from "../common/Layout";
import { AdminAuthContext } from '../context/AdminAuth';

const Dashboard = () => {
  const {logout} = useContext(AdminAuthContext);
  return (
    <Layout>
    <div>Dashboard</div>
    <button className='btn btn-danger' onClick={logout}>Logout</button>
    </Layout>
  )
}

export default Dashboard;