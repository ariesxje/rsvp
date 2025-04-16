import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const isMobileSize = (dimensions) => {
    const {width} = dimensions;
    return width <= 960;
}

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(isMobileSize(getWindowDimensions()));

    useEffect(() => {
        const handleResize = () => {
            const newIsMobile = isMobileSize(getWindowDimensions());
            console.log(newIsMobile, isMobile)
            if (newIsMobile !== isMobile) {
                setIsMobile(newIsMobile);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

    return isMobile;
}