import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Layout from '../../components/Layout';

const portfolioItems = {
  '3d-models': {
    id: 1,
    title: '3D Models',
    shortdescription:
      'Here you find some models created via image-based modelling and uploaded on Sketchfab.',
    content: (
      <>
        <p>
          The British Museum in London is quite well known and during my visit
          there I took the opportunity to test the lens of my mobile phone
          camera. Therefore, this model was created.
        </p>

        <iframe
          title="statue"
          frameBorder="0"
          allowFullscreen
          allow="fullscreen; autoplay; vr"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/652efe34670f48aca9cd5226fb8e24bc/embed"
          style={{
            width: '60%',
            minWidth: 400,
            height: 350,
            margin: '0 auto',
            display: 'block',
          }}
        ></iframe>
        <br />
        <p>
          During a tour in northern Germany I stumbled across a small church in
          Rheinsberg. There I took pictures with a Sony alpha 6000 with a 50mm
          lens to create this 3D model later on.
        </p>

        <iframe
          title="Gravestone from Rheinsberg (Germany)"
          frameBorder="0"
          allowFullscreen
          allow="fullscreen; autoplay; vr"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/c9db9791d7f8470da5c6bc40d6903529/embed"
          style={{
            width: '60%',
            minWidth: 400,
            height: 350,
            margin: '0 auto',
            display: 'block',
          }}
        ></iframe>
      </>
    ),
  },
  writing: {
    id: 1,
    title: 'writingAndPublishing',
    shortdescription:
      'Here you find papers, article and other scientific writing contributions I was a part.',
    content: (
      <>
        <p>This article was published in June 2021.</p>

        <object
          data="../public/ocuments/remotesensing-13-02515-v2.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            <b>Example fallback content</b>: This browser does not support PDFs.
            Please download the PDF to view it:
            <br></br>
            <a href="https://www.mdpi.com/2072-4292/13/13/2515/htm#">
              Download PDF
            </a>
            .
          </p>
        </object>
      </>
    ),
  },
};

export default () => {
  const router = useRouter();
  if (!router.query.slug) return <div>loading...</div>;
  return (
    <Layout>
      <Head>
        <title>{portfolioItems[router.query.slug].title}</title>
        <meta name="description" content="Generic Page" />
      </Head>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{portfolioItems[router.query.slug].title}</h1>
            </header>
            <span className="image main">
              <img src="/images/pic11.jpg" alt="" />
            </span>
            {portfolioItems[router.query.slug].content}
          </div>
        </section>
      </div>
    </Layout>
  );
};
