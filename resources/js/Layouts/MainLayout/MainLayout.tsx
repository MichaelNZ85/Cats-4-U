import { ReactNode } from "react"
import styles from './MainLayout.module.css'
import { Box, Button } from "@mui/material"
import { PropsWithChildren } from 'react';
import Navbar from "@/Components/Navbar/Navbar"

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <Box className={styles.root}>
            <Navbar />
            <Box sx={{ marginY: 3 }}>
                {children}
            </Box>
        </Box>
    )
}

export default MainLayout;