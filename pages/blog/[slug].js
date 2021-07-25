import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Layout from '../../components/Layout';

const blogItems = {
  '3d-models': {
    id: 1,
    title: 'How to create a 3D model with open source tools',
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
};

export default () => {
  const router = useRouter();
  if (!router.query.slug) return <div>loading...</div>;
  return (
    <Layout>
      <Head>
        <title>{blogItems[router.query.slug].title}</title>
        <meta name="description" content="Generic Page" />
      </Head>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{blogItems[router.query.slug].title}</h1>
            </header>
            <span className="image main">
              <img src="/images/pic11.jpg" alt="" />
            </span>
            {blogItems[router.query.slug].content}
          </div>
        </section>
      </div>
    </Layout>
  );
};
