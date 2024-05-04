import CatCard from "@/Components/CatCard/CatCard";
import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { Cat } from "@/types";
import { Head } from "@inertiajs/react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function CatsIndexPage({ cats }: { cats: Array<Cat> }) {
    return (
        <>
            <Head title="Available Cats" />
            <MainLayout>
                <Container>
                    <Typography variant="h2" component="span">
                        Available Cats
                    </Typography>
                    <Grid container spacing={3}>
                        {cats.map((cat) => (
                            <Grid item xs={12} md={4} lg={3}>
                                <CatCard cat={cat} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </MainLayout >
        </>

    )
};