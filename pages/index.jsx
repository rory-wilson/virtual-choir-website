import Layout from '../components/layout';
import { Container, CardDeck, Card, Jumbotron, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViolin, faUserMusic, faBoxHeart } from '@fortawesome/pro-solid-svg-icons'
import Countdown from '../components/countdown';


function HomePage() {
    return <Layout title="Home">
        <Jumbotron fluid className="home-banner">
            <Container>
                <h1 className="display-3">Edinburgh<br /> Beethoven<br /> 2020</h1>
                <img src="/images/HMLogo.png" alt="Help Musicians logo" width={200} className="helpmusicians-logo" />
            </Container>
        </Jumbotron>
        <Container className="clearfix py-5">
            <Row>
                <Col md="4" l="3">
                    <Row>
                        <Col>
                            <Countdown />
                        </Col>
                    </Row>
                </Col>
                <Col md="8" l="9">
                    <section>
                        <h2>Thank you!</h2>
                        <p>
                            Thank you to everyone who sent us a video. We're working hard to edit them together. Check back here to see the finished result.
                </p>
                        <p>
                            <Link href="/about"><a>Find out more about this project</a></Link>
                        </p>
                    </section>
                </Col>
            </Row>
        </Container>
        <section className="dark-bg py-5">
            <Container>
                <aside>
                    <p>Since 1947 Edinburgh has welcomed artists from around the world every August. The festivals started as a way to bring people together after a global crisis.</p>
                    <p>
                        During this year when it will be impossible to welcome visitors, the musicians of Scotland offer this performance to their fellow performers from around the world as a symbol of our solidarity in this difficult time.
                </p>
                </aside>
            </Container>
        </section>
    </Layout >
}

export default HomePage