import { Link, Head } from '@inertiajs/react';
import { Box, Button, Container, ThemeOptions } from '@mui/material';
import MainLayout from '../Layouts/MainLayout/MainLayout';

export default function Home() {
    return (
        <>
            <Head title="Welcome" />
            <MainLayout>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        {/* <img src={'assets/img/cats4ulogo-whitebg.png'} /> */}
                        <h1>Meow from the puddy</h1>
                    </Box>
                </Box>
            </MainLayout>


        </>
    );
}
