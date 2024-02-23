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

// Purple for my accent, I want index 3
const myAccent: MantineColorsTuple = [
    "#f3ecff",
    "#e0d4fd",
    "#bea7f5",
    "#9b76ee",
    "#7c4ce8",
    "#6932e4",
    "#5f24e4",
    "#5018cb",
    "#4614b6",
    "#3b0ea0"
  ];

// Black for Black Color in text. Use any index
const myBlack: MantineColorsTuple = [
    '#222222',
    '#222222',
    '#222222',
    '#222222',
    '#222222',
    '#222222',
    '#222222',
    '#222222',
    '#222222',
    '#222222',
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
    luminanceThreshold: 0.1,
    autoContrast: true,
    fontFamily: poppinsFont.style.fontFamily,
    fontSizes: {
        xs: '0.563rem',
        sm: '0.750rem',
        md: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.157rem',
        '5xl': '4.209rem',
        '6xl': '5.610rem',
    },
    headings: {
        fontFamily: poppinsFont.style.fontFamily,
        fontWeight: '700',
        sizes: {
            h1: {
                fontSize: '5.610rem',
            },
            h2: {
                fontSize: '4.209rem',
            },
            h3: {
                fontSize: '3.157rem',
            },
            h4: {
                fontSize: '2.369rem',
            },
            h5: {
                fontSize: '1.777rem',
            },
            h6: {
                fontSize: '1.333rem',
            },
        },
    },
    defaultGradient: {
        from: myPrimary[4],
        to: myPrimary[6],
        deg: 45,
    },
});
