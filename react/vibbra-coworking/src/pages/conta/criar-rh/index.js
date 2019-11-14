import React, {useState} from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';

import Topo from '../../../components/topo'
import '../conta.css';

function CriarRh(props) {
    const { register, handleSubmit, errors } = useForm();

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const onSubmit = (event) => {
        
        setLoading(true);
        var obj = {
            "email" : email,
            "senha" : senha,
            "tipoUsuario" : 1,
            "dados" : {
                "nomeUsuario" : nomeUsuario,
                "razaoSocial" : razaoSocial,
                "cnpj" : cnpj
            }
        }


          axios.post('http://localhost:3000/usuarios', obj)
            .then(response => {
                setMensagem("<alert class='alert alert-success mt-4'  role='alert'>Usuário Cadastrado, verifique seu e-mail!!!</alert>")
            })
            .catch(error => console.log(error));  

        setLoading(false);
    }

    return (
        <div className="background">
            <Topo collapse='collapse bg-black'></Topo>

            <main role="main">
                <div className="container">
                    <div className="jumbotron mt-5">
                        <div className="row">
                            <div className="col-7">
                                <h3 className="display-4">Conta RH</h3>
                                <hr className="mt-4" />
                                <p className="lead">Encontre facilmente uma estação de trabalho ou oferte o espaço dentro da sua
                                    empresa</p>
                            </div>
                            <div className="col-5">
                                <p>Preencha os campos abaixo:</p>
                                <form  className="form-signin"  onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                    <label htmlFor="nomeUsuario" className="sr-only">Informe seu Nome de Usuário</label>
                                    <input 
                                        type="text" 
                                        onChange={e => {
                                            setNomeUsuario(e.target.value); }
                                        } 
                                        value={nomeUsuario} 
                                        id="nomeUsuario" 
                                        name="nomeUsuario"
                                        className="form-control" 
                                        placeholder="Informe seu Nome de usuário"
                                        ref={register({
                                            required: 'Nome de usuário obrigatório'
                                            })}  />
                                    {errors.nomeUsuario && <span className="error">{errors.nomeUsuario.message}</span>}
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="razaoSocial" className="sr-only">Razão Social</label>
                                    <input 
                                        type="text" 
                                        onChange={e => {
                                            setRazaoSocial(e.target.value); }
                                        } 
                                        value={razaoSocial} 
                                        id="razaoSocial" 
                                        name="razaoSocial"
                                        className="form-control" 
                                        placeholder="Informe sua Razão Social"
                                        ref={register({
                                            required: 'Razão Social obrigatória'
                                            })}  />
                                    {errors.razaoSocial && <span className="error">{errors.razaoSocial.message}</span>}
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="cnpj" className="sr-only">Informe seu CNPJ</label>
                                    <input 
                                        type="text" 
                                        onChange={e => {
                                            setCNPJ(e.target.value); }
                                        } 
                                        value={cnpj} 
                                        id="cnpj" 
                                        name="cnpj"
                                        className="form-control" 
                                        placeholder="Informe seu CNPJ"
                                        ref={register({
                                            required: 'CNPJ obrigatório'
                                            })}  />
                                    {errors.cnpj && <span className="error">{errors.cnpj.message}</span>}
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="email" className="sr-only">Informe seu e-mail</label>
                                    <input 
                                        type="email" 
                                        onChange={e => {
                                            setEmail(e.target.value); 
                                            setMensagem('')}
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
                                            })}  />
                                    {errors.email && <span className="error">{errors.email.message}</span>}
                                    </div>
                                    <div className="form-group">
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
                                    </div>

                                    <button type="submit" className="btn btn-primary" disabled={!loading ? '': 'none'}>{loading ? "Cadastrando..." : "Cadastrar"}</button>

                                    {mensagem !== '' ? 
                                    <div className="mt-4 mb-4" dangerouslySetInnerHTML={{ __html: mensagem }} /> : ''}

                                    <div className="mt-2">
                                        Já possui uma conta? <a href="/">Faça seu Login!</a>
                                    </div>
                                    <div className="mt-2">
                                        Sou um profissinal? <a href="/conta/profissional">Clique aqui!</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CriarRh;