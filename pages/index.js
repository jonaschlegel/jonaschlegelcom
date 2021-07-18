import Link from 'next/link';
import Banner from '../components/Banner';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <div>
      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <article style={{ backgroundImage: `url('/images/pic01.jpg')` }}>
            <header className="major">
              <h3>Excavations</h3>
              <p>
                A collection of all the archaeological excavation projects I was
                a part.
              </p>
            </header>
            <Link href="/portfolio">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/images/programming.jpg')` }}
          >
            <header className="major">
              <h3>Programming</h3>
              <p>Projects like hackathons</p>
            </header>
            <Link href="/portfolio">
              <a className="link primary"></a>
            </Link>
          </article>
          <article style={{ backgroundImage: `url('/images/Magnetic.jpg')` }}>
            <header className="major">
              <h3>Magnetic</h3>
              <p>Different projects focused on the magnetic data collection.</p>
            </header>
            <Link href="/portfolio">
              <a className="link primary"></a>
            </Link>
          </article>
          <article style={{ backgroundImage: `url('/images/Radar.jpg')` }}>
            <header className="major">
              <h3>Ground penetrating radar</h3>
              <p>Another set of geophysical projects</p>
            </header>
            <Link href="/portfolio">
              <a className="link primary"></a>
            </Link>
          </article>
          <article style={{ backgroundImage: `url('/images/art.jpg')` }}>
            <header className="major">
              <h3>Art</h3>
              <p>Art porjects with the focus on archaeology.</p>
            </header>
            <Link href="/portfolio">
              <a className="link primary"></a>
            </Link>
          </article>
          <article style={{ backgroundImage: `url('/images/writing.jpg')` }}>
            <header className="major">
              <h3>Writing</h3>
              <p>Published papers, article, abstracts.</p>
            </header>
            <Link href="/portfolio">
              <a className="link primary"></a>
            </Link>
          </article>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Blog</h2>
            </header>
            <p>
              In the next few weeks different topics that are interesting for me
              focusing on archaeology, data collection and coding will appear
              here.
            </p>
            <ul className="actions">
              <li>
                <Link href="/blog">
                  <a className="button next">Further reading</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
