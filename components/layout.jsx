import { Container, Row, Col } from 'react-bootstrap';
import Nav from './nav'
import Head from 'next/head'

const Layout = ({ title, children }) =>
    <>
        <Head> <title>{title} - Edinburgh Beethoven 2020</title></Head>
        <Container className='nav-container'>
            <Row>
                <Col>
                    <header>
                        <Nav />
                    </header>
                </Col>
            </Row>
        </Container>
        {children}
    </>

export default Layout;