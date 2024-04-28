
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import styles from './GuestLayout.module.css';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className={styles.layout}>
            {children}
        </div>

    );
}
