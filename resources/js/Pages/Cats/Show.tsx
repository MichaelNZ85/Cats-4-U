import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { Cat } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from './Cats.module.css';

export default function ShowCatPage({ cat }: { cat: Cat }) {
    const { props: { base_url: baseUrl } } = usePage();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <Head title="Available Cats" />
            <MainLayout>
                <Container>
                    <Box sx={{ paddingTop: 2, paddingLeft: 2, display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                        <img src={cat.image?.startsWith('https://') ? cat.image : `${baseUrl}/storage/${cat.image}`} className={isMobile ? styles.catImgMobile : styles.catImg} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingLeft: isMobile ? 0 : 2, alignItems: 'center' }}>
                            <Typography variant="h2" component="span" >
                                {cat.name}
                            </Typography>
                        </Box>

                    </Box>
                </Container>
            </MainLayout >
        </>

    )
}; 