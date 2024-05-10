import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { Cat } from "@/types";
import { capitalize } from 'lodash';
import { Head, usePage } from "@inertiajs/react";
import { Box, Container, Grid, Table, TableCell, TableRow, Typography, tableCellClasses } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from './Cats.module.css';
import FriendlinessLevel from "@/Components/FriendlinessLevel/FriendlinessLevel";

export default function ShowCatPage({ cat }: { cat: Cat }) {
    const { props: { base_url: baseUrl } } = usePage();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <Head title={cat.name} />
            <MainLayout>
                <Container sx={{ display: 'flex', flexDirection: 'column', width: '100dvw', alignItems: 'center', }}>
                    <img src={cat.image?.startsWith('https://') ? cat.image : `${baseUrl}/storage/${cat.image}`} className={isMobile ? styles.catImgMobile : styles.catImg} />
                    <Typography variant="h3" component="span" sx={{ alignSelf: 'center', paddingTop: 2 }} >
                        {cat.name}
                    </Typography>
                    <Typography variant="h6" component="span" sx={{ marginTop: 1.5 }}><strong>{cat.area}</strong></Typography>
                    <Grid container spacing={2} sx={{ paddingTop: 3 }}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={1} sx={{ width: '100%' }}>
                                <Grid item xs={12}>

                                </Grid>
                                <Grid item xs={12}>
                                    <Table sx={{
                                        [`& .${tableCellClasses.root}`]: {
                                            borderBottom: 'none'
                                        }
                                    }}>
                                        <TableRow>
                                            <TableCell><strong>Breed</strong></TableCell>
                                            <TableCell>
                                                {cat.breed}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><strong>Friendliness Level</strong></TableCell>
                                            <TableCell>
                                                <FriendlinessLevel friendlinessLevel={cat.friendliness_level} showHeader={false} />
                                            </TableCell>

                                        </TableRow>
                                        <TableRow>
                                            <TableCell><strong>Suitable for:</strong></TableCell>
                                            <TableCell>
                                                {capitalize(cat.suitable_for)}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={2}>
                                                {cat.description}
                                            </TableCell>
                                        </TableRow>
                                    </Table>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={1} justifyContent="center">
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ width: '100%' }}>
                                        <Typography variant="h5" component="span">Book {cat.name}</Typography></Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </MainLayout >
        </>

    )
}; 