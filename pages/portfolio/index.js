import Head from 'next/head';
import Link from 'next/link';
import BannerLanding from '../../components/BannerLanding';
import Layout from '../../components/Layout';

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing Page of the Portfolio" />
      </Head>

      <div>
        <BannerLanding title="Portfolio" />
        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <Link href="/portfolio/3d-models" className="link primary">
                  <h2>3D models</h2>
                </Link>
              </header>
              <p>
                Here you find some models created with the methods of
                image-based modelling and digital sculpting and uploaded on
                Sketchfab.
              </p>
              <ul className="actions">
                <li>
                  <Link href="/portfolio/3d-models" className="button">
                    View models
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section id="two" className="spotlights">
            <section>
              <Link href="/portfolio/writing" className="image">
                <img src="\public\images\writing.jpg" alt="" />
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Writing and publishing</h3>
                  </header>
                  <p>
                    Scientific writing and publishing in academia is a crucial
                    skill for researchers to effectively communicate their
                    findings and contribute to the body of knowledge in their
                    field. A strong portfolio in this area demonstrates the
                    ability to conduct research and present it in a clear,
                    concise, and compelling manner. This skill is essential for
                    success in academia and can lead to opportunities for
                    collaboration, funding, and recognition in the scientific
                    community.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link href="/portfolio/writing" className="button">
                        view published articles
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <Link href="/portfolio/art" className="image">
                <img src="/images/pic09.jpg" alt="" />
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Art</h3>
                  </header>
                  <p>
                    As an archaeologist and hobbyist artist, I enjoy creating
                    art pieces that incorporate elements from the ancient past.
                    My portfolio showcases a range of styles and mediums, from
                    pencil sketches of historical buildings to colorful
                    paintings of ancient artifacts. Through my art, I aim to
                    bring the beauty and intrigue of the past to life and share
                    my passion for archaeology with others.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link href="/portfolio/art" className="button">
                        View my art
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <Link href="/portfolio/magnetics" className="image">
                <img src="/images/pic10.jpg" alt="" />
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Magnetics</h3>
                  </header>
                  <p>
                    Magnetics is on method in the area of geophysical
                    prospection that allows archaeologists to look into the
                    ground without excavating. And I took part in several
                    projects that will be collected here.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link href="/portfolio/magnetics" className="button">
                        View geophysical prospection projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </Layout>
  );
}
