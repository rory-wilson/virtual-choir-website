import Layout from '../../components/layout';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faImage, faFileDownload } from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'
import Countdown from '../../components/countdown';

function OrchestraPage() {
    return <Layout title="Orchestra">
        <Container>
            <Row>
                <Col md="8">
                    <main>
                        <h1>Instructions for Orchestra</h1>
                        <section>
                            <p class="lead">We want you to record a video of yourself playing the famous final movement from Beethoven's 9th symphony.</p>
                            <p>To take part you'll need to </p>
                            <ol class="list-number">
                                <li><a href="#music">download a copy of the score for your instrument</a> <FontAwesomeIcon title="PDF" icon={faFilePdf} aria-label="PDF" /></li>
                                <li><a href="#ready">get ready to record</a></li>
                                <li><a href="#conductor-video">record your video</a>, and </li>
                                <li><a href="#result">send us the result</a></li>
                            </ol>
                        </section>
                        <section id="ready">
                            <h2>Get ready to record</h2>
                            <p>Before you start, make sure that:</p>
                            <ul class="list-bullet">
                                <li> that you are in a well-lit place and we can see you and your instrument clearly</li>
                                <li> there is little to no background noise</li>
                                <li> you are recording in landscape <FontAwesomeIcon title="Landscape" icon={faImage} aria-label="Landscape" /> and not portrait</li>
                                <li> you are not too far away that we can’t hear you and that you’re not too close that your sound is distorted</li></ul>
                        </section>
                        <section id="conductor-video">
                            <h2>Record your video</h2>
                            <ul class="list-bullet">
                                <li>You'll need to watch the <Link href="/orchestravideo"><a>conducting video</a></Link> and listen to it on headphones - there's a backing track to help you but we don't want to capture it on your microphone!</li>
                                <li>Watch the <Link href="/orchestravideo"><a>conducting video</a></Link> through once so you get the idea</li>
                                <li>Start your video recording and then the <Link href="/orchestravideo"><a>conducting video</a></Link> and play along</li>
                                <li>Try not to make any noise before you start to play</li>
                                <li>Just record when your part starts - you don't need to sit through lots of empty bars</li>
                                <li>If you have a long rest in the middle, its okay to record two videos</li>
                                <li>When you're finished, watch the video back and check that you're in frame all the time and that your playing isn't too quiet or too loud!</li>
                            </ul>
                            <p>For help recording a video on mac, pc, iphone or android, <Link href="/help"><a>visit our help page</a></Link>.</p>
                        </section>
                        <section id="result">
                            <h2>Send us the result</h2>
                            <p>Once you're recorded your video, send us an email at <a href="mailto:edinburghbeethoven2020.org@gmail.com">edinburghbeethoven2020.org@gmail.com</a> and we'll send you instructions.</p>
                        </section>
                    </main>
                </Col>
                <Col md="4">
                    <Countdown />
                    <aside>
                        <h2 id="#music">Music</h2>
                        <ListGroup>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Bassoon.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Bassoon</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Clarinet_in_A.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Clarinet (in A)</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Contrabassoon.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Contrabassoon</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Double_Bass.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Double Bass</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Flute.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Flute</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Horn_in_D.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Horn (in D)</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Oboe.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Oboe</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Percussion.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Percussion</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Piccolo.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Piccolo</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Timpani.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Timpani</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Trombone.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Trombone</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Trumpet_in_D.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Trumpet (in D)</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Viola.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Viola</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Violin_I.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Violin I</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Violin_II.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Violin II</ListGroup.Item>
                            <ListGroup.Item action href="/pdf/Beethoven9abridged-Violoncello.pdf"><FontAwesomeIcon title="Download" icon={faFileDownload} aria-label="Download" /> Download Violoncello</ListGroup.Item>
                        </ListGroup>
                    </aside>
                </Col>
            </Row>
        </Container>
    </Layout >
}

export default OrchestraPage