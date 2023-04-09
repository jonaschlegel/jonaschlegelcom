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
          <h2>Statue from the British Museum</h2>
        </p>
        <p>
          The statue from the British Museum is a 3D model of the upper body of
          a woman, created using Metashape. The model was created from
          photographs that I took of the statue in 2017 with my phone. The
          statue itself is a finely crafted piece of art, depicting the upper
          body of a woman with intricate details in her clothing and jewelry.
          The model captures the overall shape and form of the statue, although
          some of the finer details are not as well-defined due to the
          resolution of the photographs and the limitations of the 3D modeling
          software. Despite these limitations, the 3D model is still detailed
          enough to see the overall shape and form of the statue, and to
          appreciate the skill and artistry that went into its creation. It
          provides a useful and interesting way to view and study the statue,
          and can be used for a variety of purposes, such as visualization,
          presentation, or research. Overall, the statue from the British Museum
          is a beautiful and well-crafted piece of art, and the 3D model
          provides a useful and interesting way to view and study it.
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
          <h2>Grave stone from Germany</h2>
        </p>
        <p>
          The small church in Rheinsberg, Germany is a beautiful and historic
          building, with many interesting features and artifacts. One of these
          is a grave stone of a man with knight-like armor, which I discovered
          on a visit to the church. I took several photographs of the grave
          stone with my Sony alpha 6000 and 50mm lens, capturing the details of
          the inscription and the intricacies of the armor. I then used these
          photographs to create a 3D model of the grave stone, using specialized
          software. The 3D model of the grave stone captures all of the details
          of the original, including the inscription and the intricate design of
          the armor. It provides a useful and interesting way to view and study
          the grave stone, and can be used for a variety of purposes, such as
          visualization, presentation, or research. Overall, the small church in
          Rheinsberg is a beautiful and historic building, and the grave stone
          with knight-like armor is a fascinating and intriguing artifact. The
          3D model that I created provides a useful and interesting way to view
          and study the grave stone, and can be used for a variety of purposes.
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
        <br />
        <p>
          <h2>Simple ceramic vessel</h2>
        </p>
        <p>
          Nomad sculpt and the lathe tool are digital sculpting and modeling
          tools that can be used to create 3D models of objects, including
          ceramic vessels. Digital sculpting and modeling allow artists and
          designers to quickly and easily create complex and detailed 3D models,
          without the need for physical clay or other materials. To create a
          simple ceramic vessel using nomad sculpt and the lathe tool, you would
          first need to create a basic shape for the vessel. This could be done
          by using the sculpting tools in nomad sculpt to shape and form a
          virtual piece of clay into the desired shape. Once the basic shape is
          created, you can use the lathe tool to refine the shape, adding
          details such as handles, spouts, or decorative elements. Once the 3D
          model of the ceramic vessel is complete, you can export it to a 3D
          printer or other fabrication tool, which can then be used to create a
          physical version of the vessel. Alternatively, you can use the 3D
          model to create digital renderings or animations, which can be used
          for visualization, presentation, or other purposes. Overall, nomad
          sculpt and the lathe tool are powerful and versatile tools that can be
          used to quickly and easily create 3D models of ceramic vessels, or
          other objects. They provide a wide range of sculpting and modeling
          tools, and can be used to create complex and detailed 3D models in a
          short amount of time.
        </p>
        <iframe
          title="Pottery vessel"
          frameBorder="0"
          allowFullscreen
          allow="fullscreen; autoplay; vr"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/b639c00a3c0244b3b1c9606bfc768e42/embed"
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
          <h2>3D modelled trowel</h2>
        </p>
        <p>
          Nomad sculpt is a powerful and versatile digital sculpting and
          modeling tool that allows users to create detailed and complex 3D
          models. I recently got back into using the software and followed some
          tutorials on YouTube to improve my skills. Through this process, I
          became more familiar with the features and capabilities of nomad
          sculpt, and began to explore the world of 3D sculpting in more depth.
          One of the models that I created using nomad sculpt was a simple
          trowel. I began by using the sculpting tools in the software to shape
          and form a virtual piece of clay into the desired shape. I then used
          the modeling tools to add details and refine the shape, creating a
          realistic and detailed 3D model of a trowel. In a second step, I gave
          the trowel model a more rough and weathered look, using the sculpting
          tools to add texture and imperfections to the surface. This added a
          sense of realism and authenticity to the model, and made it look more
          like a real, used trowel. Overall, nomad sculpt is a powerful and
          versatile digital sculpting and modeling tool that allows users to
          create detailed and complex 3D models. I recently used the software to
          create a model of a simple trowel, and added a rough and weathered
          texture to give it a more realistic look.
        </p>
        <p>
          <iframe
            title="trowel"
            frameBorder="0"
            allowFullscreen
            allow="fullscreen; autoplay; vr"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/d4ad1c489d474befb5fb51ca05921e6a/embed"
            style={{
              width: '60%',
              minWidth: 400,
              height: 350,
              margin: '0 auto',
              display: 'block',
            }}
          ></iframe>
        </p>
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
          <p>
            Scientific writing is the presentation of research findings and
            ideas in a clear and concise manner. This can take the form of
            journal articles, conference papers, or other types of publications.
            Scientific writing is an important part of the scientific process,
            as it allows researchers to share their findings with others in the
            field, and to contribute to the collective body of knowledge.
          </p>
          <p>
            The peer-review process is a critical part of the publication
            process in academia. After a researcher has written a paper, it is
            submitted to a journal for publication. The journal then sends the
            paper to other experts in the field (the peers) for review. These
            reviewers provide feedback on the paper, including suggestions for
            improvement and assessments of the paper's quality. The journal
            editors then use this feedback to decide whether to accept or reject
            the paper for publication.
          </p>
          <p>
            Publishing in academia is important for several reasons. Firstly, it
            allows researchers to share their findings with others in their
            field, which can lead to further collaboration and research.
            Secondly, publishing is often a requirement for obtaining research
            funding, grants, and other forms of support. Finally, publishing is
            a key part of the academic career path, and is often necessary for
            advancement in academia, such as getting promoted or securing a
            tenure-track position.
          </p>
          <p>
            <em>
              Here the collection and overview of my currently published
              articles starting with the newest and ending with the oldest.
            </em>
            <br />
          </p>
          <h2>AUTOGRAF-AUTomated Orthorectification of GRAFfitti Photos</h2>
          <p className="author">peer-reviewed article</p>
          <p className="author">
            Benjamin Wild, Geert J. Verhoeven, Martin Wieser, Camillo Ressl,
            Jona Schlegel, Stefan Wogrin, Johannes Otepka-Schremmer, Norbert
            Pfeifer
          </p>
          <p>
            <em>Heritage</em> 2022, <em>5</em>(4), 2987-3009
          </p>

          <div>
            <a href="https://doi.org/10.3390/heritage5040155 ">
              doi.org/10.3390/heritage5040155
            </a>
          </div>
          <p>
            <br />
          </p>
          <h2>Towards a Graffiti Thesaurus in SKOS</h2>
          <p className="author">presentation</p>
          <p className="author">
            Jona Schlegel, Massimiliano Carloni, Stefan Wogrin, Geert J. J.
            Verhoeven
          </p>
          <p>May 2022, goINDIGO 2022 symposium</p>
          <div>
            <a heref="http://dx.doi.org/10.5281/zenodo.6578470">
              DOI: 10.5281/zenodo.6578470
            </a>
          </div>
          <p>
            <br />
          </p>
          <h2>Discovering & recording new graffiti within project INDIGO</h2>
          <p className="author">presentation</p>
          <p className="author">
            Geert J. J. Verhoeven, Jona Schlegel, Martin Wieser, Stefan Wogrin
          </p>
          <p>May 2022, goINDIGO 2022</p>
          <div>
            <a href="http://dx.doi.org/10.5281/zenodo.6574796">
              DOI: 10.5281/zenodo.6574796{' '}
            </a>
          </div>
          <p>
            <br />
          </p>
          <h2>
            goINDIGO 2022 international graffiti symposium: Book of abstracts
          </h2>
          <p className="author">booklet</p>
          <p className="author">
            Geert J. J. Verhoeven, Massimiliano Carloni, Jona Schlegel, Martina
            Trognitz, Benjamin Wild, Stefan Wogrin, Alex Hale, Chiara Ricci, C.
            Paola, A. Scarcella, S. M. Sunara, Moira Bertasa, D. Scalarone,
            Martin Wieser, Laura Luque Rodrigo, Carmen Moral Ruiz, Rita L. Amor
            Garcia, Gabriele Goffriller, Adolfa Molada, Sven Niemann, Stefan
            Eichert, Nina Richards, Martin de la Iglesia, Camillo Ressl,
            Johannes Otepka-Schremmer, Norbert Pfeifer, Ljiljana Radošević,
            Flaminia Cavallari, Elena Ippoliti, Alessandra Meschini, Michele
            Russo, Klaudia Kreslehner
          </p>
          <p>May 2022, goINDIGO 2022</p>
          <div>
            <a href="http://dx.doi.org/10.5281/zenodo.6591241">
              DOI: 10.5281/zenodo.6591241
            </a>
          </div>
          <p>
            <br />
          </p>
          <h2>
            Project INDIGO - document, disseminate & analyse a graffiti-scape
          </h2>
          <p className="author">presentation</p>
          <p className="author">
            Benjamin Wild, Geert J. J. Verhoeven, Jona Schlegel, Martin Wieser,
            Norbert Pfeifer, Stefan Wogrin, Lothar Eysn, Massimiliano
            Carloni,Bernhard Koschiček-Krombholz, Adolfo Molada, Johannes
            Otepka-Schremmer, Camillo Ressl, Matina Trognitz, Alexander
            Watzinger
          </p>
          <p>March 2022, 3D-ARCH</p>
          <div>
            <a href="http://dx.doi.org/10.5281/zenodo.6339489">
              DOI: 10.5281/zenodo.6339489
            </a>
          </div>
          <p>
            <br />
          </p>
          <h2>
            Project INDIGO - document, disseminate & analyse a graffiti scape
          </h2>
          <p className="author">article</p>
          <p className="author">
            Geert J. J. Verhoeven, Benjamin Wild, Jona Schlegel, Martin Wieser,
            Norbert Pfeifer, Stefan Wogrin, Lothar Eysn, Massimiliano Carloni,
            Bernhard Koschicek-Krombholz, Adolfo Molada, Johannes
            Otepka-Schremmer, Camillo Ressl, Martina Trognitz, Alexander
            Watzinger
          </p>
          <p>
            Int. Arch. Photogramm. Remote Sens. Spatial Inf. Sci.,
            XLVI-2/W1-2022, 513–520, 2022
          </p>
          <div>
            <a href="http://dx.doi.org/10.5194/isprs-archives-XLVI-2-W1-2022-513-2022">
              DOI: 10.5194/isprs-archives-XLVI-2-W1-2022-513-2022
            </a>
          </div>
          <p>
            <br />
          </p>
          <h2>
            Prospecting the UNESCO World Heritage Site of Müstair (Switzerland)
          </h2>
          <p className="author">article</p>
          <p className="author">
            Jona Schlegel, Geert J. J. Verhoeven, Patrick Cassitti, Alois
            Hinterleitner, Klaus Löcker, Hannes Schiel, Christoph Walser, Thomas
            Reitmaier, Wolfgang Neubauer
          </p>
          <p>2021, Remote Sensing 13(13):2515</p>
          <div>
            <a href="http://dx.doi.org/10.3390/rs13132515">
              DOI: 10.3390/rs13132515
            </a>
          </div>
          <p>
            <br />
          </p>
          <h2>
            Towards an automated analysis of geophysical archaeological
            prospection data
          </h2>
          <p className="author">conference paper</p>
          <p className="author">
            Immo Trinks, Alois Hinterleitner, Mario Wallner, Klaus Löcker,
            Alexander Bornik, Johannes Höller, Matthias Kucera, Roland
            Filzwieser, Hannes Schiel, Tanja Trausmuth, Alexandra Vonkilch, Jona
            Schlegel, David J. Ruß, Wolfgang Neubauer
          </p>
          <p>November 2020, CHNT</p>
          <div>
            <a href="https://www.researchgate.net/publication/345320978_Towards_an_automated_analysis_of_geophysical_archaeological_prospection_data">
              Short paper
            </a>
          </div>
          <p>
            <br />
          </p>
          <h2>
            CrowdSlide - a mobile web application for building a database of
            gravitational mass movements using volunteer field reports
          </h2>
          <p className="author">conference paper</p>
          <p className="author">
            Jona Schlegel, Annemarie Grass, Florian Fuchs
          </p>
          <p>May 2020, EGU General Assembly 2020</p>
          <div>
            <a href="http://dx.doi.org/10.5194/egusphere-egu2020-16503">
              DOI: 10.5194/egusphere-egu2020-16503
            </a>
          </div>
          <p>
            <br />
          </p>
          <h2>
            Pliska - integrated geophysical prospection of the first Early
            Medieval Bulgarian capital
          </h2>
          <p className="author">article</p>
          <p className="author">
            Roland Filzwieser, Andrey Aladzhov, Jona Schlegel, Alois
            Hinterleitner, Nives Doneus, Hannes Schiel, Janko Dimitrov, Martin
            Gamon, Falko Daim, Wolfgang Neubauer
          </p>
          <p>Be-JA vol. 9 (2019), 229-261</p>
          <div>
            <a href="https://www.researchgate.net/publication/338150265_Pliska-integrated_geophysical_prospection_of_the_first_Early_Medieval_Bulgarian_capital">
              be-ja.org
            </a>
          </div>
          <p>
            <br />
          </p>
        </p>
      </>
    ),
  },
  excavations: {
    id: 3,
    title: 'Excavations.',
    shortdescription: 'Here you find my excavations and field work projects',
    content: (
      <>
        <p>
          Archaeological excavations are the careful and methodical uncovering
          and study of archaeological remains. These remains can be anything
          from artifacts and structures to human and animal remains, and can
          provide insight into the cultures, societies, and histories of the
          past. Archaeologists use excavations to learn more about the people
          who lived in a particular place and time, and to uncover and preserve
          artifacts for future study.
        </p>
        <p>
          Excavation techniques have been used in archaeology since at least the
          19th century. In the early days of archaeology, excavations were often
          carried out in a haphazard manner, with little regard for the
          stratigraphy (the layers of soil and other deposits) at a site. As the
          field of archaeology has evolved, however, excavation techniques have
          become more precise and scientific.
        </p>
        <p>
          Today, archaeologists use a variety of tools and techniques to conduct
          excavations, including shovels, trowels, sieves, and brushes. They may
          also use specialized equipment like ground-penetrating radar and
          remote sensing technology to help locate and map underground features.
          Excavations are carefully planned and documented, and artifacts are
          carefully collected and analyzed to provide as much information as
          possible about the site and the people who lived there.
        </p>
        <p>
          Overall, archaeological excavations are a crucial part of the study of
          the past, and provide a wealth of information about the cultures,
          societies, and histories of ancient people.
        </p>
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
        <p>
          Web development is the process of creating and maintaining websites
          and web applications. This involves a wide range of skills and
          technologies, including coding, design, content creation, and search
          engine optimization. Web developers use a variety of tools and
          languages, such as HTML, CSS, JavaScript, and others, to build and
          manage websites and web applications.
        </p>
        <p>
          Web development can be used in archaeology in a number of ways. For
          example, archaeologists can create websites to share information about
          their research and findings with the public. These websites can
          include text, images, videos, and other multimedia content, and can be
          used to engage the public in the study of the past. Web development
          can also be used to create online databases and tools for managing and
          analyzing archaeological data, which can be used by researchers in the
          field.
        </p>
        <p>I followed the codecademy course, and got a certificate thereby.</p>
        <p>
          <h2>Jammming</h2>
        </p>
        <p>
          Jammming is a tool that allows users to create playlists on Spotify.
          It is designed to make it easy and intuitive to search for and add
          songs to a playlist, and to manage and organize the songs in a
          playlist. To use Jammming, users first need to log in to their Spotify
          account. They can then search for songs by artist, album, or track
          name, and add them to their playlist. Jammming also allows users to
          reorder the songs in their playlist, and to remove songs that they no
          longer want. One of the key features of Jammming is its user-friendly
          interface. The tool is designed to be easy to use, with clear and
          intuitive controls for searching for songs and managing a playlist. It
          also provides helpful suggestions and recommendations for songs that
          might be a good fit for the playlist. Overall, Jammming is a useful
          tool for Spotify users who want to create and manage their own
          playlists. It makes the process of creating a playlist easy and
          enjoyable, and allows users to customize their listening experience on
          Spotify.
        </p>
        <p>
          <div>
            <a href="https://github.com/jonaschlegel/jammming-codecademy">
              Jammming
            </a>
          </div>
        </p>
        <p>
          <h2>Personal website</h2>
        </p>
        <p>
          The web development project is a personal website that I have created
          using next.js, a popular JavaScript framework for building web
          applications. The website includes a portfolio section, where I
          showcase some of my previous work and projects, as well as a blog,
          where I write about topics that interest me and share my thoughts and
          ideas. The website is designed to be user-friendly and easy to
          navigate. The portfolio section is organized into different
          categories, such as web development, graphic design, and writing, so
          that users can easily find the projects that they are interested in.
          The blog section is organized into posts, with each post featuring a
          title, an image, and a brief summary, so that users can quickly browse
          through the available posts and find ones that they want to read in
          more detail. The website is built using next.js, which allows me to
          create a fast, scalable, and responsive web application. Next.js also
          provides a variety of built-in features and tools, such as automatic
          code splitting, server-side rendering, and more, which make it easy
          for me to develop and maintain the website. Overall, the web
          development project is a personal website that I have created to
          showcase my work and share my thoughts and ideas. It is built using
          next.js, and includes a portfolio and a blog.
        </p>
        <p>
          <div>
            <a href="https://github.com/jonaschlegel/jonaschlegel.com">
              jonaschlegel github
            </a>
          </div>
        </p>
        <p>
          <h2>LGO converter</h2>
        </p>
        <p>
          The software tool is a program that I developed to convert data from a
          total station into a format that can be used by a geographic
          information system (GIS). A total station is an instrument that is
          used to measure angles and distances, and is commonly used in
          surveying and mapping. However, the data from a total station is often
          in a proprietary format that is difficult to use in a GIS.
          <br />
          The software tool that I developed addresses this issue by providing a
          simple and user-friendly interface for converting total station data
          into a format that can be easily imported into a GIS. The tool allows
          users to select the data files from the total station, and then
          automatically processes and converts the data into a format that is
          compatible with the GIS. The converted data can then be imported into
          the GIS, where it can be visualized, analyzed, and used in other
          applications.
          <br />
          Overall, the software tool is a useful tool for anyone who needs to
          convert data from a total station into a format that can be used by a
          GIS. It provides a simple and user-friendly interface, and can save
          time and effort by automatically processing and converting the data.
        </p>
        <div>
          <a href="https://github.com/jonaschlegel/lgo-agisoft-converter">
            lgo-agisoft-converter
          </a>
        </div>
        <p></p>
        <p>
          <h2>CrowdSlide</h2>
        </p>
        <p>
          CrowdSlide is a web development project that I created during a
          hackathon in Vienna. The project is designed to enable people to
          monitor land or rock slides in their area by taking photographs and
          adding some additional information.
          <br />
          The idea behind CrowdSlide is to use the power of citizen science to
          collect and analyze data about land or rock slides. By allowing people
          to take photographs and add information about the location, size, and
          other characteristics of the slide, CrowdSlide can create a database
          of data that can be used to understand and monitor these events.
          <br />
          The website for CrowdSlide is designed to be user-friendly and easy to
          use. Users can register for an account and then upload photographs and
          information about land or rock slides that they have observed. The
          website also includes a map feature, which allows users to see the
          location of the slides on a map, and to view information about the
          slides in more detail.
          <br />
          Overall, CrowdSlide is a web development project that uses the power
          of citizen science to collect and analyze data about land and rock
          slides. It is designed to be user-friendly and easy to use, and can
          provide valuable information to help understand and monitor these
          events.
        </p>
        <div>
          <a href="https://github.com/jonaschlegel/crowdslide">crowdslide</a>
        </div>
        <p></p>
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
          Magnetics is the study of magnetic fields and their effects. This can
          include the study of the Earth's magnetic field, as well as the study
          of magnetic materials and their properties. In archaeology, magnetics
          can be used as a non-invasive method for locating and mapping buried
          archaeological features. Archaeologists use magnetometers, which are
          instruments that measure the strength and direction of magnetic
          fields, to survey a site. When buried objects or structures are
          present, they can cause changes in the local magnetic field. By
          measuring these changes, archaeologists can create maps of underground
          features, such as walls, foundations, or other structures. Magnetic
          surveys can be useful for several reasons. Firstly, they are
          non-invasive, meaning that they do not require excavating or
          disturbing the site. This can be especially important for sensitive or
          fragile sites. Secondly, magnetic surveys can cover large areas
          quickly and efficiently, allowing archaeologists to locate and map
          buried features over a wide area. Finally, magnetic surveys can be
          used in conjunction with other methods, such as ground-penetrating
          radar or remote sensing, to provide a more complete picture of a site.
          Overall, magnetics is a valuable tool in archaeology, as it allows
          archaeologists to locate and map buried features without disturbing
          the site.
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
        <p>
          Ground-penetrating radar (GPR) is a technology that uses
          electromagnetic waves to detect and map buried objects and structures.
          It works by emitting a pulse of electromagnetic energy into the
          ground, and then measuring the time it takes for the energy to reflect
          back to the surface. By analyzing the reflections, researchers can
          create maps of underground features, such as walls, foundations, or
          other structures. In archaeology, GPR can be a valuable tool for
          locating and mapping buried archaeological features. It is
          non-invasive, meaning that it does not require excavating or
          disturbing the site. This can be especially important for sensitive or
          fragile sites. GPR can also cover large areas quickly and efficiently,
          allowing archaeologists to locate and map buried features over a wide
          area. GPR can be used in conjunction with other methods, such as
          magnetic surveys or remote sensing, to provide a more complete picture
          of a site. It can also be used to help plan excavations, by providing
          information about the location and depth of buried features. Overall,
          ground-penetrating radar is a valuable tool in archaeology, as it
          allows archaeologists to locate and map buried features without
          disturbing the site.
        </p>
      </>
    ),
  },
  art: {
    id: 7,
    title: 'Art in archaeology.',
    shortdescription:
      'Here you find my art works, my ko-fi page and my instagram account and several other aspects like challenges that are showcasing my art.',
    content: (
      <>
        <p>
          Art and archaeology have a long history of interaction and
          collaboration. Archaeologists often use artistic techniques and skills
          to record, reconstruct, and interpret the objects, structures, and
          landscapes they study. This can include drawing, photography,
          sculpture, and other forms of artistic expression.
        </p>
        <p>
          Art can be a valuable tool in archaeology for several reasons.
          Firstly, it allows archaeologists to record and document their
          findings in a precise and visually appealing way. This can be
          especially important for complex or fragile artifacts, or for sites
          that are difficult to access or study. Secondly, art can be used to
          create realistic or interpretive reconstructions of ancient scenes or
          objects, which can help to bring the past to life for researchers and
          the public.
        </p>
        <p>
          In addition to its use as a scientific tool, art can also be a popular
          hobby among archaeologists and others interested in the past. Many
          archaeologists enjoy creating art as a way to relax and express their
          passion for the field. This can take the form of sketches, paintings,
          sculptures, or other artistic mediums. Art can also be a way for
          archaeologists to connect with others who share their interests, and
          to engage the public in the study of the past.
        </p>
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
            {portfolioItems[router.query.slug].content}
          </div>
        </section>
      </div>
    </Layout>
  );
}
