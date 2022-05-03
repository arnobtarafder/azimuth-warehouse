import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from "../../firebase.init";



const NavigationBar = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }



  return (
    <Navbar sticky="top" expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/128/7380/7380986.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Azimuth Warehouse
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/inventories">Inventory</Nav.Link>

          </Nav>

          <Nav.Item>

            {
              user &&

              <>


                <NavDropdown title="Inventory Management" id="collapsible-nav-dropdown">

                  <NavDropdown.Item as={Link} to="/MyInventory">My Inventory</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/manageInventory">Manage Inventory</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/addItems">Add Items</NavDropdown.Item>

                </NavDropdown>


              </>

            }

          </Nav.Item>
          <Nav>


            <Nav.Item>


              {
                user ?
                  <Link to='/' className='nav-link'>
                    <button onClick={handleSignOut}
                      className='btn btn-danger btn-rounded rounded-pill'
                    >
                      Sign out
                    </button>
                  </Link>
                  :
                  <Link to='/signUp' className='nav-link'>
                    <button
                      className='btn btn-danger'
                    >
                      Sign up
                    </button>
                  </Link>
              }

            </Nav.Item>


            <Nav.Item>

              {
                user ?

                  <Link to='/userProfile' className='nav-link'>
                    <img className='ml-3 ms-3 rounded-3 me-1' src={
                      user ? user?.photoURL : "https://cdn-icons-png.flaticon.com/128/3237/3237472.png"} width="35px" alt="" />

                    {/* {user?.displayName ? user.displayName.split(" ")[0] : "mr.user"} */}
                  </Link>

                  :

                  <Link to='/signIn' className='nav-link pt-3 pe-4 fw-bolder'>Sign in</Link>
              }
            </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;