import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import NextImage from 'next/image';
import lempika from './lempika.png';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Welcome to Jacky&apos;s <span className={classes.highlight}>modern</span>{' '}
                        bumhole{' '}
                    </Title>
                    <Text mt="md">
                        Just some random asian dude with a nice butthole. I like to code and play
                        with...
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconHeart
                                    style={{ width: rem(12), height: rem(12) }}
                                    stroke={1.5}
                                />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>TypeScript based</b> – build type safe applications, all components
                            and hooks export types
                        </List.Item>
                        <List.Item>
                            <b>Free and open source</b> – all packages have MIT license, you can use
                            Mantine in any project
                        </List.Item>
                        <List.Item>
                            <b>No annoying focus ring</b> – focus ring will appear only when user
                            navigates with keyboard
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button radius="xl" size="md" className={classes.control}>
                            Get started
                        </Button>
                        <Button variant="default" radius="xl" size="md" className={classes.control}>
                            Source code
                        </Button>
                    </Group>
                </div>
                <Image component={NextImage} src={lempika} className={classes.image} />
            </div>
        </Container>
    );
}
