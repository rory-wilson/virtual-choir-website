import { Container, Row, Col } from 'react-bootstrap';
import Nav from './nav'
import Head from 'next/head'

const Layout = ({ title, children }) =>
    <>
        <Head> <title>{title} - Edinburgh Virtual Festival 2020</title></Head>
        <Container>
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