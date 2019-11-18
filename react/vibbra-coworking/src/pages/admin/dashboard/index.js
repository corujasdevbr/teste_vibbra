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

                        <div className="row">
                            <div className="col-3">
                                <div className="card bg-danger text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Quantidade Usuarios</h5>
                                        <p className="card-text text-right pr-5"><h1>3</h1></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card bg-warning text-dark">
                                    <div className="card-body">
                                        <h5 className="card-title">Quantidade Locais</h5>
                                        <p className="card-text text-right pr-5"><h1>3</h1></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
}

export default DashBoard