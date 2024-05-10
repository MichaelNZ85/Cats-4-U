import { Box, Typography } from '@mui/material';
import { Star } from '@phosphor-icons/react';
import styles from './FriendlinessLevel.module.css';
import { range } from 'lodash';

export default function FriendlinessLevel({ friendlinessLevel, showHeader = true }: { friendlinessLevel: number, showHeader: boolean }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {showHeader && <Typography variant="body1" component="span" sx={{ fontWeight: '600' }}>
                Friendliness
            </Typography>}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {range(1, 6).map((num) => (
                    <Star weight={friendlinessLevel >= num ? 'fill' : 'regular'} className={styles.star} key={`star-${num}`} />
                ))}
            </Box>
        </Box>
    )
};