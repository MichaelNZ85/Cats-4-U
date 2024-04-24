import { ReactNode } from "react"
import styles from './MainLayout.module.css'
import { Box, Button } from "@mui/material"
import Navbar from "@/Components/Navbar/Navbar"

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Box className={styles.root}>
            <Navbar />
            {children}
        </Box>
    )
}

export default MainLayout;