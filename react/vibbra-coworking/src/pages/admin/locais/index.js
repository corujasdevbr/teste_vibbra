import React, { useEffect, useState } from 'react'
import useForm from 'react-hook-form';
import HeaderAdmin from '../../../components/header'
import Menu from '../../../components/menu'
import DataTable from 'react-data-table-component';
import { moedarealMask, cepMask } from '../../../util/mask';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api';

import '../admin.css';
import './locais.css';

function Locais() {
    const { register, handleSubmit, errors } = useForm();

    const [locais, setLocais] = useState([]);
    const [textoFiltrado, setTextoFiltrado] = useState([]);
    const [nome, setNome] = useState('');
    const [locaisFiltrados, setLocaisFiltrados] = useState([]);
    const [descricaoLocal, setDescricaoLocal] = useState();
    const [quantCadeiras, setQuantCadeiras] = useState();
    const [quantMesas, setQuantMesas] = useState('');
    const [custoHora, setCustoHora] = useState();
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [imagem, setImagem] = useState('');
    const [bairro, setBairro] = useState('');
    const [id, setId] = useState(0);
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const columns = [
        {
            cell: row => <img src={row.image} alt={row.name} className="imagemLocal" />,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: 'Nome',
            selector: 'name',
            sortable: true
        },
        {
            name: 'Descrição do Local',
            cell: row => <div data-tag="___react-data-table-allow-propagation___">{tipoLocal(row.typePlace)}</div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true
        },
        {
            name: 'Quantidade de Cadeiras',
            selector: 'numberChairs',
            sortable: true
        },
        {
            name: 'Quantidade de Mesas',
            selector: 'numberTables',
            sortable: true
        },
        {
            name: 'Custo por Hora',
            selector: 'hourlyCost',
            sortable: true
        },
        {
            name: 'Cep',
            selector: 'cep',
            sortable: true
        },
        {
            name: 'Logradouro',
            selector: 'address',
            sortable: true
        },
        {
            name: 'Estado',
            selector: 'state',
            sortable: true
        },
        {
            name: 'Cidade',
            selector: 'city',
            sortable: true
        },
        {
            cell: row => <button type="button" className="btn btn-sm btn-success" onClick={() => { editar(row.id) }}>Editar</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            cell: row => <button type="button" className="btn btn-sm btn-danger" onClick={() => { remover(row) }}>Remover</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];


    useEffect(() => {
        listaLocais();
    }, [])

    const limparCarmpos = () => {
        setId(0);
        setNome('');
        setDescricaoLocal('');
        setQuantCadeiras('');
        setQuantMesas('');
        setCustoHora('');
        setCep('');
        setLogradouro('');
        setBairro('');
        setEstado('');
        setCidade('');
        setImagem('');
    }

    const buscarCep = value => {
        setCep(cepMask(value));
        if (value.length === 9) {

            api.get('http://viacep.com.br/ws/' + value + '/json/')
                .then((response) => {
                    if (response.data.erro !== true) {
                        setBairro(response.data.bairro);
                        setLogradouro(response.data.logradouro);
                        setCidade(response.data.localidade);
                        setEstado(response.data.uf);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            setBairro('');
            setLogradouro('');
            setCidade('');
            setEstado('');
        }
    }

    const tipoLocal = tipo => {
        switch (tipo) {
            case 1:
                return "Sala";
            case 2:
                return "Sala de Reunião";
            case 3:
                return "Sala com videoconferência";
            case 4:
                return "Lounge";
            default:
                break;
        }
    }

    const editar = (id) => {
        let local = locais.filter(item => item.id === id);
        if (local.length > 0) {
            setMensagem('');
            setId(id);
            setNome(local[0].name);
            setDescricaoLocal(local[0].typePlace);
            setQuantCadeiras(local[0].numberChairs);
            setQuantMesas(local[0].numberTables);
            setCustoHora(local[0].hourlyCost);
            setCep(local[0].cep);
            setLogradouro(local[0].address);
            setBairro(local[0].district);
            setEstado(local[0].state);
            setCidade(local[0].city);
            setImagem(local[0].image);
        }
    }

    const remover = (local) => {
        if (window.confirm("Deseja realmente excluir o Local (" + local.name + ")?")) {
            api.delete('/places/' + local.id, { headers: { Authorization: 'BEARER ' + localStorage.getItem("usuario-vibbra-coworking") } })
                .then(response => {
                    listaLocais()
                    toast.success('Local (' + local.name + ') Excluido');
                })
                .catch(error => toast.error(error.message));
        }
    }
    const onSubmit = (event) => {

        setLoading(true);
        var obj = {
            "name": nome,
            "typePlace": descricaoLocal,
            "numberChairs": quantCadeiras,
            "numberTables": quantMesas,
            "hourlyCost": custoHora,
            "cep": cep,
            "address": logradouro,
            "district": bairro,
            "state": estado,
            "city": cidade,
            "image": imagem
        }


        if (id === 0) {
            api.post('/places', obj, { headers: { Authorization: 'BEARER ' + localStorage.getItem("usuario-vibbra-coworking") } })
                .then(response => {
                    listaLocais()
                    toast.success('Local Cadastrado');
                })
                .catch(error => console.log(error));
        } else {
            obj["id"] = id;
            api.put('/places/' + id, obj, { headers: { Authorization: 'BEARER ' + localStorage.getItem("usuario-vibbra-coworking") } })
                .then(response => {
                    listaLocais()
                    toast.success('Local Alterado');
                })
                .catch(error => console.log(error));
        }

        limparCarmpos();

        setLoading(false);
    }

    const listaLocais = () => {
        api.get('/places', { headers: { Authorization: 'BEARER ' + localStorage.getItem("usuario-vibbra-coworking") } })
            .then(response => {
                console.log(response.data);
                setLocais(response.data);
                setLocaisFiltrados(response.data);
            })
            .catch(error => console.log(error));
    }

    const onChangeFiltroTexto = (event) => {
        setTextoFiltrado(event.target.value);
        setLocaisFiltrados(locais.filter(item => item.nome.toLowerCase().includes(event.target.value.toLowerCase()) || item.estado.toLowerCase().includes(event.target.value.toLowerCase())));
    }

    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000}></ToastContainer>
            <HeaderAdmin></HeaderAdmin>

            <div className="container-fluid">
                <div className="row">
                    <Menu></Menu>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-5 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Locais</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body mt-4">
                                <h3>Cadastre um novo local</h3>
                                <hr className="mt-3" />
                                <form className="form-signin" id="form-local" onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-row">
                                        <div className="col-3">
                                            <input
                                                type="text"
                                                onChange={e => {
                                                    setNome(e.target.value);
                                                }
                                                }
                                                value={nome || ''}
                                                id="nome"
                                                name="nome"
                                                className="form-control"
                                                placeholder="Informe o Nome do Local"
                                                ref={register({
                                                    required: 'Nome do Local obrigatório'
                                                })} />
                                            {errors.nome && <span className="error">{errors.nome.message}</span>}
                                        </div>
                                        <div className="col-5">
                                            <select className="form-control"
                                                onChange={e => {
                                                    setDescricaoLocal(e.target.value);
                                                }
                                                }
                                                value={descricaoLocal || ''}
                                                id="descricaoLocal"
                                                name="descricaoLocal"
                                                ref={register({
                                                    required: 'Descrição do local obrigatório'
                                                })}>
                                                <option value="">Selecione</option>
                                                <option value="1">Sala</option>
                                                <option value="2">Sala de Reunião</option>
                                                <option value="3">Sala com videoconferência</option>
                                                <option value="4">Lounge</option>
                                            </select>
                                            {errors.descricaoLocal && <span className="error">{errors.descricaoLocal.message}</span>}

                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="number"
                                                onChange={e => {
                                                    setQuantCadeiras(e.target.value);
                                                }
                                                }
                                                value={quantCadeiras || ''}
                                                id="quantCadeiras"
                                                name="quantCadeiras"
                                                className="form-control"
                                                placeholder="Cadeiras"
                                                ref={register({
                                                    required: 'Quantidade de Cadeiras obrigatório'
                                                })} />
                                            {errors.quantCadeiras && <span className="error">{errors.quantCadeiras.message}</span>}
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="number"
                                                onChange={e => {
                                                    setQuantMesas(e.target.value);
                                                }
                                                }
                                                value={quantMesas || ''}
                                                id="quantMesas"
                                                name="quantMesas"
                                                className="form-control"
                                                placeholder="Mesas"
                                                ref={register({
                                                    required: 'Quantidade de Mesas obrigatório'
                                                })} />
                                            {errors.quantMesas && <span className="error">{errors.quantMesas.message}</span>}
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                onChange={e => {
                                                    setCustoHora(moedarealMask(e.target.value));
                                                }
                                                }
                                                value={custoHora || ''}
                                                maxLength="10"
                                                id="custoHora"
                                                name="custoHora"
                                                className="form-control"
                                                placeholder="Informe o Custo por Hora"
                                                ref={register({
                                                    required: 'Custo por Hora obrigatório'
                                                })} />
                                            {errors.custoHora && <span className="error">{errors.custoHora.message}</span>}
                                        </div>
                                    </div>
                                    <div className="mt-4"></div>
                                    <div className="form-row">
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                onChange={e => {
                                                    buscarCep(e.target.value);
                                                }
                                                }
                                                value={cep || ''}
                                                id="cep"
                                                name="cep"
                                                maxLength="9"
                                                className="form-control"
                                                placeholder="Informe o Cep"
                                                ref={register({
                                                    required: 'Cep obrigatório'
                                                })} />
                                            {errors.cep && <span className="error">{errors.cep.message}</span>}
                                        </div>
                                        <div className="col-4">
                                            <input
                                                type="text"
                                                onChange={e => {
                                                    setLogradouro(e.target.value);
                                                }
                                                }
                                                value={logradouro || ''}
                                                id="logradouro"
                                                name="logradouro"
                                                className="form-control"
                                                placeholder="Informe o Logradouro"
                                                ref={register({
                                                    required: 'Logradouro obrigatório'
                                                })} />
                                            {errors.logradouro && <span className="error">{errors.logradouro.message}</span>}
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                onChange={e => {
                                                    setBairro(e.target.value);
                                                }}
                                                value={bairro || ''}
                                                id="bairro"
                                                name="bairro"
                                                maxLength="100"
                                                className="form-control"
                                                placeholder="Informe o Bairro"
                                                ref={register({
                                                    required: 'Bairro obrigatório'
                                                })} />
                                            {errors.bairro && <span className="error">{errors.bairro.message}</span>}
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                onChange={e => {
                                                    setEstado(e.target.value);
                                                }
                                                }
                                                value={estado || ''}
                                                maxLength="2"
                                                id="estado"
                                                name="estado"
                                                className="form-control"
                                                placeholder="Informe o Estado"
                                                ref={register({
                                                    required: 'Estado obrigatório'
                                                })} />
                                            {errors.estado && <span className="error">{errors.estado.message}</span>}
                                        </div>
                                        <div className="col-3">
                                            <input
                                                type="text"
                                                onChange={e => {
                                                    setCidade(e.target.value);
                                                }
                                                }
                                                value={cidade || ''}
                                                id="cidade"
                                                name="cidade"
                                                maxLength="100"
                                                className="form-control"
                                                placeholder="Informe a Cidade"
                                                ref={register({
                                                    required: 'Cidade obrigatória'
                                                })} />
                                            {errors.cidade && <span className="error">{errors.cidade.message}</span>}
                                        </div>
                                    </div>
                                    <div className="mt-4"></div>
                                    <div className="form-row">
                                        <div className="col-8">
                                            <input
                                                type="text"
                                                onChange={e => {
                                                    setImagem(e.target.value);
                                                }
                                                }
                                                value={imagem}
                                                id="imagem"
                                                name="imagem"
                                                className="form-control"
                                                placeholder="Informe a url da Imagem"
                                                ref={register({
                                                    required: 'Imagem obrigatório'
                                                })} />
                                            {errors.imagem && <span className="error">{errors.imagem.message}</span>}
                                            <div className="mt-4"></div>
                                            <button type="submit" className="btn btn-primary" disabled={!loading ? '' : 'none'}>{loading ? "Salvando..." : "Salvar"}</button>
                                            <span className="btn btn-danger ml-4 cursor-pointer" onClick={() => limparCarmpos()} role="button">Limpar</span>

                                        </div>
                                        <div className="col-4 text-center">
                                            <img src={imagem} alt={nome} className="imagemLocal" />
                                        </div>
                                    </div>

                                    {mensagem !== '' ?
                                        <div className="mt-4 mb-4" dangerouslySetInnerHTML={{ __html: mensagem }} /> : ''}

                                </form>
                            </div>
                        </div>
                        <div className="mt-4"></div>
                        <div className="card">
                            <div className="card-body">
                                <h3>Lista de Locais</h3>
                                <div className="mt-5"></div>

                                {locaisFiltrados.length > 0 && <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="textoFiltrado"> Filtrar por : </label>
                                        <input type="text" value={textoFiltrado} name="textoFiltrado" className="form-control" placeholder="Informe o local" onChange={onChangeFiltroTexto} />

                                    </div>
                                </div>}

                                <DataTable
                                    columns={columns}
                                    data={locaisFiltrados}
                                    noDataComponent="Não há locais cadastrados."
                                    pagination
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Locais;