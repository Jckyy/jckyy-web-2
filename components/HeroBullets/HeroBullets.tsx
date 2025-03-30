import { Container, Button, Group, Text } from '@mantine/core';
// import NextImage from 'next/image';
import Link from 'next/link';
// import lempika from './lempika.png';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          {/* TODO: Actually write something useful here */}
          {/*<Text c="dimmed">Hi cunt,</Text>*/}
          <Text c="dimmed" mt="md">
            I&apos;m a Developer from Australia that is interested in both frontend + backend
            development.
          </Text>

          <Text c="dimmed" mt="md">
            This is my awfully outdated website locally hosted on a home Ubuntu server using Docker containers and Caddy as the reverse-proxy.
          </Text>

          <Group mt={30}>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Blog
            </Button>
            <Link href="https://github.com/Jckyy">
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/jckyy/">
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                LinkedIn
              </Button>
            </Link>
          </Group>
        </div>
        <div className={classes.blobContainer}>
          <div className={classes.blob}>
            <svg>
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
                <feColorMatrix
                  in="colorNoise"
                  type="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
                />
                <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
                <feGaussianBlur in="monoNoise" stdDeviation="5" />{' '}
              </filter>
              <circle cx="200" cy="50" r="50" fill="red" filter="url(#noiseFilter)" />
            </svg>
          </div>
        </div>

        {/* <Image
                    component={NextImage}
                    src={lempika}
                    className={classes.image}
                    alt="lempika image thingy mebob"
                /> */}
      </div>
    </Container>
  );
}
