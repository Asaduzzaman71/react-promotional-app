import { useState, useEffect } from 'react';
import avatar2 from '../../assets/img/user2-160x160.jpg'
import logo from  '../../assets/img/AdminLTELogo.png'
import { NavLink } from 'react-router-dom';
export default function Sidebar(){
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [isCollapseMenu, setIsCollapseMenu] = useState(false)
    useEffect(() => {
        console.log('activeMenu after render', activeMenu);
        console.log('isCollapseMenu after render', isCollapseMenu);
    }, [activeMenu, isCollapseMenu]);
    const openMenuItemsFor = (menu) => {
        console.log('Clicked menu:', menu);
        console.log('Previous activeMenu:', activeMenu);
        if (activeMenu !== menu) {
          setIsCollapseMenu((prevIsCollapseMenu) => !prevIsCollapseMenu);
        }
        setActiveMenu(menu);
        console.log('Updated activeMenu:', activeMenu);
        console.log('Updated isCollapseMenu:', isCollapseMenu);
    }
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            <h6>{activeMenu}{isCollapseMenu}</h6>
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
                        <li className={`nav-item`} onClick={ () => openMenuItemsFor('dashboard') }>
                            <NavLink to="/admin" className='nav-link' end>
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard { activeMenu === 'dashboard' && isCollapseMenu ? 'true' : 'false'}
                                </p>
                            </NavLink>
                        </li>
                        <li className={`nav-item ${  activeMenu === 'user' && isCollapseMenu ? " menu-open" : ""}`} onClick={ () => openMenuItemsFor('user') }>
                            <NavLink to="/admin/users" className='nav-link' >        
                                <i className="nav-icon fas fa-chart-pie"></i>
                                <p>
                                    Users { activeMenu === 'user' && isCollapseMenu ? 'true' : 'false'}
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/admin/users" className='nav-link'>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>List</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin/users/create" className='nav-link'>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Create</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className={`nav-item ${ activeMenu === 'blog' && isCollapseMenu ? "menu-open" : ""}`} onClick={ ()=> openMenuItemsFor('blog') } >
                            <NavLink to="/admin/blogs" className='nav-link' >        
                                <i className="nav-icon fas fa-chart-pie"></i>
                                <p>
                                    Blogs {  activeMenu === 'blog' && isCollapseMenu ? 'true' : 'false'}
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/admin/blogs" className='nav-link'>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>List</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin/blogs/create" className='nav-link'>
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