import Layout from '../../components/layout';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import YouTube from '../../components/youtube'

function ChoirVideo() {
    return <Layout title="Choir Video">
        <Container>
            <h1>Choir conductor video</h1>
            <YouTube youtubeId="962oTMbe0Ag" />
            <p>For help recording a video on mac, pc, iphone or android, <Link href="/help"><a>visit our help page</a></Link>.</p>
        </Container>
    </Layout >
}

export default ChoirVideo