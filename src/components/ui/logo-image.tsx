'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

interface ThemeAwareLogoProps {
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
}

export default function ThemeAwareLogo({
    width = 150,
    height = 150,
    priority = false,
    className,
}: ThemeAwareLogoProps) {
    const { theme } = useTheme();
    const logoSrc = theme === 'dark' ? '/favicon-light.svg' : '/favicon-dark.svg';
    const logoAlt = theme === 'dark' ? 'Logo de la página en modo oscuro' : 'Logo de la página en modo claro';

    return (
        <Image
            src={logoSrc}
            alt={logoAlt}
            width={width}
            height={height}
            priority={priority}
            className={className}
            loading='lazy'
        />
    );
}
