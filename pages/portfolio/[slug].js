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
          Image-based modeling with Metashape and sculpting in Nomad Sculpt are
          both powerful tools for creating 3D models in archaeology. Image-based
          modeling allows for the creation of highly detailed and accurate 3D
          models based on photographs of the site or artifact. This technique is
          particularly useful for documenting and preserving archaeological
          sites and artifacts in their current state. Sculpting in Nomad Sculpt,
          on the other hand, allows for the creation of more artistic and
          interpretive models. This technique is useful for creating virtual
          reconstructions of archaeological sites and artifacts, allowing
          researchers and the public to visualize and explore the past in a more
          immersive way. Overall, these skills demonstrate a strong
          understanding of 3D modeling and its applications in archaeology,
          including documentation, preservation, and interpretation of
          archaeological sites and artifacts.
        </p>
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
    id: 2,
    title: 'Writing and Publishing.',
    shortdescription:
      'Here you find papers, article and other scientific writing contributions I was a part.',
    content: (
      <>
        <p>
          <h2>AUTOgraf</h2>
          <h2>
            Prospecting the UNESCO World Heritage Site of Müstair (Switzerland)
          </h2>
          This article was published in June 2021. It is my first author
          article.
        </p>
        {/* <p>add graphical abstract</p>

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
          </p>
          <p>
            <h2>Rundbrief</h2>
          </p>
        </object> */}
      </>
    ),
  },
  excavations: {
    id: 3,
    title: 'Excavations.',
    shortdescription: 'Here you find my excavations and field work projects',
    content: (
      <>
        <p>I started out my career or my idea on </p>
      </>
    ),
  },
  programming: {
    id: 4,
    title: 'Programming.',
    shortdescription:
      'Here you find my coding and programming projects and workshops I attended in this regard',
    content: (
      <>
        <p>I followed the codecademy course, and got a certificate thereby.</p>
        <p>
          Then I also am working on this website, which I am programming myself.
          The design and layout is based on this template and here s a link to
          this template.
        </p>
        <p>Link to github</p>
      </>
    ),
  },
  magnetics: {
    id: 5,
    title: 'Magnetics.',
    shortdescription:
      'Here you find the geophysical projects that I participated in that are focussing on magnetics and the benefits for archaeological sites. This also includes connected published works, workshops and other things that are conncected to this topic.',
    content: (
      <>
        <p>
          <p></p>
          <h2>Schönerlinde</h2>
          <p>HTW around 2013</p>
        </p>
        <p>
          <h2>Pliska</h2>
        </p>
        <p></p>
        <p>
          <h2>Eggersdorf</h2>
        </p>
      </>
    ),
  },
  GPR: {
    id: 6,
    title: 'ground penetrating radar',
    shortdescription:
      'Here you find projects that are focussed on ground penetrating radar in archaeology, which also includes published articles etc.',
    content: (
      <>
        <p></p>
      </>
    ),
  },
  art: {
    id: 7,
    title: 'art',
    shortdescription:
      'Here you find my art works, my ko-fi page and my instagram account and several other aspects like challenges that are showcasing my art.',
    content: (
      <>
        <p></p>
      </>
    ),
  },
};

export default function PortfolioItem() {
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
}
