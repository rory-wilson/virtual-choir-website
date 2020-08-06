import Layout from "../../components/layout";
import { Container, Row, Col } from "react-bootstrap";

function PressPage() {
  return (
    <Layout title="About">
      <Container>
        <Row>
          <Col md="8">
            <main>
              <h1>Press Release</h1>
              <h2>
                Musicians create virtual performance to celebrate festivals
              </h2>
              <p>
                Over 100 musicians have come together for a virtual performance
                of Beethoven’s famous “Ode to Joy” to celebrate the Edinburgh
                Festivals and raise money to support professional musicians out
                of work due to the Coronavirus pandemic. The singers and
                instrumentalists all recorded their parts separately at home and
                these were then edited together for a video to be released on
                Friday 7th August, when the festivals would have started.
              </p>
              <p>
                Conductor and organiser Iain McLarty said “The festivals have an
                amazing mix of professional, students and amateur performers.
                They started after the Second World War because the arts were
                seen as a powerful way to bring people together after a global
                crisis and we wanted to recreate that feeling of performing
                together in this challenging time even when live events can’t
                happen. Ode to Joy is a wonderful piece to celebrate this
                because of its message of hope and solidarity.”
              </p>
              <p>
                The project is raising money for Help Musicians Scotland, a
                charity which provides support for musicians at times of crisis.
                In June they received over 5000 applications for hardship
                funding from musicians who have been struggling during the
                Coronavirus situation, with a survey showing that 25% of
                musicians believed they would be ineligible for the government's
                Self-Employment Income Support Scheme.
              </p>
              <p>
                Rory Wilson is a singer and software engineer who regularly
                performs at the festivals and helped organise the project. “We
                are really conscious that many professional musicians are
                struggling right now and will have lost a lot of work from the
                festivals. We are asking people to donate what they might have
                spent on attending a concert this summer so that we can make
                sure these musicians get enough support to get through this
                crisis and keep performing.”
              </p>
              <p>
                You can watch the video and donate at{" "}
                <a href="http://edinburghbeethoven2020.org">
                  http://edinburghbeethoven2020.org
                </a>{" "}
                from Friday 7th August.
              </p>
              <p>ENDS</p>
              <h2>Links</h2>
              <ul>
                <li>
                  <a href="http://edinburghbeethoven2020.org">
                    http://edinburghbeethoven2020.org
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/edinburghbeethoven2020">
                    https://www.facebook.com/edinburghbeethoven2020
                  </a>
                </li>
                <li>
                  <a href="https://www.helpmusicians.org.uk/about-us/help-musicians-scotland">
                    https://www.helpmusicians.org.uk/about-us/help-musicians-scotland
                  </a>
                </li>
                <li>
                  <a href="http://www.iainmclarty.co.uk">
                    http://www.iainmclarty.co.uk
                  </a>
                </li>
              </ul>
            </main>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default PressPage;
