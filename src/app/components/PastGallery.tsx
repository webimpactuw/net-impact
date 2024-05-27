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
    }
    
    return (
        <div className="w-full h-[735px] px-16 py-[100px] bg-white justify-start items-center gap-20 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch h-[587.45px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-center text-slate-900 text-5xl font-medium leading-[72px]">
                        Past Summits
                    </div>
                        <div className="w-full h-[467.45px] relative">
                            <div>
                                <figure className="w-1/3 h-[363px] left-[50px] top-[26.89px] absolute bg-black/opacity-40 rounded-[20px] shadow z-10 overflow-hidden">
                                    { imgIndex !== 0 ? <Image src={  props.past[imgIndex - 1].imageSource } alt={ props.past[imgIndex - 1].imageSource } layout="fill" objectFit="cover" /> : <></> }
                                </figure>
                                <figure className="w-2/3 h-[416px] rounded-[20px] relative shadow m-auto z-20 overflow-hidden">
                                    <Image src={ props.past[imgIndex].imageSource } alt={ props.past[imgIndex].imageSource } layout="fill" objectFit="cover" />
                                </figure>
                                <figure className="w-1/3 h-[363px] right-[50px] top-[26.89px] absolute bg-black/opacity-40 rounded-[20px] shadow z-10 overflow-hidden">
                                    { imgIndex !== props.past.length - 1 ? <Image src={ props.past[imgIndex + 1].imageSource } alt={ props.past[imgIndex + 1].imageSource } layout="fill" objectFit="cover" /> : <></> }
                                </figure>
                            </div>
                            <div className="text-center text-slate-900 text-[25px] mt-4 font-medium leading-[37.50px]">
                                <p>{ props.past[imgIndex].subtitle }</p>
                                <div className="h-[0px] px-[50px] justify-center items-center gap-[5px] inline-flex">
                                    <div className="w-2 h-2 bg-neutral-400 rounded-full" />
                                    <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                                    <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                                </div>
                            </div>
                             <div className="left-[5%] top-[181.5px] absolute text-center text-[50px] font-bold leading-[75px] transition-all opacity-100 hover:opacity-40 cursor-pointer" style={{
                                zIndex: imgIndex === 0 ? 0 : 20,
                                color: imgIndex === 0 ? 'gray' : ''
                            }} onClick={decrement}>&lt;</div>
                            <div className="right-[5%] top-[181.5px] absolute text-center text-[50px] font-bold leading-[75px] transition-all opacity-100 hover:opacity-40 cursor-pointer" style={{
                                zIndex: imgIndex === props.past.length - 1 ? 0 : 20,
                                color: imgIndex === props.past.length - 1 ? 'gray' : ''
                            }} onClick={increment}>&gt;</div>
                        </div>
                </div>
            </div>
        </div>
    )
}
