import { Image, Container, Button, Group, Text } from '@mantine/core';
import NextImage from 'next/image';
import Link from 'next/link';
import lempika from './lempika.png';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    {/* TODO: Actually write something useful here */}
                    <Text c="dimmed">Hi cunt,</Text>
                    <Text c="dimmed" mt="md">
                        I&apos;m a Developer from Australia that is interested in both frontend +
                        backend development.
                    </Text>

                    <Group mt={30}>
                        <Button variant="default" radius="xl" size="md" className={classes.control}>
                            Blog
                        </Button>
                        <Link href="https://github.com/Jckyy">
                            <Button
                                variant="default"
                                radius="xl"
                                size="md"
                                className={classes.control}
                            >
                                GitHub
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/jckyy/">
                            <Button
                                variant="default"
                                radius="xl"
                                size="md"
                                className={classes.control}
                            >
                                LinkedIn
                            </Button>
                        </Link>
                    </Group>
                </div>
                <Image
                    component={NextImage}
                    src={lempika}
                    className={classes.image}
                    alt="lempika image thingy mebob"
                />
            </div>
        </Container>
    );
}
