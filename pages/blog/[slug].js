import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Layout from '../../components/Layout';

const blogItems = {
  introduction: {
    id: 1,
    title: 'Introduction',
    shortdescription:
      'This blog post will focus on what the purpose is of this blog, and what kind of topics I want to cover and how regularly I will try to upload a post.',
    content: (
      <>
        <p>
          Welcome to my blog! <br />
          My name is Jona Schlegel and I am a female archaeologist working at
          the Ludwig Boltzmann Institute for Archaeological Prospection and
          Virtual Archaeology (LBI ArchPro), which is located in Vienna,
          Austria. Originally I am from Berlin, where I also studied restoration
          and conservation/ field archaeology in my bachelor (2012-2016) and
          landscape archaeology in my master (2016-2018). Thereby, I learned
          different excavation and documentation methods, that I was then also
          able to apply at different projects all around Europe. In my master
          studies I then focused more on prospection methods like magnetic,
          electric resistivity and ground-penetrating radar (GPR), which lead to
          me leading the data acquisition of magnetic and GPR data of a
          Hellenistic and Roman settlement in Turkey to determine the dimension
          and structure of the site. If you are interested in all the projects I
          participated in, check out the portfolio section of the website to
          learn more on the projects itself and the skills I gained from working
          there and if information on these are already published or still
          ongoing.
          <br />
          These interests in geophysical and archaeological prospection lead me
          towards the LBI ArchPro and wanting to participate in such a research
          and academic environment. So, I have been with the LBI ArchPro since
          May 2018, where I have been working on field projects and acquiring
          magnetic and ground-penetrating radar data on archaeological sites in
          Bulgaria, Swiss, Serbia and mainly Austria. Furthermore, I am also
          assigned in working on the interpretation and analysis of the acquired
          data in geographic information systems (GIS). Additionally I was also
          taught to collect data with the RIEGL VZ400 and RIEGL VZ400i, which
          are terrestrial laser scanner (TLS) and how to process them with
          RiProcess. 
          <p></p>
          In addition to my work at the Ludwig Boltzmann Institute, I am also
          pursuing my PhD at the University of Vienna. My research focuses on
          spatio-temporal reasoning in archaeology, which involves using spatial
          and temporal data to understand the relationships between different
          events and phenomena in the past.
          <br />
          Recently, I have also become involved in the INDIGO (IN-ventory and
          DI-ssemination of G-raffiti along the d-O-naukanal) project, which is
          an initiative to inventory and disseminate graffiti along the Danube
          Canal in Vienna. As part of this project, I am working on a graffiti
          thesaurus and developing an online platform to present the collected
          graffiti data in a three-dimensional environment. Furthermore, I was
          part of the organisational team of the symposium goINDIGO in May 2022
          in Vienna. Connected to this symposium I also did a presentation and
          wrote an article that will be published at the beginning of next
          year. 
          <br />
          With this blog, I hope to improve my writing skills and share my
          thoughts and experiences on topics that are interesting to me,
          including archaeological drawings, the use of geographic information
          systems in archaeology, and the creation of 3D models. I also plan to
          discuss the role of web development in archaeology and science more
          generally.
          <br />I am excited to embark on this journey and share my thoughts and
          experiences with you. If you want to stay up to date if something new
          is published on here, then follow me on social media with my Twitter
          handle @JonaSchlegel. Maybe I will also start a newsletter with whom
          you will be able to follow my updates. If you have suggestions or
          feedback, feel free to send me an email with the contact form.
          <p></p>
          Anyway, thank you for joining me and stay tuned!
        </p>
      </>
    ),
  },

  modelling: {
    id: 2,
    title: 'How to create a 3D model',
    shortdescription:
      'In this blog post I will explore how I create 3D models with image-based modelling and tools like a mirrorless camera or my phone to get the data that will create me a 3D model with Metashape.',
    content: (
      <>
        <p></p>
      </>
    ),
  },
  drawing: {
    id: 3,
    title: 'Why I draw archaeological related doodles',
    shortdescription: 'In this post I will explore, ',
    keywords: 'drawing',
    content: (
      <>
        <p className="author center">by Jona Schlegel on the 08.12.2022</p>
        <p>
          Drawing, doodling, sketching, and painting may seem like simple and
          outdated ways of documenting and interpreting archaeological sites and
          artifacts. Still, archaeologists and expedition painters have used
          these techniques for centuries to better understand and visualize the
          past. From the intricate sketches of ancient ruins made by
          19th-century explorers to the detailed paintings of artifacts created
          by contemporary archaeologists, drawing, doodling, sketching, and
          painting have long played an important role in archaeology.
          <br />
          One of the primary benefits of sketching in archaeology is that this
          technique can help archaeologists to better understand and visualize
          archaeological sites and artifacts. Archaeologists can gain a more
          intimate understanding of its form, function, and significance by
          creating detailed drawings of a site or artifact. This can be
          particularly useful when studying complex or fragile artifacts that
          cannot be easily handled or examined.
          <br />
          In addition to helping archaeologists better understand archaeological
          sites and artifacts, drawing, doodling, sketching, and painting can
          also be used to communicate complex ideas and information clearly and
          concisely. By using visual representations of archaeological data,
          archaeologists can more easily share their findings with colleagues,
          the public, and other stakeholders. This can be especially useful when
          presenting complex or technical information to non-experts.
          <br />
          Furthermore, drawing, doodling, sketching, and painting can also be
          used to engage the public and promote interest in archaeology. By
          sharing drawings, doodles, sketches, and paintings of archaeological
          sites and artifacts, archaeologists can help to bring the past to life
          and inspire curiosity and excitement about the field. This can be
          particularly effective when working with children and other groups who
          may not have much exposure to archaeology.
          <br />
          Drawing, doodling, sketching, and painting are valuable tools that can
          help archaeologists better understand, communicate, and promote their
          work. Whether used for research, education, or outreach, these
          techniques can provide valuable insights and connections to the past.
          <br />
          Despite the many benefits of using drawing, doodling, sketching, and
          painting in archaeology, these techniques do have their limitations.
          One of the primary limitations is that drawings, doodles, sketches,
          and paintings are subjective and can be influenced by the biases and
          perspectives of the person creating them. This can be problematic when
          trying to accurately document and interpret archaeological sites and
          artifacts, as personal interpretations and perspectives can skew the
          results.
          <br />
          In addition, drawing, doodling, sketching, and painting can also be
          time-consuming and labor-intensive. Creating detailed and accurate
          representations of archaeological sites and artifacts can require a
          great deal of skill and dedication, and this can be a challenge for
          archaeologists who are working under tight deadlines or in remote or
          difficult locations.
          <br />
          Furthermore, drawing, doodling, sketching, and painting can also be
          limiting in terms of the amount and type of information that can be
          captured. While these techniques can provide valuable visual
          representations of archaeological sites and artifacts, they are not
          well-suited for capturing quantitative data or other forms of
          information that cannot be easily visualized.
          <br />
          Overall, while drawing, doodling, sketching, and painting can be
          valuable tools for documenting and interpreting archaeological sites
          and artifacts, they should not be relied upon exclusively. These
          techniques should be used in conjunction with other methods and
          approaches to provide a more comprehensive and accurate understanding
          of the past.
          <br />
          One of the most well-known examples of using drawing, doodling,
          sketching, and painting in archaeology is the work of expedition
          painters. These were artists who accompanied archaeologists and
          explorers on their expeditions to document and interpret the ancient
          ruins, artifacts, and landscapes that they encountered. Many of these
          expedition painters were skilled draftsmen who were able to create
          detailed and accurate representations of the sites and artifacts that
          they encountered, providing valuable information for researchers and
          the public alike.
          <br />
          One notable example of an expedition painter is Paul Emile Botta, who
          accompanied the French archaeologist Paul-Émile Botta on his
          expeditions to the ancient city of Nineveh in modern-day Iraq. Botta
          was a talented artist who was able to capture the beauty and detail of
          the ruins and artifacts that they discovered, providing valuable
          insights into the history and culture of the ancient Near East.
          <br />
          In more recent times, archaeologists have also used drawing, doodling,
          sketching, and painting in their work. For example, the British Museum
          has a team of artists who create detailed and accurate representations
          of the artifacts in the museum's collection. These drawings and
          paintings help to provide a more complete understanding of the
          artifacts and their context, and they are often used for research,
          education, and outreach purposes.
          <br />
          Overall, drawing, doodling, sketching, and painting have long played
          an important role in archaeology, and they continue to be valuable
          tools for documenting and interpreting archaeological sites and
          artifacts. Whether used by expedition painters or contemporary
          archaeologists, these techniques provide valuable insights and
          connections to the past.
          <br />
          Despite the many benefits and limitations of using drawing, doodling,
          sketching, and painting in archaeology, these techniques continue to
          be valuable tools for documenting and interpreting archaeological
          sites and artifacts. In the future, we can expect to see more
          archaeologists using these techniques in their work, as they provide
          valuable insights and connections to the past.
          <br />
          One potential area where drawing, doodling, sketching, and painting
          could be used more extensively in the future is in the field of public
          archaeology. By engaging the public in drawing, doodling, sketching,
          and painting activities, archaeologists can help to promote interest
          and engagement in archaeology, and can also provide valuable insights
          into the public's perceptions and interpretations of archaeological
          sites and artifacts.
          <br />
          Furthermore, we can also expect to see more digital and interactive
          tools being developed that will allow archaeologists to create and
          share drawings, doodles, sketches, and paintings more easily and
          effectively. For example, there are already some digital tools that
          allow archaeologists to create 3D models of archaeological sites and
          artifacts, which can be shared and explored in virtual reality
          environments. These tools have the potential to revolutionize the way
          that archaeologists document and interpret archaeological sites and
          artifacts, and they could be used in conjunction with drawing,
          doodling, sketching, and painting to provide even more detailed and
          accurate representations of the past.
          <br />
          Overall, the future of using drawing, doodling, sketching, and
          painting in archaeology looks bright, as these techniques continue to
          provide valuable insights and connections to the past. Whether used in
          the field, in the lab, or in the public sphere, these techniques will
          continue to be valuable tools for archaeologists as they seek to
          better understand and interpret the past.
        </p>
      </>
    ),
  },
};

export default function BlogItem() {
  const router = useRouter();
  if (!router.query.slug) return <div>loading...</div>;
  return (
    <Layout>
      <Head>
        <title>{blogItems[router.query.slug].title}</title>
        <meta name="description" content="Blog Page" />
      </Head>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{blogItems[router.query.slug].title}</h1>
            </header>
            {blogItems[router.query.slug].content}
          </div>
        </section>
      </div>
    </Layout>
  );
}
