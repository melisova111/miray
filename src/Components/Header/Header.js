import { Link } from 'react-router-dom';
import React from 'react';


import './Header.css';
function Header() {
  return (
    <>

      <div className="all_menu">
        <div >
            <nav className='menu flex' >
              <ul className='menu flex'>
                <li>
                  <Link to="./">Home</Link>
                </li>
                <li>
                  <Link to="./about">Shop all</Link>
                </li>
                <li>
                  <Link to="./delivery">Delivery</Link>
                </li>
                <li>
                  <Link to="./contact">Contact</Link>
                </li>
                <li>
                  <Link to="./cart">Cart</Link>
                </li>
              </ul>
            </nav>


        </div>
      </div>

    </>
  );
}

export default Header;
