import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavbarBrand } from "reactstrap";



const Header = props => {
    return (
        <div>
            <Navbar style={{ backgroundColor: '#2f73ba' }}>
                <NavbarBrand href="/" className='company' style={{
                    color: 'white', fontSize: '30px'
                }}>trycatch overflow</NavbarBrand>
                <Nav>
                    <NavItem className='ml-auto' >
                        <Link className="nav-link" to="/login" style={{ color: 'white' }}>
                            {props.title1}
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/signup" style ={{color:'white'}}>
                            {props.title2}
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
