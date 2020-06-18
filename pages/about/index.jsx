import Layout from '../../components/layout';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
    return <Layout title="About">
        <Container>
            <Row>
                <Col md="8">
                    <h1>About the project</h1>
                    <p>Since 1947 Edinburgh has welcomed artists from around the world every August. The festivals started as a way to bring people together after a global crisis. During this year when it will be impossible to perform together in person, we are inviting musicians to join in this virtual performance of Beethoven’s “Ode to Joy” as a symbol of our solidarity with musicians and audiences around the world and a sign of hope that we will welcome them to Edinburgh next year.
                    </p><p>
                        We are also conscious that many professional musicians are struggling right now and will have lost a lot of work from the festivals while falling between the gaps of government support schemes. We are asking people to donate what they might have spent on attending a concert this summer to Help Musicians (link to:https://www.helpmusicians.org.uk), a charity which provides support for musicians at times of crisis and which has been providing hardship funding during the Coronavirus situation.</p>

                    <h2>About the charity</h2>
                    <p>Musicians Benevolent Fund - Coronavirus Hardship Fund to support musicians who are struggling due to the crisis</p>
                </Col>
            </Row>
        </Container>
    </Layout >
}

export default AboutPage