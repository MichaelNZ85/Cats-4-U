import CatCard from "@/Components/CatCard/CatCard";
import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { Cat } from "@/types";
import { Head } from "@inertiajs/react";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function ShowCatPage({ cat }: { cat: Cat }) {
    return (
        <>
            <Head title="Available Cats" />
            <MainLayout>
                <Container>
                    <Typography variant="h2" component="span">
                        {cat.name} says meow!
                    </Typography>

                </Container>
            </MainLayout >
        </>

    )
}; 