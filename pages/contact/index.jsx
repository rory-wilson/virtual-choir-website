import Layout from '../../components/layout';
import { Container, Row, Col } from 'react-bootstrap';

function ContactPage() {
    return <Layout title="Contact">
        <Container>
            <Row>
                <Col md="8">
                    <main>
                        <h1>Contact Us</h1>
                        <p>If you have any questions about the project, need help to record your video or just want to get in touch, you can
                        email us at: </p><p><a href="mailto:edinburghbeethoven2020@gmail.com">edinburghbeethoven2020@gmail.com</a>.</p>
                    </main>
                </Col>
            </Row>
        </Container>
    </Layout >
}

export default ContactPage