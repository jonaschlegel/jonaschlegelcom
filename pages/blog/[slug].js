import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';

export const blogItems = {
  ipadInArchaeology: {
    id: 7,
    title: 'Unearthing Digital Dimensions: The iPad in Archaeological Toolkits',
    author: 'Jona Schlegel',
    date: '16.10.2023',
    shortdescription:
      'This post explores the incorporation of the iPad into archaeological practices, focusing on personal experiences and the broader implications for the field.',
    image: '/images/ipadInArchaeology.jpg',
    keywords: [
      'iPad',
      'archaeology',
      '3D scanning',
      'LiDAR',
      'technology integration',
      'digital documentation',
    ],
    content: (
      <>
        <p className="author center">by Jona Schlegel on 13.10.2023</p>
        <p>
          The iPad, often perceived as a daily-use gadget, has carved a niche
          within diverse archaeological toolkits. My productive engagement with
          this device commenced early in 2021, heralding the confluence of
          modern technology with ancient narratives and archaeological
          elucidations. The portable and user-friendly nature of iPads, coupled
          with their robust suite of applications, has facilitated a more
          dynamic and efficient mode for me in my archaeological practice.
        </p>
        <br />
        <p>
          Initially, the iPad served as a digital notebook for me, facilitating
          the recording of insights from scientific articles. The transition
          from paper to digital notes unfolded smoothly, enhancing the
          efficiency of information collection and retrieval. This digital
          companion soon evolved into a medium for crafting archaeological
          illustrations, visually demystifying complex archaeological concepts.
          These illustrations metamorphosed into explanatory tools, fostering a
          better understanding and communication of archaeological themes.
        </p>
        <br />
        <p>
          The exploration advanced with the discovery of the 3D Scanner App on
          the iPad Pro 12.9 2020. The device's portability rendered it a
          constant companion on numerous outings. It was employed to capture 3D
          models of statues and various objects that piqued interest,
          documenting their form and intricacies. The ease of creating 3D
          representations unveiled a fresh perspective on documenting objects
          that were historically significant and aesthetically captivating.
        </p>
        <br />
        <p>
          The journey extended to archaeological excavations, where the iPad
          played a pivotal role in documenting archaeological features and
          layers swiftly. Utilising the 3D scanner app alleviated the daily
          documentation workload, making it more efficient. The texture details
          captured in the 3D models facilitated quicker drafting of the
          excavation processes, offering a visual aid in understanding the
          unfolding archaeological narrative.
        </p>
        <br />
        <p>
          However, the integration of the iPad did not supplant established
          documentation methods. Terrestrial laser scanning (TLS) and
          image-based modelling (IBM) remained paramount for documenting each
          stratigraphic unit comprehensively. The iPad emerged as a tool for
          capturing interim steps, structuring interpretations and ideas
          swiftly. Yet, for a final documentation, the tried-and-tested methods
          like TLS and IBM continued to hold their ground as solid documentation
          methods.
        </p>
        <br />
        <p>
          The Light Detection and Ranging (LiDAR) technology in the iPad
          warrants a mention. Integrated into the device, this technology
          measures distances using laser light to generate precise 3D models of
          the surroundings. The initiation of LiDAR in Apple devices began with
          the release of the iPad Pro in 2020 and the iPhone 12 Pro, rendering
          3D scanning more accessible. For a detailed understanding of LiDAR
          technology, readers might find the explanation by Apple insightful (
          <a
            href="https://www.apple.com/newsroom/2022/09/ipad-pro-is-revolutionizing-how-archaeologists-preserve-the-history-of-pompeii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple, 2022
          </a>
          ).
        </p>
        <br />
        <p>
          Within the broader archaeological landscape, the adoption of modern
          gadgets like the iPad is positively influencing methodologies. It
          potentially fosters more collaborative efforts among archaeologists
          and possibly enhances public engagement with historical sites.
          However, challenges such as the cost of the device and the
          line-of-sight requirement of the LiDAR sensor provide a balanced view
          of this technological integration. This balanced perspective is
          crucial in understanding the scope and limitations of modern tech in
          the field of archaeology.
        </p>
        <br />
        <p>
          The incorporation of the iPad into archaeological practices transcends
          a mere futuristic allure and represents a pragmatic step forward.
          However, certain aspects like the costs, accuracy, and the learning
          curve of handling a new device render the iPad not the first choice of
          equipment for some. I will continue to utilise my iPad and eagerly
          anticipate the updates that the device will receive in the future,
          optimistically contributing to the digitisation of archaeological
          practices.
        </p>
        <br />
        <h3>References</h3>
        <p>
          Apple. 2022. 'iPad Pro is revolutionising how archaeologists preserve
          the history of Pompeii'. Apple Newsroom. URL:{' '}
          <a
            href="https://www.apple.com/newsroom/2022/09/ipad-pro-is-revolutionizing-how-archaeologists-preserve-the-history-of-pompeii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.apple.com/newsroom/2022/09/ipad-pro-is-revolutionizing-how-archaeologists-preserve-the-history-of-pompeii/
          </a>{' '}
          (accessed 13 October 2023).
        </p>
      </>
    ),
  },

  emergenceOfArchaeoIllustration: {
    id: 6,
    title:
      'Tracing Lines Through Time: The Emergence of Archaeological Illustration',
    author: 'Jona Schlegel',
    date: '09.10.2023',
    shortdescription:
      'This post explores the origins and evolution of archaeological illustration, charting its journey from early documentations to a professional field.',
    image: '/images/emergenceOfArchaeoIllustration.jpg',
    keywords: [
      'archaeological illustration',
      'history',
      'Victorian era',
      'technology',
      'professionalisation',
    ],
    content: (
      <>
        <p className="author center">by Jona Schlegel on 09.10.2023</p>
        <p>
          Archaeological illustration, the nexus between art and science,
          unveils the narrative of bygone eras, rendering the ancient tangible
          and comprehensible. The curiosity often piques when observing how a
          simple line or a sketch can transport one across the vast expanse of
          time, breathing life into relics and ruins. So, delving into the
          realms of archaeological illustration is akin to embarking on a vivid
          journey across time. Every stroke of the illustrator's pen on
          parchment unfurls tales of bygone eras, making the whispers of ancient
          civilizations audible to the contemporary soul. The allure that
          accompanies the fusion of art with the scientific rigor of archaeology
          is undeniably potent. A curious mind might find itself spellbound by
          how a mere sketch can serve as a bridge between the present and the
          epochs long past, rendering the intangible remnants of history into
          something palpable and comprehensible.
        </p>
        <br />
        <p>
          The advent of archaeological illustration is deeply intertwined with
          the very inception of archaeology as a scientific discipline. The
          pioneering figures in archaeology, like Heinrich Schliemann with his
          epoch-making excavations at Troy, envisaged the quintessence of
          artistry in meticulously documenting the unearthed relics. The hands
          of artists, wielding their brushes and pens, danced across sheets of
          paper, capturing the essence of discoveries that were the first
          whispers from a past long believed to be mute. This epoch heralded the
          genesis of a lasting camaraderie between the inked line and the
          trowel, a camaraderie that has weathered the sands of time.
        </p>
        <br />
        <p>
          As the hands of the clock moved inexorably forward, the realm of
          archaeological illustration began to burgeon. Its essence evolved from
          mere documentation to a more nuanced domain of interpretation and
          reconstruction. The refinement of illustrative techniques, hand in
          glove with evolving archaeological methodologies, enriched the visual
          narrative of archaeological findings. It's riveting to observe how the
          evolving strokes of illustrators paralleled the burgeoning knowledge
          and methodologies in archaeology.
        </p>
        <br />
        <p>
          The Victorian era, with its blooming fascination for the ancient
          world, was a significant epoch in the narrative of archaeological
          illustration. The sketches of that era did more than just document the
          past; they were keys that unlocked gates to bygone worlds for the
          society of the time. Illustrations from the Egypt Exploration Fund
          expeditions, for instance, transported the mystique of the Egyptian
          past into the drawing rooms of Victorian England, letting imaginations
          roam the vast expanses of ancient deserts (Drower, 1995).
        </p>
        <br />
        <p>
          Technological advancements, particularly the advent of photography,
          brought forth a new dimension to archaeological illustration. While
          photography captured the reality in its raw essence, traditional
          illustrative techniques held their ground staunchly. The
          interpretative insights that a well-crafted illustration could offer
          were beyond the reach of photographs.
        </p>
        <br />
        <p>
          The 20th century ushered in a era of professionalisation in the
          domain. Establishment of professional bodies and academic courses
          honed the skills of archaeological illustrators. The rise of
          organisations like the Institute for Archaeological Illustration and
          Graphics was a notable stride towards moulding archaeological
          illustration into a recognised professional field (Jones, 2002).
        </p>
        <br />
        <p>
          Furthermore, the era of standardisation brought about uniformity in
          illustrative techniques, enhancing the accuracy and consistency in the
          visual communication of archaeological findings. The crafting of
          guidelines steered the presentation of archaeological illustrations,
          nurturing a harmonised dialogue between illustrators and
          archaeologists.
        </p>
        <br />
        <p>
          Embarking on a voyage through the annals of archaeological
          illustration unveils a narrative rich with evolving techniques and
          paradigms. From its rudimentary beginnings, the field has morphed into
          a critical conduit of archaeological discourse. The modern-day
          manifestations, like through platforms such as archaeoINK, echo the
          enduring significance of visual narratives in unravelling and
          communicating the intricacies of our shared past. Venturing into this
          domain, I too aim to explore the boundaries of what it means to be an
          illustrator in archaeology, hoping to contribute my strokes to the
          grand narrative that links us to our roots.
        </p>
        <br />
        <h3>References</h3>
        <p>
          Smith, P. (1988). Heinrich Schliemann’s illustrators: The
          archaeological vision of ancient Troy. Antiquity, 62(235), 273-287.
          <br />
          Drower, M. (1995). Flinders Petrie: A Life in Archaeology. London:
          Victor Gollancz. pp. 184-192.
          <br />
          Jones, M. (2002). The Professional Practice of Archaeological
          Illustration. Antiquity, 76(291), 209-217.
        </p>
      </>
    ),
  },
  scienceVsScientificCom: {
    id: 5,
    title:
      'Science Communication vs Scientific Communication: An Archaeological Perspective',
    author: 'Jona Schlegel',
    date: '18.09.2023',
    shortdescription:
      'This post delves into the differences between science communication and scientific communication, particularly in the field of archaeology.',
    image: '/images/scienceVsScientificCom.jpg',
    keywords: [
      'archaeology',
      'science communication',
      'scientific communication',
      'SciCom',
      'SciComm',
    ],
    content: (
      <>
        <p className="author center">by Jona Schlegel on the 18.09.2023</p>
        <p>
          Ever wondered why some scientific discoveries make headlines, while
          others only appear in scholarly journals? The key lies in
          understanding two terms: "science communication" and "scientific
          communication." This is especially interesting in archaeology, where
          new findings can either become a public sensation or remain known only
          to experts.
        </p>
        <br />
        <h3>Talking Science to the Public</h3>
        <p>
          First up is science communication. This is all about making science
          understandable and exciting for everyone, not just scientists. Think
          of it as translating "science speak" into everyday language. When
          archaeologists find a new ancient city, science communication turns
          that discovery into a story we all want to hear about.
        </p>
        <br />
        <h3>Scholarly Chats: The Other Side of the Coin</h3>
        <p>
          Now, let's flip to the other side: scientific communication. This is
          where scientists talk to each other in their own language. They share
          new research, critique each other's work, and collaborate on projects.
          It's the behind-the-scenes action that happens before a discovery
          makes it to the news.
        </p>
        <br />
        <h3>Citing Scientific Endeavours</h3>
        <p>
          In scientific communication, referencing and citing peers' work is a
          cornerstone. It not only acknowledges the contributions of others but
          also provides a means to trace the lineage of knowledge, which is
          fundamental in a discipline like archaeology that thrives on
          cumulative understanding. For instance, a recent publication by Smith
          et al. (2023) in the Journal of Archaeological Science elucidates how
          meticulous documentation and peer engagement significantly propelled
          their research on ancient urban settlements.
        </p>
        <br />
        <img
          src="/images/blogPosts/VennDiagramSciComm.jpg"
          alt="Venn diagram showing the overlap of SciCom and SciComm"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
        <h3>Two Sides of the Same Coin</h3>
        <p>
          You might think these two types of communication are worlds apart, but
          they're more like two sides of the same coin. A well-studied
          archaeological site can be both a topic for a research paper and the
          subject of a gripping documentary.
        </p>
        <br />
        <h3>Engagement Beyond Academia</h3>
        <p>
          Moreover, the symbiosis between science communication and scientific
          communication becomes particularly evident when considering the
          outreach initiatives in archaeology. Engaging the public in
          archaeological discoveries, through well-crafted narratives, not only
          piques their interest but also fosters a culture of appreciation
          towards our shared heritage. This in turn can catalyse support for
          archaeological endeavours, be it in the form of funding or policy
          formulation favouring archaeological explorations and conservation.
        </p>
        <br />
        <h3>Why Both Matter</h3>
        <p>
          Here's the kicker: these two forms of communication need each other.
          Good science communication can inspire the next generation of
          archaeologists. At the same time, solid scientific communication makes
          sure that the field keeps growing and stays credible.
        </p>
        <br />
        <p>
          Understanding the dichotomy between science communication and
          scientific communication is not an esoteric exercise but a pragmatic
          endeavour for anyone invested in the realm of science, more so for
          archaeologists. As we navigate through the complex tapestry of
          archaeological narratives, being adept in both forms of communication
          enriches the discipline, engenders a vibrant scholarly community, and
          enhances public engagement in unravelling the enigma of our past.
        </p>
      </>
    ),
  },
  archInk: {
    id: 4,
    title: '#archInk: A Journey Through Ink and Archaeology',
    author: 'Jona Schlegel',
    date: '11.09.2023',
    shortdescription:
      'This post explores the intersection of ink drawing and archaeology through the #archInk initiative.',
    image: '/images/archInk.jpg',
    keywords: [
      'archaeology',
      'ink',
      'archaeoINK',
      'archInk',
      'Inktober',
      'SciCom',
    ],
    content: (
      <>
        <p className="author center">by Jona Schlegel on the 11.09.2023</p>
        <p>
          In archaeology, the combination of art and science opens up exciting
          avenues for exploration. One standout example is #archInk, an
          initiative that fuses archaeological topics with the craft of (ink)
          drawing. This creative venture takes its cue from Inktober, a
          worldwide art challenge started in 2009 by Jake Parker. Originally
          aimed at honing his own drawing skills, Inktober has since inspired
          artists globally to create ink drawings all October long (Parker
          2023). Just as "Inktober" melds "ink" with "October," #archInk
          cleverly combines "archaeology" and "ink" into a single, evocative
          term.
        </p>
        <br />
        <h3>The Origins of #archInk</h3>
        <p>
          Dr. Katherine Cook, an archaeologist at the University of Montreal,
          Canada, kicked off #archInk in 2018. She designed it as a fun and
          educational way to spark creativity and fresh thinking in archaeology
          and anthropology students. Cook (2018) outlines the foundational
          principles of #archInk in her blog post, highlighting how it boosts
          creative communication and sharpens critical thinking skills.
        </p>
        <img
          src="/images/blogPosts/archInkPrompts.jpg"
          alt="archink prompt lists through the years"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
        <h3>My Personal Experience with #archInk</h3>
        <p>
          Jumping into #archInk is like stepping into a new world. Back in
          October 2020, I dove in for the first time, keen on sharpening my
          skills in analogue pen ink drawings. Every now and then, I'd mix in
          some watercolour for a splash of vibrancy. The 2020 prompt list and
          the work of fellow participants pushed me to think outside the box.
          They challenged me to bring each #archInk theme to life in my own
          unique way, sparking a deeper interest in the intersection of art and
          archaeology. Fast forward to 2021, and an iPad entered the scene. This
          shift to digital art opened up a whole new playground for me. My
          digital drawings from October 2021, mostly in striking black lines,
          offered a fresh perspective and helped me level up my digital art
          game. Now, with October 2023 just around the bend, I'm all geared up
          to dive back into the #archInk experience.
        </p>
        <img
          src="/images/blogPosts/archInkMyDrawings.jpg"
          alt="archink prompt lists through the years"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
        <h3>#archInk and SciCom</h3>
        <p>
          Art's role in scientific communication, or SciCom, is getting the
          spotlight it deserves. Take the study by Gonzalez et al. (2021), for
          example. They talked to artists in a travelling science museum and
          found that art does more than just look pretty. It sparks dialogue,
          challenges the way we think, and even changes how we feel about
          knowledge. The study shows that these travelling art projects can make
          science accessible to everyone, no matter where they are. Curtis et
          al. (2012) make a similar point. They say that adding a splash of art
          to scientific events can make the whole experience more engaging. It
          gets people thinking about new ways to talk about science, which is
          always a good thing. So, what does this mean for #archInk? Well, it
          turns this art challenge into a powerhouse for talking about
          archaeology. When you draw something for #archInk, you're not just
          making art; you're exploring the world of archaeology in a whole new
          way. And thanks to hashtags like #archInk on X (former Twitter) and
          Instagram, everyone can share their creations and learn from each
          other. But #archInk isn't just for October. If you're itching to get
          your hands dirty with some ink and archaeology, why wait? You can join
          #inktober52, which runs all year and gives you a new theme every week
          (Parker 2023). So, you can keep those creative juices flowing and
          maybe even come up with your own archaeological themes to explore. To
          see what I'm up to, give me a follow at @archaeoINK on Instagram. I'll
          be sharing my own blend of art and archaeology, and I can't wait to
          see what you'll bring to the table. So, also share your works starting
          on the first of October 2023 with the hashtag #archInk
        </p>
        <h3>References</h3>
        <p>
          Curtis, D., Reid, N., & Ballard, G. (2012). Communicating ecology
          through art: what scientists think. Ecology and Society, 17(2).
          <br />
          Gonzalez, A., Bevilaqua, D., & Soares, M. (2021). Communicating
          science is an art! what do artists who work in an itinerant science
          museum say?. Actio Docência Em Ciências, 6(2), 1.
          <br />
          Cook, K. 2018. Teaching & Learning Creative Habits: The Evolution of
          #archInk. UTP Teaching Culture Blog. Available at:
          http://www.utpteachingculture.com/teaching-learning-creative-habits-the-evolution-of-archink/
          [Accessed 11 September 2023].
          <br />
          Parker, J. 2023 Inktober. Available at: https://inktober.com [Accessed
          11 September 2023].
        </p>
      </>
    ),
  },
  introduction: {
    id: 1,
    title: 'Introduction',
    shortdescription:
      'This blog post will focus on what the purpose is of this blog, and what kind of topics I want to cover and how regularly I will try to upload a post.',
    image: '/images/introduction.jpg',
    keywords: [
      'introduction',
      'Jona Schlegel',
      'archaeoINK',
      'LBI ArchPro',
      'work',
      'experience',
    ],
    content: (
      <>
        <p className="author center">by Jona Schlegel on the 08.12.2022</p>
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
          wrote an article that will be published at the beginning of next year.
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
    image: '/images/modelling.jpg',
    keywords: [],
    content: (
      <>
        <p className="author center">by Jona Schlegel on the dd.mm.yyyy</p>
        <p></p>
      </>
    ),
  },
  drawing: {
    id: 3,
    title: 'Why I draw archaeological related doodles',
    shortdescription: 'In this post I will explore, ',
    image: '/images/drawing.jpg',
    keywords: [
      'drawing',
      'art',
      'archeoINK',
      'illustrations',
      'sketch',
      'doodle',
      'archaeology',
    ],
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
  const { slug } = router.query;

  const blogData = blogItems[slug];

  return (
    <Layout>
      <Head>
        <title>{blogData ? blogData.title : 'Loading...'}</title>
        <meta name="description" content="Blog Page" />
      </Head>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '100%',
                  overflow: 'hidden',
                }}
              >
                {blogData && (
                  <Image
                    src={blogData.image}
                    alt={blogData.title}
                    width={500}
                    height={300}
                  />
                )}
              </div>
              {blogData && <h1>{blogData.title}</h1>}
            </header>
            {blogData ? blogData.content : 'Loading...'}
          </div>
        </section>
      </div>
    </Layout>
  );
}
