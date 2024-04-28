export const getContrastColor = (hexColor: string): string => {
    // Convert hex color to RGB
    const hexToRgb = (hex: string): number[] =>
        (hex.match(/[A-Za-z0-9]{2}/g) || []).map((v) => parseInt(v, 16));

    const [r, g, b] = hexToRgb(hexColor);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Choose white or black based on luminance
    return luminance > 0.5 ? '#000000' : '#ffffff';
}