import { Container, Paper, Title } from '@mantine/core';
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

        <HeroBullets />

        {/* <Title order={2}>Projects</Title>

        <Container size="md" className={classes.paper}>
          <CardsCarousel />
        </Container>

        <Title order={2} mt="xl">
          Timeline / Resume?
        </Title> */}
      </Container>
    </>
  );
}
