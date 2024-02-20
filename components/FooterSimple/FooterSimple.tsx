import { Container, Group, Anchor } from '@mantine/core';
import classes from './FooterSimple.module.css';

const links = [
    { link: 'https://www.linkedin.com/in/jckyy/', label: 'LinkedIn' },
    { link: 'https://github.com/Jckyy', label: 'GitHub' },
];

export function FooterSimple() {
    const items = links.map((link) => (
        <Anchor<'a'> c="black" key={link.label} href={link.link} size="sm">
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Group className={classes.links}>{items}</Group>
            </Container>
        </div>
    );
}
