import React, {useState} from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Button
} from "reactstrap";

const Header = ({info}) =>{
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);
   const {
            logged_in,
            sign_in_route,
            sign_out_route
          } = info

  
        return (
            <>
            <Navbar color="medium" light expand="md">
              <NavbarBrand href="/"><h1>Apartments</h1></NavbarBrand>
              <NavbarToggler onClick={toggle}/>
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                { logged_in &&
            <NavItem style={{width:"150px"}}>
                <a href={ sign_out_route }><h2>Sign In</h2></a>
            </NavItem>
          }
          { !logged_in &&
            <NavItem style={{width:"150px"}}>
              <a style={{textAlign:"center"}} href={ sign_in_route }><h2>Sign In</h2></a>
            </NavItem>
          }
            <NavItem>
            <NavLink href="/apartmentindex">
                <h1>See All Apartments</h1>
            </NavLink>
            </NavItem>
            <NavItem>
            {logged_in && <NavLink to={`/newapartments`}><Button>create apartment</Button></NavLink> }
            </NavItem>
            </Nav>
            </Collapse>
            </Navbar>
            </>
        )
    }

export default Header;

