import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link'
import { withRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/pro-solid-svg-icons'

export const NavLink = (props) =>
    <Link href={props.path}><a className={`nav-link ${props.pathname ? 'is-active' : ''}`}>{props.label}</a></Link>

const NavBar = ({ router: { pathname } }) =>
    <Navbar expand="lg">
        <Navbar.Brand href="/"><FontAwesomeIcon title="Home" icon={faHome} aria-label="Home" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink path="/about" label="About this project" pathname />
                <NavLink path="/orchestra" label="Orchestra" pathname />
                <NavLink path="/choir" label="Choir" pathname />
            </Nav>
            <Nav>
                <Button>Donate</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

export default withRouter(NavBar);