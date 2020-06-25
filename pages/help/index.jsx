import Layout from '../../components/layout';
import { Container } from 'react-bootstrap';

function HelpPage() {
    return <Layout title="Help">
        <Container>
            <main>
                <h1>Help recording your video</h1>
                <section>
                    <h2>Recording on a windows desktop / laptop</h2>
                    <p>Windows PCs have the Camera app for recording video. You'll need a webcam attached to your PC to use it.</p>
                    <ol>
                        <li>Open the Camera app (click Start and type 'Camera')</li>
                        <li>Click the Video button on the right hand side</li>
                        <li>Hit the video button to start recording</li>
                        <li>Hit the video button again to stop</li>
                        <li>Save your video when you're done</li>
                    </ol>
                </section>
                <section>
                    <h2>Recording on a apple mac desktop / laptop</h2>
                    <p>Apple computers have the Quicktime app for recording video. You'll need a webcam attached to your mac to use it.</p>
                    <ol>
                        <li>Open the Quicktime app (use cmd + space to search for 'Quicktime')</li>
                        <li>Go to the File menu and choose New Video Recording</li>
                        <li>Hit the red button to record</li>
                        <li>Hit the red button again to stop</li>
                        <li>Save your video when you're done</li>
                    </ol>
                </section>
                <section>
                    <h2>Recording on a iPhone / iPad</h2>
                    <p>You can use the Camera app on your iPhone or iPad to record video.</p>
                    <ol>
                        <li>Click the camera app on your home screen</li>
                        <li>Swipe left to select Video</li>
                        <li>Hit the red button to record</li>
                        <li>Hit the red button again to stop</li>
                        <li>Your video will be saved in your Photos</li>
                    </ol>

                </section>
                <section>
                    <h2>Recording on an android phone / tablet</h2>
                    <p>You can use the Camera app on your iPhone or iPad to record video.</p>
                    <ol>
                        <li>Click the camera app on your home screen</li>
                        <li>Swipe left to select Video (the shutter icon will change to a record icon)</li>
                        <li>Hit the red button to record</li>
                        <li>Hit the red button again to stop</li>
                        <li>Your video will be saved in your Photos</li>
                    </ol>

                </section>
            </main>
        </Container>
    </Layout >
}

export default HelpPage