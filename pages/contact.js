import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Layout from '../components/Layout';
import BannerLanding from '../components/BannerLanding';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mleyleoj");
    if (state.succeeded) {
      return <p>Thanks for contacting me!</p>;
    }
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
        <label htmlFor="email" style={{ marginBottom: '20px' }}>
          Contact Form
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
          style={{ padding: '10px', marginBottom: '20px' }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          style={{ padding: '10px', marginBottom: '20px' }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-20">
  Submit
</button>

      </form>
    );
  };

const ContactPage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-uid', 'a3e43c919d');
        script.src = 'https://archaeoink.ck.page/a3e43c919d/index.js';
      
        const newsletterDiv = document.getElementById('newsletter');
        newsletterDiv.appendChild(script);
      
        return () => {
          if (newsletterDiv.contains(script)) {
            newsletterDiv.removeChild(script);
          }
        };
      }, []);
      

  return (
    <Layout >
      <div >
        <BannerLanding />

        <div id="main" className="p-10">
          <section id="contact-section" >
            <header className="major" style={{ 'padding-left': '10px', 'padding-top': '10px'}}> 
              <h2>Contact</h2>
            </header>
            <div className="p-10"  style={{ padding: '15px'}}>
                <h4>archaeoINK: Where art meets archaeology</h4>
                <p>Join the newsletter for captivating illustrations, fascinating insights, and exclusive content. Explore archaeological sites and periods from all around the world and thereby ignite your imagination through illustrations, doodles and history. 
                <br/>
                Get ready for a visual journey through time with archaeoINK.</p>
            </div>
            <div className="flex justify-center align-center"  style={{ padding: '20px', alignContent: 'center', justifyContent: 'center' }}>
  <div id="newsletter" className="w-1/2 mx-auto">
    {/* The ConvertKit form will be injected here */}
  </div>
</div>
          </section>
          <ContactForm style={{ 'padding-bottom': '15px'}}/>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
