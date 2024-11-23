import React, { ReactNode } from "react"
import { Box, Card } from "@mui/material"
import styles from './LogoCard.module.css'

interface LogoCardProps {
    children: ReactNode;
}

const LogoCard: React.FC<LogoCardProps> = ({ children }: LogoCardProps) => {
    return (
        <Card sx={{ minWidth: '300px', padding: 3 }}>

            <Box sx={{ marginBottom: 1 }}>
                <img src="assets/img/CatLogoVertical.svg" className={styles.image} />
                {children}
            </Box>
        </Card>
    )
}

export default LogoCard;