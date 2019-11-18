/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function HeaderAdmin(props) {

    const sair = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 text-center" href="#">
                <img src="https://vibbra.com.br/src/images/logo.svg" alt="Vibbra Work" className="logo" />
            </a>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#" onClick={() => sair()}>Sair</a>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderAdmin;