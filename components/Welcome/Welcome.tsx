import { Title, Text, Anchor, Container } from '@mantine/core';
import classes from './Welcome.module.css';
import { CardsCarousel } from '../CardsCarousel/CardsCarousel';
import { HeroBullets } from '../HeroBullets/HeroBullets';

export function Welcome() {
    return (
        <>
            <HeroBullets />
            {/* <Title className={classes.title} ta="center" mt={100}>
                Welcome to Jacky&apos;s{' '}
                <Text
                    inherit
                    variant="gradient"
                    component="span"
                    gradient={{ from: 'pink', to: 'yellow' }}
                >
                    bumhole
                </Text>
            </Title> */}
            {/* <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                This starter Next.js project includes a minimal setup for server side rendering, if
                you want to learn more on Mantine + Next.js integration follow{' '}
                <Anchor href="https://mantine.dev/guides/next/" size="lg">
                    this guide
                </Anchor>
                . To get started edit index.tsx file.
            </Text> */}
            <Container size="lg">
                <CardsCarousel />
            </Container>
        </>
    );
}
