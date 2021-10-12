import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Header from './Header';
import MemeGenerator from './MemeGenerator';
export default function Animations(props) {
    return (
        <Box>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Header />

        </Box>
    );
}