import { Container, Title } from '@mantine/core';
import { CardsCarousel } from '../CardsCarousel/CardsCarousel';
import { HeroBullets } from '../HeroBullets/HeroBullets';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Container size="md">
        <Title fz="6xl" className={classes.title}>
          Jacky <span className={classes.highlight}>Yao</span>{' '}
        </Title>
      </Container>
      <HeroBullets />

      <Container size="lg" className={classes.container}>
        <Title order={2}>Projects</Title>
        <CardsCarousel />
      </Container>

      <Container size="lg" className={classes.container}>
        <Title order={2}>Blog Posts</Title>
        <CardsCarousel />
      </Container>

      <Container size="lg" className={classes.container}>
        <Title order={2}>Timeline / Resume?</Title>
      </Container>
    </>
  );
}
