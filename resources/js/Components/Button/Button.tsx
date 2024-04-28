import React, { ReactNode } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import { alpha, darken, styled } from '@mui/material/styles';
import { getContrastColor } from '@/helpers/ColourHelper';

interface LowercaseButtonProps extends ButtonProps {
    children: ReactNode;
    textcolour?: string;
    colour: string;
}

interface CustomButtonProps extends ButtonProps {
    colour: string;
    textcolour?: string;
}

const CustomButton = styled(MuiButton)<CustomButtonProps>(({ colour, textcolour }) => ({
    backgroundColor: colour,
    color: textcolour ?? getContrastColor(colour),
    '&:hover': {
        backgroundColor: darken(colour, 0.3)
    }
}))

const Button: React.FC<LowercaseButtonProps> = ({ colour, textcolour, children, ...props }: LowercaseButtonProps) => {
    return (
        <CustomButton
            colour={colour}
            textcolour={textcolour}
            {...props}
            sx={{ textTransform: 'none' }}
        >
            {children}
        </CustomButton>
    );
};

export default Button;