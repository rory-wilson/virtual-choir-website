import Layout from '../components/layout';
import { Container, CardDeck, Card, Jumbotron } from 'react-bootstrap';
import Link from 'next/link'

function HomePage() {
    return <Layout title="Home">
        <Jumbotron fluid className="home-banner">
            <Container>
                <h1 className="display-4">Edinburgh Virtual<br />
Festival Project 2020</h1>

            </Container>
        </Jumbotron>
        <Container className="clearfix py-5">
            <section className="home-cta p-2">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/images/orchestra.jpg" />
                        <Card.Footer className="text-center">
                            <Link href="/orchestra"><a className="stretched-link">Orchestra</a></Link>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/choir.jpg" />
                        <Card.Footer className="text-center">
                            <Link href="/choir"><a className="stretched-link">Choir</a></Link>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/dunno.jpg" />
                        <Card.Footer className="text-center">
                            <a href="/donate" className="stretched-link">Donate</a>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </section>
            <section>
                <p>25 days until deadline</p>
                <p>45 days until premier</p>
            </section>
        </Container>
        <section className="py-5">
            <Container>
                <h2>Our goal</h2>
                <p>
                    To bring together the amateur choirs and orchestras of Edinburgh for a performance of the chorale from Beethoven's 9th Symphony.
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