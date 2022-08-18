import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Dev. Newsletter</GradientText>
        </>
      }
      description="I like to share my opinion about new dev technologies, I share some open source code too.
      If you're interested you can join me."
    />
  </Section>
);

export { CTA };
