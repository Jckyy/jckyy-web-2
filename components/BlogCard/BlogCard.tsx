import { Paper, Text } from '@mantine/core';
import classes from './BlogCard.module.css';

interface CardProps {
    title: string;
    body: string;
}

export function BlogCard({ title, body }: CardProps) {
    return (
        <Paper withBorder radius="md" className={classes.card}>
            <Text lineClamp={3} size="lg" fw={400}>
                {title}
            </Text>
            <Text lineClamp={6} c="dimmed" size="xs" mt="sm">
                {body}
            </Text>
        </Paper>
    );
}
