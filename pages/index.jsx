import Layout from '../components/layout';
import { Container, CardDeck, Card, Jumbotron, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViolin, faUserMusic, faBoxHeart } from '@fortawesome/pro-solid-svg-icons'

function HomePage() {
    return <Layout title="Home">
        <Jumbotron fluid className="home-banner">
            <Container>
                <h1 className="display-3">Edinburgh<br /> Beethoven<br /> 2020</h1>

            </Container>
        </Jumbotron>
        <Container className="clearfix">
            <Row>
                <Col md="4" l="3">
                    <Row>
                        <Col>
                            <div className="bg-warning text-center rounded-lg p-3 border countdown clearfix"><span className="display-4">14</span> days until deadline</div>
                        </Col>
                    </Row>
                </Col>
                <Col md="8" l="9">
                    <div className="home-cta p-2">
                        <CardDeck>
                            <Card>
                                <FontAwesomeIcon size="6x" icon={faViolin} />
                                <Card.Footer className="text-center">
                                    <Link href="/orchestra"><a className="stretched-link">Orchestra</a></Link>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <FontAwesomeIcon size="6x" icon={faUserMusic} />
                                <Card.Footer className="text-center">
                                    <Link href="/choir"><a className="stretched-link">Choir</a></Link>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <FontAwesomeIcon size="6x" icon={faBoxHeart} />
                                <Card.Footer className="text-center">
                                    <a href="/donate" className="stretched-link">Donate</a>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </Col>
            </Row>
        </Container>
        <section className="py-5">
            <Container>
                <h2>We need you!</h2>
                <p>
                    To bring together the amateur choirs and orchestras of Edinburgh for a performance of the chorale from Beethoven's 9th Symphony.
                </p>
                <p>If you play an instrument, or sing in a choir, click the links above to find out how you can take part!</p>
                <p>Then check back here after the premier and share the video we create together far and wide.</p>
                <p>
                    <Link href="/about"><a>Find out more about this project</a></Link>
                </p>
            </Container>
        </section>
        <section className="dark-bg py-5">
            <Container>
                <p>Since 1947 Edinburgh has welcomed artists from around the world every August. The festivals started as a way to bring people together after a global crisis.</p>
                <p>
                    During this year when it will be impossible to welcome visitors, the musicians of Scotland offer this performance to their fellow performers from around the world as a symbol of our solidarity in this difficult time.
                </p>
            </Container>
        </section>
    </Layout >
}

export default HomePage