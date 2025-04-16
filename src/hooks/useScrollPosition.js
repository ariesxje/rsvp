import {useEffect, useState} from "react";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
}

export default useScrollPosition