import { createTheme, MantineColorsTuple } from '@mantine/core';
import { Poppins } from 'next/font/google';

// Just use font weight 400 & 700 for now following Realtime colors
const poppinsFont = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

// Green for Primary Color. Use index 4 for primary
const myPrimary: MantineColorsTuple = [
    '#f6fee3',
    '#edfbcf',
    '#dbf5a2',
    '#c9f072',
    '#b8ec49',
    '#aee92e',
    '#a8e71e',
    '#92cd0d',
    '#81b700',
    '#6d9e00',
];

// Grey for Secondary Color. Use index 3 for secondary
const mySecondary: MantineColorsTuple = [
    '#fff2f5',
    '#ece6e7',
    '#cfcdcd',
    '#b2b2b2',
    '#9a9a9a',
    '#8b8b8b',
    '#848484',
    '#737171',
    '#686465',
    '#5f5457',
  ];

// Purple for Accent Color. Use index 8 for accent
const myAccent: MantineColorsTuple = [
    '#f3ecff',
    '#e0d4fa',
    '#bea5f3',
    '#9b74ed',
    '#7c4be8',
    '#6a30e5',
    '#6023e4',
    '#5118cb',
    '#4713b6',
    '#3c0ea1',
];

// Black for Black Color in text. Use any index
const myBlack: MantineColorsTuple = [
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
];

// Black for Black Color in text. Use any index
const myWhite: MantineColorsTuple = [
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
];

export const theme = createTheme({
    colors: {
    myPrimary,
    mySecondary,
    myAccent,
    myBlack,
    myWhite,
    },
    primaryShade: 4,
    fontFamily: poppinsFont.style.fontFamily,
    fontSizes: {
        sm: '0.750rem',
        md: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
    },
    headings: {
    fontFamily: poppinsFont.style.fontFamily,
    fontWeight: '700',
    },
});
