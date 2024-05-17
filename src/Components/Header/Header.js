import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../Button/Button';


import './Header.css';

function Header() {
  return (
    <>

      <div className="all_menu">
        <div >
     
            <nav className='menu flex' >
              <a href="./">
                <h1>MirAy</h1>
              </a>
          
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
                  <Link to="./product">Product</Link>
                </li>
              </ul>
            
           

            <div className="Buttons flex">
            <Button>Login</Button>
            <Button>Sign In</Button>
          </div>
          <Link to="/cart" className="header_ic">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/unicons/cart-38.png" alt="" />
            
          </Link>
          </nav>

        </div>
      </div>

    </>
  );
}

export default Header;
