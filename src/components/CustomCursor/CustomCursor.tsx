import { useEffect, useState } from "react";
import styled from "styled-components";

const Cursor = styled.div`
    position: fixed;
    width: 6px;
    height: 6px;
    border: 2px solid transparent;
    border-radius: 50%;
    pointer-events: none;
    transform: translate3d(0, 0, 0);
    transition: none;
    z-index: 999999999;
    box-shadow: 0 0 12px rgb(21, 94, 233);
    background-color: #ffffff5c;
`;

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Cursor style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />
    );
}