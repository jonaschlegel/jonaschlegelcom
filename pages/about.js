import React, { useEffect } from 'react';
import BannerLanding from '../components/BannerLanding';
import Layout from '../components/Layout';

const AboutPage = () => {
  /* useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
        document.body.appendChild(script);

        script.onload = () => {
          window.kofiWidgetOverlay.draw('archaeoink', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Support Me',
            'floating-chat.donateButton.background-color': '#00bfa5',
            'floating-chat.donateButton.text-color': '#fff'
          });
        };

        return () => {
          document.body.removeChild(script);
        };
      }, []); */
  return (
    <Layout>
      <div>
        <BannerLanding title="About Me" />

        <div id="main" className="p-10" style={{ padding: '15px' }}>
          <section id="about-section">
            <header className="major">
              <h2>About Me</h2>
            </header>
            <div>
              <h4>My current path</h4>
              <p>
                Since February 2024 I am available as a freelancer to consult
                with web development, science communication and especially the
                creation of (scientific) illustrations. Reach out and contact me
                for more information.
              </p>
              <h4>Old Employment</h4>
              <p>
                Up until September 2023 I was employed at the Ludwig Boltzmann
                Institute for Archaeological Prospection and Virtual
                Archaeology, my work focus was on motorised large-scale
                geophysical prospection and geographic information systems (GIS)
                interpretations. Additionally, my responsibilities extend to the
                INDIGO project, which involves monitoring graffiti along the
                Danube Canal in Vienna. Tasks include the creation of a graffiti
                thesaurus, the graffito metadata schema, and the authoring of
                scientific papers.
              </p>

              <h4>Personal Website</h4>
              <p>
                This website serves as a platform to showcase a diverse
                portfolio, which includes but is not limited to, archaeological
                research, geophysical prospection, and GIS interpretations. It
                also features a blog where insights into various archaeological
                topics, methodologies, and technologies are shared.
              </p>

              <h4>Portfolio</h4>
              <p>
                The portfolio section offers a detailed look into projects,
                research papers, and methodologies employed in archaeological
                prospection. It serves as a comprehensive repository of work,
                providing valuable insights into the field of archaeology.
              </p>

              <h4>Art and Social Media</h4>
              <p>
                Explore the artistic side through the Instagram page, where
                digital and traditional art pieces are showcased.
                <a
                  href="https://www.instagram.com/your_username/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </p>

              <h4>Support the Work</h4>
              <p>
                Contributions to support the work are greatly appreciated.
                Donations can be made through Ko-fi.
              </p>
              <iframe
                id="kofiframe"
                src="https://ko-fi.com/archaeoink/?hidefeed=true&widget=true&embed=true&preview=true"
                style={{
                  border: 'none',
                  width: '100%',
                  padding: '4px',
                  background: '#f9f9f9',
                }}
                height="712"
                title="archaeoink"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
