import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    return (
        <nav>
            <div>Minha Aplicação</div>
            <div>☰</div>
            <ul>
                <li><Link to = "/">Início</Link></li>
                <li><Link to = "/sobre">Sobre</Link></li>
                <li><Link to = "/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;