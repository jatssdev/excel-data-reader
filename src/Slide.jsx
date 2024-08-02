import React, { useRef, useEffect } from "react";

const Slide = ({ timeline, bg }) => {
    // const el = useRef();
    // const title = useRef();
    // const copy = useRef();

    // useEffect(() => {
    //     timeline.to(el.current, {
    //         rotate: 180
    //     });
    // }, [timeline]);

    return (
        <div style={{ height: '100vh', background: bg }}>
            <h1>Slide</h1>
        </div>
    );
};

export default Slide;
