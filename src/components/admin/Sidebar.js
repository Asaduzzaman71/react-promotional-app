import { useState } from 'react';
import avatar2 from '../../assets/img/user2-160x160.jpg'
import logo from  '../../assets/img/AdminLTELogo.png'
import { NavLink } from 'react-router-dom';
export default function Sidebar(){
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [activeSubMenu, setActiveSubMenu] = useState('');
    const [isCollapseMenu, setIsCollapseMenu] = useState(false)

    const isActiveMenu = (menu, subMenu = '') => {
        if (menu == activeMenu) {
            setIsCollapseMenu(!isCollapseMenu)
        } else {
            setIsCollapseMenu(true)
        }
        setActiveMenu(menu)
        setActiveSubMenu(subMenu)
    }
    const isCurrent = (menu, subMenu = "") => {
        console.log(menu)
        if (menu && !subMenu) {
            if (activeMenu == 'dashboard' && menu == 'dashboard') return true 
            if (activeMenu == menu && isCollapseMenu) {
                return true
            } else {
                return false
            }
        } else if (menu && subMenu) {
            if (activeMenu == menu && activeSubMenu == subMenu && isCollapseMenu == true) {
                return true
            }
        } else {
            return "";
        }
    }
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                    <img src={avatar2} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                    <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className={`nav-item ${isCurrent('dashboard') ? "menu-is-opening menu-open" : ""}`} onClick={()=>isActiveMenu('dashoard')}>
                            <NavLink to="/admin" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                </p>
                            </NavLink>
                        </li>
                        <li className={`nav-item ${isCurrent('user') ? "menu-is-opening menu-open" : ""}`} onClick={()=>isActiveMenu('user')}>
                            <NavLink to="/admin/users" className="nav-link">        
                                <i className="nav-icon fas fa-chart-pie"></i>
                                <p>
                                    Users
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/admin/users" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>List</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin/users/create" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Create</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}