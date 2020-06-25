import Layout from '../../components/layout';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
    return <Layout title="About">
        <Container>
            <Row>
                <Col md="8">
                    <main>
                        <h1>About the project</h1>
                        <p>Since 1947 Edinburgh has welcomed artists from around the world every August. The festivals started as a way to bring people together after a global crisis. During this year when it will be impossible to perform together in person, we are inviting musicians to join in this virtual performance of Beethoven’s “Ode to Joy” as a symbol of our solidarity with musicians and audiences around the world and a sign of hope that we will welcome them to Edinburgh next year.
                    </p><p>
                            We are also conscious that many professional musicians are struggling right now and will have lost a lot of work from the festivals while falling between the gaps of government support schemes. We are asking people to <a href="https://www.justgiving.com/fundraising/edinburghbeethoven2020">donate</a> what they might have spent on attending a concert this summer to <a target="_blank" href="https://www.helpmusicians.org.uk/">Help Musicians</a>, a charity which provides support for musicians at times of crisis and which has been providing hardship funding during the Coronavirus situation.</p>

                        <h2>About the charity</h2>
                        <img src="/images/HMLogo_BLACK_2020.jpg" align="left" alt="Help Musicians Logo" style={{ width: 200, 'margin-right': 10 }} />
                        <p><a target="_blank" href="https://www.helpmusicians.org.uk/">Help Musicians</a> is an independent UK charity for professional musicians of all genres, from starting out through to retirement.</p>
                        <p>
                            They help at times of crisis, but also at times of opportunity, giving people the extra support they need at a crucial stage that could make or break their career. </p>
                        <p>During the Coronavirus pandemic, they have set up a Coronavirus Hardship Fund to support musicians who are struggling due to the crisis</p>
                        <p>To find out more, <a target="_blank" href="https://www.helpmusicians.org.uk/">visit the Help Musicians Website</a>.</p>

                        <h2>About the conductor</h2>
                        <img src="/images/iain.jpg" align="left" alt="Photograph of Iain McLarty, Conductor" style={{ width: 300, 'margin-right': 10 }} />
                        <p>
                            Scottish conductor <a target="_blank" href="https://www.iainmclarty.co.uk/">Iain McLarty</a> studied in the Soloist Class at the Royal Danish Academy of Music (DKDM) in Copenhagen conducting many of the professional Danish orchestras and assisting for productions with the Royal Danish Opera Academy. He is committed to performing contemporary music, giving numerous premières in both Scandinavia and the UK, and has taken part in masterclasses with the London Sinfonietta, Norwegian Radio Orchestra and BBC Singers. In Scotland he has worked with groups across the country, performing much of the standard orchestral and choral repertoire as well as such diverse pieces as a concerto for birds and orchestra, choral works for forty individual voices, and a new opera based on reality TV.
                        </p><p>He is currently Musical Director of the Scottish Chamber Choir and Conductor of the St Andrews Symphony Orchestra as well as a regular guest conductor with the Edinburgh University String Orchestra. He has previously held positions as Sir Alexander Gibson Conducting Fellow with the Royal Scottish National Orchestra Chorus and Herrick Bunney Organ Scholar at St Giles’ Cathedral, Edinburgh.</p>

                        <h2>Thanks</h2>
                        <p>Thanks to the <a href="https://www.facebook.com/FyrishStringQuartet/" target="_blank">Fyrish String Quartet</a> for their help in putting together the orchestra conductor video.</p>
                    </main>
                </Col>
            </Row>
        </Container>
    </Layout >
}

export default AboutPage