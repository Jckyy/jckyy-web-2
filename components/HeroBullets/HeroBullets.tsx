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
          <Text mt="md">Computer Science Student | Accountant</Text>
          <Text>Hey, My name is Jacky</Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit laboriosam vel
            asperiores vero? Nihil doloremque nostrum magnam cum veritatis quia, obcaecati,
            voluptatum molestias aut doloribus laudantium cumque ipsam. Nemo.
          </Text>
          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconHeart style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Computer Science</b> - build type safe applications, all components and hooks
              export types
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
