'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

type PastGalleryProps = {
    images: [];
}

export default function PastGallery(props: PastGalleryProps) {
    const [eventIndex, setEventIndex] = useState(0);
    const [imgIndex, setImgIndex] = useState(0);
    
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
                props.images.map((url: string | null | undefined) => {
                    if (url === null || url === undefined) {
                        return <></>;
                    }
                    return <Image key={url} src={url} alt="test" height={103} width={103} />
                })
            }
            </div>
        </div>
    )
}
