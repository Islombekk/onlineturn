import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper blue px1">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Запись к врачу</NavLink></li>
                <li><NavLink to="/about">Расписание врача</NavLink></li>
            </ul>
        </div>
    </nav>
)