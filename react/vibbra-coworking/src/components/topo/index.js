import React from 'react'

function Topo(props) {


    return (

        < header >
            <div className={props.collapse} id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 py-4">
                            <h4 className="text-white">99 Work</h4>
                            <p className="text-muted">CADASTRE-SE GRATUITAMENTE E TENHA ACESSO A DIVERSOS LOCAIS(ESTAÇÕES DE
                            TRABALHO, SALA DE REUNIÃO) A UM CLICK</p>
                        </div>
                        <div className="col-sm-3 py-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">RH</h5>
                                    <hr className="my-4" />
                                    <p className="card-text">Ofereça seu espaço para profissionais e lucre, conheça
                                    profissionais altamente qualificados</p>
                                    <a href='' className="btn btn-primary">Criar Conta</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 py-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Profissional</h5>
                                    <hr className="my-4" />
                                    <p className="card-text">Encontre Locais rapidamente, de forma segura com um otimo
                                    custo benefíco e faça muito networking</p>
                                    <a href="../conta/profissional.html" className="btn btn-primary">Criar Conta</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar  shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="/conta/login.html" className="navbar-brand d-flex align-items-center">
                        <img src="https://vibbra.com.br/src/images/logo.svg" alt="Vibbra Work" className="logo" />
                    </a>
                </div>
            </div>
        </header >
    );
}

export default Topo;