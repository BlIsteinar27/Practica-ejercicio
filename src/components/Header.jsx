import React from 'react'
import { Link } from 'react-router-dom'




const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to="/inicio" className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/inicio" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nosotros" className="nav-link active" aria-current="page" href="#">Nosotros</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Continentes
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to={`/continentes/region/asia`} className='dropdown-item' href="#">Asia</Link></li>
                                    <li><Link to={`/continentes/region/africa`} className='dropdown-item' href="#">Africa</Link></li>
                                    <li><Link to={`/continentes/region/europe`} className='dropdown-item' href="#">Europa</Link></li>
                                    <li><Link to={`/continentes/region/america`} className='dropdown-item' href="#">America</Link></li>
                                    <li><Link to={`/continentes/region/oceania`} className='dropdown-item' href="#">Oceania</Link></li> 
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactos" className="nav-link" href="#">Contactos</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header