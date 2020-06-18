import Layout from '../components/layout';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faImage, faFileDownload } from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'

function ChoirPage() {
    return <Layout title="Choir">
        <Container>
            <Row>
                <Col md="8">
                    <h1>Instructions for Choir</h1>
                    <section>
                        <p class="lead">We want you to record a video of yourself singing the famous chorus from Beethoven's 9th symphony.</p>
                        <p>To take part you'll need to </p>
                        <ol class="list-number">
                            <li><a href="#music">download a copy of the score</a> <FontAwesomeIcon title="PDF" icon={faFilePdf} aria-label="PDF" /></li>
                            <li><a href="#ready">get ready to record</a></li>
                            <li><a href="#conductor-video">record your video</a>, and </li>
                            <li><a href="#result">send us the result</a></li>
                        </ol>
                    </section>
                    <section id="ready">
                        <h2>Get ready to record</h2>
                        <p>Before you start, make sure that:</p>
                        <ul class="list-bullet">
                            <li> that you are in a well-lit place and we can see your face.</li>
                            <li> that you are in front of a plain wall if possible</li>
                            <li> you are recording in landscape <FontAwesomeIcon title="Landscape" icon={faImage} aria-label="Landscape" /> and not portrait</li>
                            <li> you are in frame, with your head and shoulders clearly visible straight on like a passport photograph</li>
                            <li> you are not too far away that we can’t hear you and that you’re not too close that your sound is distorted</li></ul>
                    </section>
                    <section id="conductor-video">
                        <h2>Record your video</h2>
                        <ul class="list-bullet">
                            <li>You'll need to watch the conducting video and listen to it on headphones - there's a backing track to help you but we don't want to capture it on your microphone!</li>
                            <li>Watch the conducting video through once so you get the idea</li>
                            <li>Start your video recording and then the conducting video and sing along</li>
                            <li>When you're finished, watch the video back and check that you're in frame all the time and that your voice isn't too quiet or too loud!</li>
                        </ul>
                        <p>For help recording a video on mac, pc, iphone or android, <Link href="/help"><a>visit our help page</a></Link>.</p>
                    </section>
                    <section id="result">
                        <h2>Send us the result</h2>
                        <p>Once you're recorded your video, send us an email at <a href="mailto:edinburghbeethoven2020.org@gmail.com">edinburghbeethoven2020.org@gmail.com</a> and we'll send you instructions.</p>
                    </section>
                </Col>
                <Col md="4">
                    <h2 id="#music">Music</h2>
                    <ListGroup>
                        <ListGroup.Item action href="#link1"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Choir Part</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </Layout >
}

export default ChoirPage