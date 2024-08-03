
import Slide from "./Slide";
import { gsap } from "gsap";
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";
import Home from "./components/Home";
import Logic from "./components/Logic";

export default function Scroll({ jsonResult, spgr, dqik, setSpgr, setDqik, depth, qty, getQtyDepth }) {
    const slides = [1, 2];

    const [tl] = useState(() =>
        gsap.timeline({
            paused: true,
            duration: 1
        })
    );

    return (
        <div>
            <ReactFullpage
                onLeave={(origin, destination, direction) => {
                    // console.log("onLeave event", {
                    //   origin,
                    //   destination,
                    //   direction
                    // });
                }}
                afterLoad={(origin, destination, direction) => {
                    console.log("afterLoad event", {
                        origin,
                        destination,
                        direction
                    });
                    tl.progress(0.6);
                }}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <Home jsonResult={jsonResult} depth={depth} qty={qty} getQtyDepth={getQtyDepth} />
                            </div>
                            <div className="section">
                                <Logic spgr={spgr} setSpgr={setSpgr} dqik={dqik} setDqik={setDqik} jsonResult={jsonResult} depth={depth} qty={qty} getQtyDepth={getQtyDepth} />
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
}
