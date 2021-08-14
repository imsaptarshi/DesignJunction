import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<{ x: Number | null, y: Number | null }>({ x: null, y: null });

    const updateMousePosition = (ev: MouseEvent) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;