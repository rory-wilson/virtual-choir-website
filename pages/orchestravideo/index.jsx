import Layout from '../../components/layout';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import YouTube from '../../components/youtube'

function OrchestraVideo() {
    return <Layout title="Orchestra Video">
        <Container>
            <h1>Orchestra conductor video</h1>
            <YouTube youtubeId="JPJHezawDgM" />
            <p>For help recording a video on mac, pc, iphone or android, <Link href="/help"><a>visit our help page</a></Link>.</p>
        </Container>
    </Layout >
}

export default OrchestraVideo