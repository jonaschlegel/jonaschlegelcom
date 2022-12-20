import Head from 'next/head';
import Link from 'next/link';
import BannerLanding from '../../components/BannerLanding';
import Layout from '../../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Landing Page Blog" />
      </Head>

      <div>
        <div>
          <BannerLanding title="Blog" />
          <div id="main">
            <section id="one">
              <Link href="/blog/introduction" className="image">
                <img src="/images/introduction.jpg" alt="" />
              </Link>
              <div className="inner">
                <header className="major">
                  <h3>An introduction.</h3>
                </header>
                <p className="author">by Jona Schlegel on 08.12.2022</p>
                <p>
                  In this bog post I will give an introduction of myself and why
                  I actually started this blog. Then I will go into what topics
                  are interesting to me and I might want to explore in the
                  future and how often and regular I will post. So, generally
                  stay tuned.
                </p>
                <ul className="actions">
                  <li>
                    <Link href="/blog/introduction" className="button">
                      Blog post here
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <section id="two" className="spotlights">
              <section>
                <Link href="/blog/modelling" className="image">
                  <img src="/images/modelling.jpg" alt="" />
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>3D modelling</h3>
                    </header>
                    <p className="author">by Jona Schlegel on 08.12.2022</p>
                    <p>
                      In this blog post I will give a short overview which
                      methods and techniques I am using to create 3D models.
                      <br />
                      Thereby, I will mainly focus on image-based modelling, my
                      camera equipment and Metashape as well as SketchFab.
                    </p>
                    <ul className="actions">
                      <li>
                        <Link href="/blog/modelling" className="button">
                          Blog post here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <Link href="/blog/drawing" className="image">
                  <img src="/images/drawing.jpg" alt="" />
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Drawing</h3>
                    </header>
                    <p className="author">by Jona Schlegel on 08.12.2022</p>
                    <p>
                      In this blog posts I want to explore how drawing can
                      actually help in science and is a great tool to explore
                      archaeology.
                    </p>
                    <ul className="actions">
                      <li>
                        <Link href="/blog/drawing" className="button">
                          Blog post here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <Link href="/blog" className="image">
                  <img src="/images/SecondExcavation.jpg" alt="" />
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Interested in more?</h3>
                    </header>
                    <p>
                      Do you want to read more and see older blog posts? Then
                      follow this link.
                    </p>
                    <ul className="actions">
                      <li>
                        <Link href="/blog" className="button">
                          older blog posts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
