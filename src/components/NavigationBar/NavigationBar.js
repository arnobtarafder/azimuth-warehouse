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
    <Navbar sticky="top" expand="lg" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={30} src="https://cdn-icons-png.flaticon.com/128/987/987748.png?ga=GA1.1.208812877.1649674070" type="image/x-icon" alt="" /> <span className='ps-3 pe-4 text-secondary'>Azimuth Warehouse</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-dark' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to="/blogs">Blogs</Nav.Link>

            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/course/1">Bangla</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/course/2">Math</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/course/3">English</NavDropdown.Item>
            <NavDropdown.Divider />
            </NavDropdown>
          </Nav>

          <Nav.Item>

            {
              user ?

              <Nav.Link  className='text-dark' as={Link} to="/home#services">Inventory Items</Nav.Link> +
              <Nav.Link className='text-dark' as={Link} to="/blogs">Manage Inventories</Nav.Link>
              : ""
            }

          </Nav.Item>
          <Nav>

            <Nav.Item>
              {
                user ?

                  <Link to='/checkout' className='nav-link'>
                    {user?.displayName ? user.displayName : "mr.user"}
                    <img className='ml-3 ms-2 rounded-circle' src={user?.photoURL ? user?.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTZa9zbpSzXR8zIpsVu_ttX7xukvQPOjXew&usqp=CAU"} width="35px" alt="" />
                  </Link>

                  :

                  <Link to='/authentication' className='nav-link pt-3 pe-4 fw-bolder'>Sign in</Link>
              }
            </Nav.Item>

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
                  <Link to='/registration' className='nav-link'>
                    <button
                      className='btn btn-danger rounded-pill'
                    >
                      Sign up
                    </button>
                  </Link>
              }

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;