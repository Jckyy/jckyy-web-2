import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem } from '@mantine/core';
import { BlogCard } from '../BlogCard/BlogCard';

const data = [
    {
        title: 'Best forests to visit in North America',
        body: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        title: 'Hawaii beaches review: better than you think',
        body: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        title: 'Mountains at night: 12 best locations to enjoy the view',
        body: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        title: 'Aurora in Norway: when to visit for best experience',
        body: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        title: 'Best places to visit this winter',
        body: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        title: 'Active volcanos reviews: travel at your own risk',
        body: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
];

export function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <BlogCard {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize={{ base: '100%', sm: '20%' }}
            slideGap={{ base: rem(2), sm: 'md' }}
            align="start"
            slidesToScroll={mobile ? 1 : 2}
            controlsOffset="xs"
        >
            {slides}
        </Carousel>
    );
}
