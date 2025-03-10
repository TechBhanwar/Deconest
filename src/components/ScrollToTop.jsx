import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Current page ka path

    useEffect(() => {
        window.scrollTo(0, 0); // Page ko top pr scroll karega
    }, [pathname]); // Jab bhi path change hoga, ye effect chalega

    return null;
};

export default ScrollToTop;
