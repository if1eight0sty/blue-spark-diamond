'use client'
import React from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import Lenis from "@studio-freight/lenis";
import { useLayoutEffect } from "react";
const Scroll = ({ children }: { children: React.ReactNode }) => {
    useLayoutEffect(() => {
        const lenis = new Lenis();
        lenis.on("Scroll", (e: any) => { });
        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);
    useLayoutEffect(() => {
        AOS.init({});
    }, []);
    return (
        <>{children}</>
    )
}

export default Scroll