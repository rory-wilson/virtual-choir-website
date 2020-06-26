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

            </Container>
        </Jumbotron>
        <Container className="clearfix">
            <Row>
                <Col md="4" l="3">
                    <Row>
                        <Col>
                            <Countdown />
                        </Col>
                    </Row>
                </Col>
                <Col md="8" l="9">
                    <div className="home-cta p-2">
                        <CardDeck>
                            <Card>
                                <FontAwesomeIcon size="6x" icon={faViolin} className="d-none d-sm-block" />
                                <Card.Footer className="text-center">
                                    <Link href="/orchestra"><a className="stretched-link">Orchestra</a></Link>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <FontAwesomeIcon size="6x" icon={faUserMusic} className="d-none d-sm-block" />
                                <Card.Footer className="text-center">
                                    <Link href="/choir"><a className="stretched-link">Choir</a></Link>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <FontAwesomeIcon size="6x" icon={faBoxHeart} className="d-none d-sm-block" />
                                <Card.Footer className="text-center">
                                    <a href="https://www.justgiving.com/fundraising/edinburghbeethoven2020" className="stretched-link">Donate</a>
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
                    For the first time since 1947 there will be no concerts in Edinburgh this August. But we can still perform together!
                </p>
                <p>
                    We are inviting musicians to join this virtual performance of Beethoven’s “Ode to Joy” as a symbol of our solidarity with musicians and audiences around the world and a sign of hope that we will welcome them to Edinburgh next year.</p>
                <p>
                    We will also be using this to raise money for <a href="https://www.helpmusicians.org.uk">Help Musicians</a>, a charity which provides support for musicians at times of crisis and which has been providing hardship funding during the Coronavirus situation.</p>
                <p>
                    If you <Link href="/orchestra"><a>play an instrument</a></Link>, or <Link href="/choir"><a >sing in a choir</a></Link>, click the links above to find out how you can take part!</p>
                <p>
                    Then check back here after the premiere and share the video we create together far and wide.
                </p>
                <p>
                    <Link href="/about"><a>Find out more about this project</a></Link>
                </p>
            </Container>
        </section>
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