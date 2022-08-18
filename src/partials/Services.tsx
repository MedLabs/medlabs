import { GradientText, Section } from 'astro-boilerplate-components';

const Services = () => (
  <Section
    title={
      <>
        My <GradientText>Services</GradientText>
      </>
    }
  >
    <div className="flex flex-col justify-evenly gap-4 md:flex-row ">
      <div className="flex w-full flex-col items-center rounded-md bg-stone-700 p-2 hover:scale-110 hover:animate-pulse md:w-1/4 ">
        <img
          src="/assets/images/website.png"
          alt="Website developement"
          width="96"
          height="96"
        />
        <p>Websites development</p>
      </div>
      <div className="flex w-full flex-col items-center rounded-md bg-stone-700 p-2 hover:scale-110 hover:animate-pulse  md:w-1/4">
        <img
          src="/assets/images/optimization.png"
          alt="Web Applications developement"
          width="96"
          height="96"
        />
        <p>Web Applications</p>
      </div>

      <div className="flex w-full flex-col items-center rounded-md bg-stone-700 p-2 hover:scale-110 hover:animate-pulse  md:w-1/4">
        <img
          src="/assets/images/table.png"
          alt="Data scraping"
          width="96"
          height="96"
        />
        <p>Data Scraping</p>
      </div>
      <div className="flex w-full flex-col items-center rounded-md bg-stone-700 p-2 hover:scale-110 hover:animate-pulse  md:w-1/4">
        <img
          src="/assets/images/machine-learning.png"
          width="96"
          height="96"
          alt="ML and AI apps"
        />
        <p>Machine Learning</p>
      </div>
    </div>
  </Section>
);

export { Services };
