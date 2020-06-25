import { Container, Row, Col } from 'react-bootstrap';
import Nav from './nav'
import Footer from './footer'
import Head from 'next/head'
import Link from 'next/link'

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
        <Footer />
    </>

export default Layout;