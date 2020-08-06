import Layout from "../components/layout";
import { Container, Jumbotron } from "react-bootstrap";
import YouTube from "../components/youtube";

function HomePage() {
  return (
    <Layout title="Home">
      <Jumbotron fluid className="home-banner">
        <Container>
          <YouTube youtubeId="TudqpXvSy4s" />
        </Container>
      </Jumbotron>
      <section className="my-3 py-3">
        <Container>
          <p>
            Please donate the amount you might have spent to attend a concert or
            show in August and we can directly support musicians impacted by the
            loss of work due to the cancellation of the festivals.
          </p>
          <a
            className="btn btn-warning btn-lg btn-block"
            href="https://www.justgiving.com/fundraising/edinburghbeethoven2020"
          >
            Donate to Help Musicians
          </a>
          <p className="pt-3 align-middle text-center">
            <a href="https://www.justgiving.com/helpmusiciansuk">
              <img
                src="/images/HMLogo_BLACK_2020.jpg"
                alt="Help Musicians Logo"
                style={{
                  maxWidth: 200,
                  "margin-right": "10%",
                }}
              />
            </a>
            <a href="https://www.justgiving.com/fundraising/edinburghbeethoven2020">
              <img
                src="/images/justgiving.svg"
                alt="Just Giving Logo"
                style={{
                  maxWidth: 200,
                }}
              />
            </a>
          </p>
        </Container>
      </section>
      <section className="dark-bg py-5">
        <Container>
          <aside>
            <p>
              Since 1947 Edinburgh has welcomed artists from around the world
              every August. The festivals started as a way to bring people
              together after a global crisis.
            </p>
            <p>
              During this year when it will be impossible to welcome visitors,
              the musicians of Scotland offer this performance to their fellow
              performers from around the world as a symbol of our solidarity in
              this difficult time.
            </p>
          </aside>
        </Container>
      </section>
    </Layout>
  );
}

export default HomePage;
