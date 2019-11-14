import React, {useState} from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';

import Topo from '../../../components/topo'
import '../conta.css';

function CriarProfissional(props) {
    const { register, handleSubmit, errors } = useForm();

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [cpf, setCPF] = useState('');
    const [rg, setRG] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const onSubmit = (event) => {
        
        setLoading(true);
        var obj = {
            "email" : email,
            "senha" : senha,
            "tipoUsuario" : 3,
            "dados" : {
                "nomeUsuario" : nomeUsuario,
                "nome" : nome,
                "cpf" : cpf,
                "rg" : rg,
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
                                <h3 className="display-4">Conta Profissional</h3>
                                <hr className="mt-4" />
                                <p className="lead">Encontre facilmente uma estação de trabalho ou oferte o espaço dentro da sua empresa</p>
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
                                    <label htmlFor="nome" className="sr-only">Informe seu Nome</label>
                                    <input 
                                        type="text" 
                                        onChange={e => {
                                            setNome(e.target.value); }
                                        } 
                                        value={nome} 
                                        id="nome" 
                                        name="nome"
                                        className="form-control" 
                                        placeholder="Informe seu Nome"
                                        ref={register({
                                            required: 'Nome obrigatório'
                                            })}  />
                                    {errors.nome && <span className="error">{errors.nome.message}</span>}
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="celular" className="sr-only">Celular</label>
                                    <input 
                                        type="text" 
                                        onChange={e => {
                                            setCelular(e.target.value); }
                                        } 
                                        value={celular} 
                                        id="celular" 
                                        name="celular"
                                        className="form-control" 
                                        placeholder="Informe seu número de Celular"
                                        ref={register({
                                            required: 'Celular obrigatório'
                                            })}  />
                                    {errors.celular && <span className="error">{errors.celular.message}</span>}
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="cpf" className="sr-only">Informe seu CPF</label>
                                    <input 
                                        type="text" 
                                        onChange={e => {
                                            setCPF(e.target.value); }
                                        } 
                                        value={cpf} 
                                        id="cpf" 
                                        name="cpf"
                                        className="form-control" 
                                        placeholder="Informe seu CPF"
                                        ref={register({
                                            required: 'CPF obrigatório'
                                            })}  />
                                    {errors.cpf && <span className="error">{errors.cpf.message}</span>}
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="rg" className="sr-only">Informe seu RG</label>
                                    <input 
                                        type="text" 
                                        onChange={e => {
                                            setRG(e.target.value); }
                                        } 
                                        value={rg} 
                                        id="rg" 
                                        name="rg"
                                        className="form-control" 
                                        placeholder="Informe seu RG"
                                        ref={register({
                                            required: 'RG obrigatório'
                                            })}  />
                                    {errors.rg && <span className="error">{errors.rg.message}</span>}
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

export default CriarProfissional;