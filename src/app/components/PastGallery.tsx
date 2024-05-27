'use client';

import Image from "next/image";
import { useState } from "react";

type PastGalleryProps = {
    past: {imageSource: string, subtitle: string}[];
}

export default function PastGallery(props: PastGalleryProps) {
    const [imgIndex, setImgIndex] = useState(0);

    const decrement = () => {
        if (imgIndex !== 0) {
            setImgIndex(imgIndex - 1);
        }
    }

    const increment = () => {
        if (imgIndex !== props.past.length - 1) {
            setImgIndex(imgIndex + 1);
        }
        console.log(imgIndex);
    }

    const getOffset = (offset: number): string => {
        if (offset === 0) {
            return '33%';
        }
        else if (offset < 0) {
            return '12%';
        }
        return '58%';
    }
    
    return (
        <div className="hidden md:inline-flex w-full h-[735px] px-16 py-[100px] bg-white justify-start items-center gap-20">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch h-[587.45px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-center text-slate-900 text-5xl font-medium leading-[72px]">
                        Past Summits
                    </div>
                        <div className="w-full h-[800px] relative">
                            <div>
                                {
                                    props.past.map((img: {imageSource: string, subtitle: string}, index: number) => {
                                        return (
                                            <figure key={index} className="rounded-[20px] absolute shadow overflow-hidden transition-all duration-500" style={{
                                                width: (index >= imgIndex - 1 && index <= imgIndex + 1) ? '33.33333%' : 0,
                                                height: (index === imgIndex) ? '416px' : '363px',
                                                left: getOffset(index - imgIndex),
                                                top: (index !== imgIndex) ? '26.89px' : 0,
                                                zIndex: (index === imgIndex) ? 20 : 10,
                                                margin: (index === imgIndex) ? 'auto' : 0
                                            }}>
                                                <Image src={ img.imageSource } alt={ img.imageSource } layout="fill" objectFit="cover" />
                                            </figure>
                                        );
                                    })
                                }
                            </div>
                            <div className="text-center text-slate-900 text-[25px] mt-[450px] font-medium leading-[37.50px]">
                                <p>{ props.past[imgIndex].subtitle }</p>
                                <div className="h-[0px] px-[50px] justify-center items-center gap-[5px] inline-flex">
                                    {
                                        props.past.map((_, index) => {
                                            return (<div key={index} className="w-2 h-2 bg-neutral-400 rounded-full" style={{
                                                backgroundColor: index === imgIndex ? 'rgb(163, 163, 163)' : 'rgb(212, 212, 216)'
                                            }} />)
                                        })
                                    }
                                </div>
                            </div>
                        <div className="left-[5%] top-[181.5px] absolute text-center text-[50px] font-bold leading-[75px] transition-all opacity-100 hover:opacity-60 cursor-pointer" style={{
                                color: imgIndex === 0 ? 'gray' : ''
                            }} onClick={decrement}>&lt;</div>
                        <div className="right-[5%] top-[181.5px] absolute text-center text-[50px] font-bold leading-[75px] transition-all opacity-100 hover:opacity-60 cursor-pointer" style={{
                                zIndex: imgIndex === props.past.length - 1 ? 0 : 20,
                                color: imgIndex === props.past.length - 1 ? 'gray' : ''
                            }} onClick={increment}>&gt;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
