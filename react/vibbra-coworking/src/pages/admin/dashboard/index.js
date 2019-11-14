import React from 'react';
import Footer from '../../../components/footer'
import HeaderAdmin from '../../../components/header'
import Menu from '../../../components/menu'

import './dashboard.css';

function DashBoard() {
    return (
        <div>
            <HeaderAdmin></HeaderAdmin>

<div className="container-fluid">
   <div className="row">
       <Menu></Menu>

       <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
       <div
           className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-5 pb-2 mb-3 border-bottom">
           <h1 className="h2">Dashboard</h1>
           <div className="btn-toolbar mb-2 mb-md-0">
           </div>
       </div>

       <div className="card">
           <div className="card-body mt-4">
               <h3>Cadastre um novo local</h3>
               <hr className="mt-3" />
           </div>
       </div>
       <div className="mt-4"></div>
       <div className="card">
           
       </div>
   </main>
   </div>
</div>

<Footer></Footer>
        </div>
    
    );
}

export default DashBoard