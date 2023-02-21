import React from 'react'
import { CartWidget } from './CartWidget';
import './NavBar.css'
// import logo from '../../public/logo512.png';

export const NavBar = () => {
    return (
        <>
        {/* <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div> */}
        <div className="headerTitulo" >
            <h1 className="tituloPrincipal" >
                Happy Service
            </h1>    
        </div>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Quienes Somos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contactanos</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Servicios Prestados</a>             
                            <ul class="dropdown-menu bg-dark">
                                <li><a class="dropdown-item text-white " href="#">Desarrollo Web</a></li>
                                <li><a class="dropdown-item text-white " href="#">Instalacion Camaras</a></li>
                                <li><a class="dropdown-item text-white " href="#">Paid Media</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>
        </>
    );
}


