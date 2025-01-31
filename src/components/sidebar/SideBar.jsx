import React, { useEffect, useState } from 'react'
import './side-bar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import sidebar from '../configs/sidebar'
import { ClearRounded, LogoutRounded } from '@mui/icons-material'
import { authActions } from '../stores/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog, DialogTitle, Button, DialogActions } from '@mui/material'
import { Transition } from '../configs/functions'

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [activeIndex, setActiveIndex] = useState(0);
    
    const { isAuthed, account } = useSelector((state) => state.auth);
    const admin = isAuthed ? JSON.parse(localStorage.getItem('admin')) : [];

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebar.findIndex(item => item.section === curPath);

        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    const closeSideBar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)';
        setTimeout(() => {
            document.body.classList.remove('sidebar-open');
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    const [openLogoutPopup, setOpenLogoutPopup] = useState(false);
    const handleCloseLogoutPopup = () => setOpenLogoutPopup(false);
    const handleOpenLogoutPopup = () => setOpenLogoutPopup(true);

    //logout
    const handleLogout = () => {
        dispatch(authActions.logout(account));
        handleCloseLogoutPopup();
        navigate('/');
    };

    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <img src='https://res.cloudinary.com/dpwehcnso/image/upload/v1701279575/arcGIS/ddl_logo_p8xfe6.png' alt='QLDV Dinh Doc Lap Logo' />
                <div className="sidebar-close" onClick={closeSideBar}>
                    <ClearRounded className='icon' />
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebar.map((nav, index) => (admin.role.id === 2 || (admin.role.id !== 2 && index < 4)) && (
                        <Link to={nav.link} key={`nav-${index}`} 
                            className={`sidebar__menu__item ${activeIndex === index && 'active'}`} 
                            onClick={closeSideBar}
                        >
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item" onClick={() => {handleOpenLogoutPopup(); closeSideBar()}}>
                    <div className="sidebar__menu__item__icon">
                        <LogoutRounded />
                    </div>
                    <div className="sidebar__menu__item__txt">
                        Đăng xuất
                    </div>
                </div>

                <Dialog open={openLogoutPopup} TransitionComponent={Transition}
                    keepMounted onClose={handleCloseLogoutPopup}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Bạn có chắc chắn muốn đăng xuất?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleCloseLogoutPopup}>Không</Button>
                        <Button onClick={handleLogout}>Có</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default SideBar
