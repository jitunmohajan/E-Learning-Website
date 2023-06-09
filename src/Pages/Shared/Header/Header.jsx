import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const {user, setUser, logOut} = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () =>{
        logOut()
        .then(() => {
          console.log('logout');
          setUser(null);
        }).catch((error) => {
          console.error(error);
        });
    }
    console.log(user);
    return (
        
        <Navbar className='header pt-3 pb-3' bg="" expand="lg">
            <Container>
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                  {/* <NavLink className='text-white ' to='/'>E Learning</NavLink> */}
                  <Navbar.Brand className='text-white ' href="#home">E-Learning</Navbar.Brand>
                </Navbar.Brand>
              </Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavLink  className="me-2 nav-design" to='/'>Home</NavLink>
                  <NavLink className="me-2 nav-design" to='/courses'>Courses</NavLink>
                  <NavLink  className="me-2 nav-design" to='/'>FAQ</NavLink>
                  <NavLink  className="me-2 nav-design" to='/blogs'>Blogs</NavLink>
                  {/* <NavLink className="me-2 nav-design" to='*'>{user?.displayName}</NavLink> */}

                  {
                    user?.displayName? 
                    <>
                      <img className='img-icon' src={user?.photoURL} alt="" />
                      <button className="logOut-btn" onClick={handleLogOut}>LogOut</button>
                    </>
                    :
                    <NavLink className="nav-design"  to='/login'>LogIn</NavLink>
                  }
                  
                  
                </Nav>
                
              </Navbar.Collapse>

            </Container>
        </Navbar>
       
    );
};

export default Header;