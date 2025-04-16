import {useCallback, useEffect, useState} from 'react';

function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

export function useElementAboveScreenMidpoint(scrollContainer, ref, enabled) {
    const [isAboveMidpoint, setIsAboveMidpoint] = useState(false);

    const handleScroll = debounce(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const midpoint = window.innerHeight / 2;

        // Check if the top of the element is close to the screen midpoint
        setIsAboveMidpoint(rect.top <= midpoint && rect.bottom >= midpoint);
    }, 50)

    useEffect(() => {
        if (!scrollContainer || !scrollContainer.current || !enabled) return;


        if (enabled) {
            scrollContainer.current.addEventListener('scroll', handleScroll);
        }
        handleScroll(); // trigger on mount

        return () => {
            scrollContainer?.current?.removeEventListener('scroll', handleScroll);
        };
    }, [ref, scrollContainer, enabled, handleScroll]);

    return isAboveMidpoint;
}