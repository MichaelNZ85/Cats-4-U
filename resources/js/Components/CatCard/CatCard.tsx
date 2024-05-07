import { Cat } from "@/types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import styles from './CatCard.module.css';
import FriendlinessLevel from "../FriendlinessLevel/FriendlinessLevel";
import { router, usePage } from "@inertiajs/react";

export default function CatCard({ cat }: { cat: Cat }) {
    const { props: { base_url: baseUrl } } = usePage();
    console.log(baseUrl);
    const handleClick = () => {
        router.get(route('cats.show', { cat: cat.id }))
    }
    return (
        <Card sx={{ cursor: 'pointer' }} onClick={handleClick}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', padding: '0px' }} className={styles.catCardContent}>
                <img src={cat.image?.startsWith('https://') ? cat.image : `${baseUrl}/storage/${cat.image}`} className={styles.catImage} />
                <Box sx={{ padding: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.8 }}>
                    <Typography component="span" variant="h6" sx={{ fontSize: '1.3rem' }}>
                        {cat.name}
                    </Typography>
                    <Box className="flex" sx={{ width: '100%', justifyContent: 'space-between' }}>
                        <Typography component="span" variant="body2" sx={{ fontWeight: 300 }}>
                            {cat.breed}
                        </Typography>
                        <Typography component="span" variant="body2" sx={{ fontWeight: 200 }}>
                            {cat.area}
                        </Typography>
                    </Box>
                    <FriendlinessLevel friendlinessLevel={cat.friendliness_level} />
                </Box>
            </CardContent>
        </Card>
    )
};