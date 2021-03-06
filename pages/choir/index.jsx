import Layout from '../../components/layout';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faImage, faFileDownload, faTv } from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'
import Countdown from '../../components/countdown';


function ChoirPage() {
    return <Layout title="Choir">
        <Container>
            <Row>
                <Col md="8">
                    <main>
                        <h1>Instructions for Choir</h1>
                        <section>
                            <p className="lead">We want you to record a video of yourself singing the famous chorus from Beethoven's 9th symphony.</p>
                            <p>To take part you'll need to </p>
                            <ol className="list-number">
                                <li><a href="/pdf/Beethoven9abridged-Choir.pdf">download a copy of the score</a> <FontAwesomeIcon title="PDF" icon={faFilePdf} aria-label="PDF" /></li>
                                <li><a href="#ready">get ready to record</a></li>
                                <li><a href="#conductor-video">record your video</a>, and </li>
                                <li><a href="#result">send us the result</a></li>
                            </ol>
                        </section>
                        <section id="ready">
                            <h2>Get ready to record</h2>
                            <p>Before you start, make sure that:</p>
                            <ul className="list-bullet">
                                <li> you are in a well-lit place and we can see your face</li>
                                <li> you are in front of a plain wall if possible</li>
                                <li> there is little to no background noise</li>
                                <li> you are recording in landscape <FontAwesomeIcon title="Landscape" icon={faImage} aria-label="Landscape" /> and not portrait</li>
                                <li> you are in frame, with your head and shoulders clearly visible straight on like a passport photograph</li>
                                <li> you are not too far away that we can’t hear you and that you’re not too close that your sound is distorted</li></ul>
                        </section>
                        <section id="conductor-video">
                            <h2>Record your video</h2>
                            <ul className="list-bullet">
                                <li>You'll need to watch the <Link href="/choirvideo"><a>conducting video</a></Link> and listen to it on headphones - there's a backing track to help you but we don't want to capture it on your microphone!</li>
                                <li>Watch the <Link href="/choirvideo"><a>conducting video</a></Link> through once so you get the idea</li>
                                <li>Start your video recording and then the <Link href="/choirvideo"><a>conducting video</a></Link> and sing along</li>
                                <li>Try not to make any noise before you start to sing</li>
                                <li>When you're finished, watch the video back and check that you're in frame all the time and that your voice isn't too quiet or too loud!</li>
                            </ul>
                            <p>For help recording a video on mac, pc, iphone or android, <Link href="/help"><a>visit our help page</a></Link>.</p>
                        </section>
                        <section id="result">
                            <h2>Send us the result</h2>
                            <p>Once you're recorded your video, send us an email at <a href="mailto:edinburghbeethoven2020@gmail.com">edinburghbeethoven2020@gmail.com</a> and we'll send you instructions.</p>
                        </section>
                    </main>
                </Col>
                <Col md="4">
                    <Countdown />
                    <aside>
                        <h2 id="#music">Downloads</h2>
                        <ListGroup>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Choir.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Choir Part</ListGroup.Item>
                            <ListGroup.Item action href="https://637385f1-4e3f-4aeb-8d1a-50703f93bf66.filesusr.com/ugd/bb8af4_020bedc18d4a4a6f8795a55c7d5d4b6d.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Pronounciation Guide</ListGroup.Item>
                            <ListGroup.Item action href="https://www.youtube.com/watch?v=G8MeAsy0gGE"><FontAwesomeIcon title="Watch" icon={faTv} aria-label="Watch" /> Watch Pronounciation Guide</ListGroup.Item>

                        </ListGroup>
                    </aside>
                </Col>
            </Row>
        </Container>
    </Layout >
}

export default ChoirPage