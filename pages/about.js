import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import BannerLanding from '../components/BannerLanding';

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
      <div >
        <BannerLanding title="About Me" />

        <div id="main" className="p-10" style={{ padding: '15px'}}>
          <section id="about-section">
            <header className="major">
              <h2>About Me</h2>
            </header>
            <div>
              <h4>Current Employment</h4>
              <p>
                Currently employed at the Ludwig Boltzmann Institute for Archaeological Prospection and Virtual Archaeology, the focus lies on motorised large-scale geophysical prospection and GIS interpretations. Additionally, responsibilities extend to the INDIGO project, which involves monitoring graffiti along the Danube Canal in Vienna. Tasks include the creation of a graffiti thesaurus, the graffito metadata schema, and the authoring of scientific papers.
              </p>
              
              <h3>Personal Website</h3>
              <p>
                This website serves as a platform to showcase a diverse portfolio, which includes but is not limited to, archaeological research, geophysical prospection, and GIS interpretations. It also features a blog where insights into various archaeological topics, methodologies, and technologies are shared.
              </p>

              <h4>Portfolio</h4>
              <p>
                The portfolio section offers a detailed look into projects, research papers, and methodologies employed in archaeological prospection. It serves as a comprehensive repository of work, providing valuable insights into the field of archaeology.
              </p>

              <h4>Blog</h4>
              <p>
                The blog serves as a medium to share knowledge and insights into the world of archaeology. It covers a wide range of topics, from the latest advancements in archaeological prospection to deep dives into historical periods and sites.
              </p>
           
              <h4>Art and Social Media</h4>
              <p>
                Explore the artistic side through the Instagram page, where digital and traditional art pieces are showcased. 
                <a href="https://www.instagram.com/your_username/" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
              </p>

              <h4>Support the Work</h4>
              <p>
                Contributions to support the work are greatly appreciated. Donations can be made through Ko-fi.
              </p>
              <iframe id='kofiframe' src='https://ko-fi.com/archaeoink/?hidefeed=true&widget=true&embed=true&preview=true' style={{border: 'none', width: '100%', padding: '4px', background: '#f9f9f9'}} height='712' title='archaeoink'></iframe>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
