import { useEffect, useState } from 'react';

const useIsElementVisible = (el: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const callback = ([entry]: any) => {
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const watch = new IntersectionObserver(callback);
        if (el) {
            watch.observe(el);
            return () => watch.unobserve(el);
        }
    }, [el]);

    return isVisible && !!el;
};

export default useIsElementVisible;