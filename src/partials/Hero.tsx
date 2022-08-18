import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Lasx</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a fullstack developer, I build Web / Desktop Apps{' '}
          <a
            className="text-lime-400 hover:underline"
            href="https://dentalis.tn"
          >
            check dentalis.tn
          </a>{' '}
          for example as one of my web apps for dentists, or you may have a look
          on my{' '}
          <a
            className="text-lime-400 hover:underline"
            href="https://github.com/medlabs"
          >
            Github
          </a>{' '}
          I use the latest technologies to get the best results.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/lassaad">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://facebook.com/lassaad">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://linkedin.com/in/lassaad">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
