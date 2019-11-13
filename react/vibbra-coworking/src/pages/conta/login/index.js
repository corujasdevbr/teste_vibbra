/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { useState } from 'react';

import Topo from '../../../components/topo'
import '../conta.css';

function Login() {
    const [collapse, setCollapse] = useState('collapse bg-dark');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const efetuaLogin = () => {

    }

    return (
        <div>
            <Topo collapse={collapse}></Topo>

            <main role="main">
                <div className="container">
                    <div className="jumbotron mt-5">
                        <div className="row">
                            <div className="col-7">
                                <h3 className="display-4">Rápido, seguro e com muito Networking</h3>
                                <p className="lead">Encontre facilmente uma estação de trabalho ou oferte o espaço dentro da sua
                            empresa</p>
                            </div>
                            <div className="col-5">
                                <form className="form-signin">
                                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                                    <label for="inputEmail" className="sr-only">Informe seu e-mail</label>
                                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} id="inputEmail" className="form-control" placeholder="Informe seu e-mail"
                                        required autofocus />
                                    <label for="inputPassword" className="sr-only">Informe sua senha</label>
                                    <input type="password" onChange={e => setSenha(e.target.value)} value={senha} id="inputPassword" className="form-control"
                                        placeholder="Informe sua senha" required />

                                    <div className="mt-3">
                                        <button className="btn btn-block btn-primary" onClick={() => efetuaLogin()}>Entrar</button>
                                    </div>
                                    <div className="mt-2">
                                        Ainda não possui uma conta? <a href='#' onClick={() => {
                                            if (collapse === 'collapse bg-dark') {
                                                setCollapse('bg-dark')
                                            } else {
                                                setCollapse('collapse bg-dark')
                                            }
                                        }}>Cria sua conta agora!</a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div >
    );

}

export default Login;