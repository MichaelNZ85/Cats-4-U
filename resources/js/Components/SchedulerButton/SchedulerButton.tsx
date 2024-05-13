import MuiButton, { ButtonProps } from '@mui/material/Button';
import React, { ReactEventHandler, ReactNode } from 'react';
import { alpha, darken, styled } from '@mui/material/styles';
import { getContrastColor } from '@/helpers/ColourHelper';
import { ScheduleStatus } from '@/types';
import styles from './SchedulerButton.module.css';
console.log(styles);

const getColours = (status: ScheduleStatus): { backgroundColour: string, textColour: string } => {
    switch (status) {
        case ScheduleStatus.Available:
            return { backgroundColour: '#D18800', textColour: '#fff' }
        case ScheduleStatus.Unavailable:
            return { backgroundColour: '#5b5a5a', textColour: '#fff' }
        case ScheduleStatus.Selected:
            return { backgroundColour: '#0a5a0a', textColour: '#fff' }
        default:
            return { backgroundColour: '#5b5a5a', textColour: '#fff' }
    }
}

interface ScheduleButtonProps extends ButtonProps {
    status: ScheduleStatus;
    onSelect: ReactEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

interface CustomButtonProps extends ButtonProps {
    status: ScheduleStatus;
}

const CustomButton = styled(MuiButton)<CustomButtonProps>(({ status }) => {
    const { backgroundColour, textColour } = getColours(status);
    return ({
        backgroundColor: backgroundColour,
        color: textColour,
        '&:hover': {
            backgroundColor: darken(backgroundColour, 0.3)
        }
    }
    )
}
)

const SchedulerButton: React.FC<ScheduleButtonProps> = ({ status, children, ...props }: ScheduleButtonProps) => {
    return (
        <CustomButton
            status={status}
            {...props}
            sx={{ textTransform: 'none' }}
        >
            {children}
        </CustomButton>
    );
};

export default SchedulerButton;