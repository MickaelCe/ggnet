import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Burger = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes className='fa-times'/> : <FaBars className='fa-bars'/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Burger