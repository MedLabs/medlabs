import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Dentalis"
        description="A modern dashboard made with love for dentists to manage all the dental clinic stuff in a nice looking UI using exclusive and performant tools..."
        link="https://dentalis.tn"
        img={{
          src: '/assets/images/dent_.svg',
          alt: 'Dentalis for Dentists',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Vue.js</Tags>
            <Tags color={ColorTags.LIME}>Quasar</Tags>
            <Tags color={ColorTags.SKY}>MongoDB</Tags>
            <Tags color={ColorTags.ROSE}>Dexie</Tags>
          </>
        }
      />
      <Project
        name="V-Tracker"
        description="A custom tool to track, count and classify vehicles by category, direction and timestamp in realtime, on multiple videos added by the user, then exported to an excel sheet automatically."
        link="#"
        img={{
          src: '/assets/images/project-maps.png',
          alt: 'Vehicles tracker and counter',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>openCV</Tags>
            <Tags color={ColorTags.YELLOW}>Qt</Tags>
            <Tags color={ColorTags.SKY}>YoloV4</Tags>
          </>
        }
      />

      <Project
        name="Dini"
        description="An App/website containing all the Holy Quran and the explanation of each Ayah.
         WIP the Sunnah will be added where people will find all the Prophete's Hadiths and their explainations."
        link="https://dini.netlify.app"
        img={{ src: '/assets/images/dini-icon.png', alt: 'Dini - islamic App' }}
        category={
          <>
            <Tags color={ColorTags.LIME}>React</Tags>
            <Tags color={ColorTags.EMERALD}>Bulma</Tags>
            <Tags color={ColorTags.YELLOW}>Javascript</Tags>
          </>
        }
      />
      <Project
        name="PrixMédoc"
        description="An online tool made for pharmacists and normal human beings in Tunisia to access the latest prices of drugs that are refunded by CNAM. 
        It uses a very fast search mode."
        link="https://prixmedoc.netlify.app"
        img={{ src: '/assets/images/prixmedoc-icon.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Typescript</Tags>
            <Tags color={ColorTags.INDIGO}>Vue.js</Tags>
            <Tags color={ColorTags.ROSE}>Vite</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
