import React, {useEffect, useState} from 'react'
import useForm from 'react-hook-form';
import HeaderAdmin from '../../../components/header'
import Menu from '../../../components/menu'
import DataTable from 'react-data-table-component';

import axios from 'axios';

import '../dashboard.css';
import './locais.css';
function Locais(){
    const { register, handleSubmit, errors } = useForm();

    const [locais, setLocais] = useState([]);
    const [textoFiltrado, setTextoFiltrado] = useState([]);
    const [nome, setNome] = useState('');
    const [locaisFiltrados, setLocaisFiltrados] = useState([]);
    const [descricaoLocal, setDescricaoLocal] = useState();
    const [quantCadeiras, setQuantCadeiras] = useState();
    const [custoHora, setCustoHora] = useState('0.00');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [imagem, setImagem] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const columns = [
        {
          name: 'Nome',
          selector: 'nome',
          sortable: true
        },
        {
          name: 'Descrição do Local',
          selector: 'descricaoLocal',
          sortable: true
        },
        {
            name: 'Quantidade de Cadeiras',
            selector: 'quantCadeiras',
            sortable: true
        },
        {
            name: 'Custo por Hora',
            selector: 'custoHora',
            sortable: true
        },
        {
            name: 'Cep',
            selector: 'cep',
            sortable: true
        },
        {
            name: 'Logradouro',
            selector: 'logradouro',
            sortable: true
        },
        {
            name: 'Estado',
            selector: 'estado',
            sortable: true
        },
        {
            name: 'Cidade',
            selector: 'cidade',
            sortable: true
        },
        // {
        //   cell: row => <input type="button" onClick={() => { handleAction(row.hostid) }}>Editar</input>,
        //   ignoreRowClick: true,
        //   allowOverflow: true,
        //   button: true,
        // },
      ];

    
    useEffect(() => {
        listaLocais();
    }, [])

    const handleAction = (id) => {
        console.log(id)
    }

    const onSubmit = (event) => {
        
        setLoading(true);
        var obj = {
            "nome" : nome,
            "descricaoLocal": descricaoLocal,
            "quantCadeiras" : quantCadeiras,
            "custoHora": custoHora,
            "cep" : cep,
            "logradouro": logradouro,
            "estado" : estado,
            "cidade" : cidade,
            "imagem" : imagem
        }


          axios.post('http://localhost:3000/locais', obj)
            .then(response => {
                listaLocais()
                setMensagem("<alert class='alert alert-success mt-4'  role='alert'>Local Cadastrado!</alert>")
            })
            .catch(error => console.log(error));  

        setLoading(false);
    }

    const listaLocais = () => {
        axios.get('http://localhost:3000/locais')
            .then(response => {
                setLocais(response.data);
                setLocaisFiltrados(response.data);
            })
            .catch(error => console.log(error));
    }

    const onChangeFiltroTexto = (event) => {
        setTextoFiltrado(event.target.value);
        setLocaisFiltrados(locais.filter(item => item.nome.toLowerCase().includes(event.target.value.toLowerCase()) || item.estado.toLowerCase().includes(event.target.value.toLowerCase()) ));
      }

    return (
        <div>
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
               <form  className="form-signin"  onSubmit={handleSubmit(onSubmit)}>

                   <div className="form-row">
                       <div className="col-3">
                       <input 
                                        type="text" 
                                        onChange={e => {
                                            setNome(e.target.value); }
                                        } 
                                        value={nome} 
                                        id="nome" 
                                        name="nome"
                                        className="form-control" 
                                        placeholder="Informe o Nome do Local"
                                        ref={register({
                                            required: 'Nome do Local obrigatório'
                                            })}  />
                                    {errors.nome && <span className="error">{errors.nome.message}</span>}
                       </div>
                       <div className="col-5">
                           <select className="form-control" 
                           onChange={e => {
                                            setDescricaoLocal(e.target.value); }
                                        } 
                                        value={descricaoLocal} 
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
                       <div className="col-2">
                       <input 
                                        type="text" 
                                        onChange={e => {
                                            setQuantCadeiras(e.target.value); }
                                        } 
                                        value={quantCadeiras} 
                                        id="quantCadeiras" 
                                        name="quantCadeiras"
                                        className="form-control" 
                                        placeholder="Informe a Quantidade de Cadeiras"
                                        ref={register({
                                            required: 'Quantidade de Cadeiras obrigatório'
                                            })}  />
                                    {errors.quantCadeiras && <span className="error">{errors.quantCadeiras.message}</span>}
                       </div>
                       <div className="col-2">
                       <input 
                                        type="text" 
                                        onChange={e => {
                                            setCustoHora(e.target.value); }
                                        } 
                                        value={custoHora} 
                                        id="custoHora" 
                                        name="custoHora"
                                        className="form-control" 
                                        placeholder="Informe o Custo por Hora"
                                        ref={register({
                                            required: 'Custo por Hora obrigatório'
                                            })}  />
                                    {errors.custoHora && <span className="error">{errors.custoHora.message}</span>}
                       </div>
                   </div>
                   <div className="mt-4"></div>
                   <div className="form-row">
                       <div className="col-3">
                       <input 
                                        type="text" 
                                        onChange={e => {
                                            setCep(e.target.value); }
                                        } 
                                        value={cep} 
                                        id="cep" 
                                        name="cep"
                                        className="form-control" 
                                        placeholder="Informe o Cep"
                                        ref={register({
                                            required: 'Cep obrigatório'
                                            })}  />
                                    {errors.cep && <span className="error">{errors.cep.message}</span>}
                       </div>
                       <div className="col-5">
                       <input 
                                        type="text" 
                                        onChange={e => {
                                            setLogradouro(e.target.value); }
                                        } 
                                        value={logradouro} 
                                        id="logradouro" 
                                        name="logradouro"
                                        className="form-control" 
                                        placeholder="Informe o Logradouro"
                                        ref={register({
                                            required: 'Logradouro obrigatório'
                                            })}  />
                                    {errors.logradouro && <span className="error">{errors.logradouro.message}</span>}
                       </div>
                       <div className="col-1">
                       <input 
                                        type="text" 
                                        onChange={e => {
                                            setEstado(e.target.value); }
                                        } 
                                        value={estado} 
                                        id="estado" 
                                        name="estado"
                                        className="form-control" 
                                        placeholder="Informe o Estado"
                                        ref={register({
                                            required: 'Estado obrigatório'
                                            })}  />
                                    {errors.estado && <span className="error">{errors.estado.message}</span>}
                       </div>
                       <div className="col-3">
                       <input 
                                        type="text" 
                                        onChange={e => {
                                            setCidade(e.target.value); }
                                        } 
                                        value={cidade} 
                                        id="cidade" 
                                        name="cidade"
                                        className="form-control" 
                                        placeholder="Informe a Cidade"
                                        ref={register({
                                            required: 'Cidade obrigatória'
                                            })}  />
                                    {errors.cidade && <span className="error">{errors.cidade.message}</span>}
                       </div>
                   </div>
                   <div className="mt-4"></div>
                   <div className="form-row">
                   <div className="col-8">
                       <input 
                                        type="text" 
                                        onChange={e => {
                                            setImagem(e.target.value); }
                                        } 
                                        value={imagem} 
                                        id="imagem" 
                                        name="imagem"
                                        className="form-control" 
                                        placeholder="Informe a url da Imagem"
                                        ref={register({
                                            required: 'Imagem obrigatório'
                                            })}  />
                                    {errors.imagem && <span className="error">{errors.imagem.message}</span>}
                       </div>
                       <div className="col-4 text-center">
                           <img src={imagem} alt={nome} className="imagemLocal"/>
                       </div>
                   </div>
                   <div className="mt-4"></div>
                   <button type="submit" className="btn btn-primary">Cadastrar</button>

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
               <div className="row">
                   <div className="col-5">
                        <label htmlFor="textoFiltrado"> Filtrar por : </label>                       
                        <input type="text" value={textoFiltrado} name="textoFiltrado" placeholder="Informe o local" onChange={onChangeFiltroTexto} />
           
                   </div>
               </div>
               <DataTable
                columns={columns}
                data={locaisFiltrados}
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