import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = ({ menus }) => {
  // const [menuLeft, setMenuLeft] = useState([]);
  // const [menuRigth, setMenuRigth] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <>
      <header>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                  <div className='letter'>
                    SIG-SIGMA
                  </div>
                  {/* <div className='description'>
                    <div>SERGIO</div>
                    <div>GALLEGOS</div>
                    <div>WEB</div>
                  </div> */}
                </div>
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <div className="navigation">
                      {
                        menus.map((m, index) => {
                          return (
                            <>
                                <NavLink key={`${ index }-${ m.id }`} to={ m.path } className={({ isActive }) => isActive ? 'active' : ''} >
                                <div className='item'>
                                    {m.name}
                                </div>
                                </NavLink>
                            </>
                          )
                        })
                      }
                    </div>
                  </nav>
                </div>
                <div className="header-info-right d-none d-lg-block">
                  <a href="#" className="btn header-btn">Let's Talk <i className="ti-arrow-right"></i></a>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}
