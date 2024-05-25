'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

type SponsorScrollProps = {
    images: string[];
}

export default function SponsorScroll(props: SponsorScrollProps) {
    const [startIndex, setStartIndex] = useState(0);
    
    useEffect(() => {
        // TODO: make the animation loop around
        const interval = setInterval(() => {
            setStartIndex(startIndex + 1);
            if (startIndex === props.images.length - 1) {
                setStartIndex(0);
            }
        }, 2000)

        return () => clearInterval(interval);
    });
    
    return (
        <div className={`absolute transition-all`} style={
            { 
                'left': `-${startIndex * 167}px`,
                'transitionDuration': '500ms'
            }
        }>
            {/* { startIndex } */}
            <div className="flex gap-16 items-center overflow-hidden">
            {
                props.images.concat(props.images).map((url: string) => {
                    return <Image key={url} src={url} alt="test" height={103} width={103} />
                })
            }
            </div>
        </div>
    )
}
