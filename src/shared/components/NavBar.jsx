import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navbarCSS from '../styles/Bars.module.css';
import { AuthContext } from '../context/AuthContext';
import { FiUser, FiClock, FiActivity, FiPackage, FiLogOut, FiBookOpen, FiUsers } from "react-icons/fi";

function NavBar() {
    const { logout } = useContext(AuthContext);

    const _exitButton = () => {
        logout();
    }

    const isSelected = (path) => {
        return window.location.pathname === path ? navbarCSS.selected : '';
    }

    return (
        <div className={navbarCSS.navbar}>
            <div className={navbarCSS.logo}>
                <img src="/ColdUCU.svg" alt="Cold UCU" className={navbarCSS.logo} />
            </div>
            <nav className={navbarCSS.navigation}>
                <ul>
                    <li>
                        <Link to="/usuarios" className={navbarCSS.navItem + ' ' + isSelected('/usuarios')}>
                            <FiUsers size={22} />
                            <span>Usuarios</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/clases" className={navbarCSS.navItem + ' ' + isSelected('/clases')}>
                            <FiClock size={22} />
                            <span>Clases</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/equipamiento" className={navbarCSS.navItem + ' ' + isSelected('/equipamiento')}>
                            <FiPackage size={22} />
                            <span>Equipamiento</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reportes" className={navbarCSS.navItem + ' ' + isSelected('/reportes')}>
                            <FiBookOpen size={22} />
                            <span>Reportes</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={navbarCSS.extras}>
                <button className={navbarCSS.navItem} onClick={_exitButton}>
                    <FiLogOut size={22} />
                    <span>Salir</span>
                </button>
            </div>
        </div>
    );
}

export default NavBar;
