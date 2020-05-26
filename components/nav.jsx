import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link'
import { withRouter } from 'next/router'

export const NavLink = (props) =>
    <Link href={props.path}><a className={`nav-link ${props.pathname ? 'is-active' : ''}`}>{props.label}</a></Link>

const NavBar = ({ router: { pathname } }) =>
    <Navbar expand="lg">
        <Navbar.Brand href="/">EVF 2020</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink path="/orchestra" label="Orchestra" pathname />
                <NavLink path="/choir" label="Choir" pathname />
                <NavLink path="/about" label="About this project" pathname />
            </Nav>
            <Nav>
                <Button>Donate</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

export default withRouter(NavBar);