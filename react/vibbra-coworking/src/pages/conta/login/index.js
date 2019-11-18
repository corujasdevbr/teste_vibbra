/* eslint-disable array-callback-return */
/* eslint-disable no-self-compare */

import React, { useState } from 'react';
import useForm from 'react-hook-form';
import api from '../../../services/api';
import { Link } from 'react-router-dom'

import Topo from '../../../components/topo'
import '../conta.css';

import { parseJwt } from '../../../util/auth';

function Login(props) {
    const { register, handleSubmit, errors } = useForm();

    const [collapse, setCollapse] = useState('collapse bg-dark');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const onSubmit = (event) => {

        setLoading(true);

        api.post('/accounts/login',
            {
                "email": email,
                "password": senha
            })
            .then(response => {
                localStorage.setItem("usuario-vibbra-coworking", response.data.token);
                console.log(parseJwt().TypeUser);

                switch (parseJwt().TypeUser) {
                    case "Administrator":
                        props.history.push('/admin/locais')
                        break;
                    case "HumanResources":
                        props.history.push('/rh/dashboard')
                        break;
                    case "Professional":
                        props.history.push('/profissional/dashboard')
                        break;
                    default:
                        break;
                }

            })
            .catch(error => {
                setMensagem("<alert class='alert alert-danger mt-4'  role='alert'>Email ou senha inválidos!</alert>")
                setSenha('');
                setEmail('');
            });


        setLoading(false);
    }

    const topo = () => {
        if (collapse === 'collapse bg-dark') {
            setCollapse('bg-dark')
        } else {
            setCollapse('collapse bg-dark')
        }
    }

    return (
        <div className="background">
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
                                <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                                    <label htmlFor="email" className="sr-only">Informe seu e-mail</label>
                                    <input
                                        type="email"
                                        onChange={e => {
                                            setEmail(e.target.value);
                                            setMensagem('')
                                        }
                                        }
                                        value={email}
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Informe seu e-mail"
                                        ref={register({
                                            required: 'E-mail obrigatório',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "Informe um e-mail válido"
                                            }
                                        })} />
                                    {errors.email && <span className="error">{errors.email.message}</span>}
                                    <label htmlFor="senha" className="sr-only">Informe sua senha</label>
                                    <input
                                        type="password"
                                        onChange={e => {
                                            setSenha(e.target.value)
                                            setMensagem('');
                                        }}
                                        value={senha}
                                        name="senha"
                                        id="senha"
                                        className="form-control"
                                        placeholder="Informe sua senha"
                                        ref={register({
                                            required: 'Senha obrigatória',
                                        })} />
                                    {errors.senha && <span className="error">{errors.senha.message}</span>}
                                    <div className="mt-3">
                                        <button className="btn btn-block btn-primary" type="submit">{loading ? "Entrando..." : "Entrar"}</button>
                                    </div>

                                    {mensagem !== '' ?
                                        <div className="mt-4 mb-4" dangerouslySetInnerHTML={{ __html: mensagem }} /> : ''}


                                    <div className="mt-2">
                                        Ainda não possui uma conta? <Link to="#" onClick={() => topo()}>Cria sua conta agora!</Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );

}

export default Login;