import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InfoIcon from '@material-ui/icons/Info';

import logo from '../../images/favicon.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const useStyles = makeStyles({
    navbarHeight: {
      height: isOpen ? '80vh' : 'auto',
    },
  });

  const classes = useStyles();

  return (
    <Navbar style={{ backgroundColor: '#1d1d1d' }} dark expand="md" className="mb-5">
      <Container>
        <NavbarBrand>
          <img src={logo} alt="logo" width="45px" height="45px" />
        </NavbarBrand>
        <NavbarToggler onClick={handleToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`${classes.navbarHeight} ml-auto`} navbar>
            <NavItem className="navbar-margins">
              <Link
                to="about"
                smooth
                duration={500}
                className="navbar-button"
                tabIndex="0"
                onClick={() => setIsOpen(false)}
              >
                <span>
                  <PersonIcon fontSize="large" /> About
                </span>
              </Link>
            </NavItem>
            <NavItem className="navbar-margins">
              <Link
                to="projects"
                smooth
                duration={500}
                className="navbar-button"
                tabIndex="0"
                onClick={() => setIsOpen(false)}
              >
                <span>
                  <AssignmentIcon fontSize="large" /> Projects
                </span>
              </Link>
            </NavItem>
            <NavItem className="navbar-margins">
              <Link
                to="contact"
                smooth
                duration={500}
                className="navbar-button"
                tabIndex="0"
                onClick={() => setIsOpen(false)}
              >
                <span>
                  <InfoIcon fontSize="large" /> Contact
                </span>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
