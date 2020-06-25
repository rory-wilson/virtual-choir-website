import Layout from '../../components/layout';
import { Container } from 'react-bootstrap';
import Link from 'next/link'
import YouTube from '../../components/youtube'

function OrchestraVideo() {
    return <Layout title="Orchestra Video">
        <Container>
            <main>
                <h1>Orchestra conductor video</h1>
                <YouTube youtubeId="JPJHezawDgM" />
                <p>For help recording a video on mac, pc, iphone or android, <Link href="/help"><a>visit our help page</a></Link>.</p>
            </main>
        </Container>
    </Layout >
}

export default OrchestraVideo