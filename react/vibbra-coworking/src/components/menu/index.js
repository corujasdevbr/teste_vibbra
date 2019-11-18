import React from 'react'

function Menu() {


    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    {/* <li className="nav-item">
                            <a className={window.location.pathname ==='/admin/dashboard' ? "nav-link active" : "nav-link" } href="/admin/dashboard">
                                <span data-feather="home"></span>
                                Dashboard
                            </a>
                        </li> */}
                    <li className="nav-item">
                        <a className={window.location.pathname === '/admin/locais' ? "nav-link active" : "nav-link"} href="/admin/locais">
                            <span data-feather="file"></span>
                            Locais <span className="sr-only">(current)</span>
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Menu;