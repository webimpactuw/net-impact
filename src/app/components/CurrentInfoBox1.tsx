import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "@/sanity/client";

const MEETING_QUERY = `*[_type == "meeting"]`;

export default async function CurrentInfoBox1() {
    const meeting = await sanityFetch<SanityDocument[]>({query: MEETING_QUERY});
    const { type, days, time, location, description } = meeting[0];

    return (
        <div className="lg:w-[640px] w-9/12 lg:m-0 m-auto lg:h-[629px] p-[48px] rounded-[20px] border-[1px] border-[#2B9575] relative">
            <p className="text-[16px] font-medium">When we meet?</p>
            <h1 className="text-[40px] font-medium mb-[70px]">{ type } Meetings</h1>

            <div className="absolute rounded-2xl top-40 overflow-hidden w-0 lg:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="544" height="429" viewBox="0 0 544 429" fill="none">
                    <path opacity="0.07" d="M224.757 -44C178.913 -37.679 135.659 -19.796 94.6962 -2.38289C52.232 15.6684 18.4999 39.0317 -4.63287 73.9656C-9.59455 81.4585 -17.9002 92.676 -15.6085 101.811C-14.0381 108.071 -2.72306 112.582 2.50126 116.718C8.95346 121.826 15.3202 127.628 23.3549 131.095C41.3029 138.838 65.5216 137.828 85.0011 136.089C126.131 132.417 166.024 117.16 206.464 109.756C241.67 103.31 278.937 97.3419 315.123 97.8765C334.231 98.1588 362.235 100.088 374.94 113.842C388.941 129.001 396.249 147.045 387.013 165.523C377.558 184.438 357.034 196.54 337.805 208.275C315.342 221.985 293.292 235.672 271.86 250.498C240.346 272.299 208.113 293.866 179.117 317.993C165.373 329.429 152.574 342.603 144.269 357.34C132.433 378.347 146.392 410.142 160.55 427.711C171.294 441.045 188.424 452.961 204.269 462.064C229.29 476.439 252.942 485.088 283.842 485.824C301.035 486.233 318.61 487.643 335.793 486.656C368.661 484.768 401.714 475.14 432.196 465.393C480.13 450.066 520.331 426.358 560.976 400.773C583.481 386.607 595.66 369.574 610 349.622" stroke="#2B9575" stroke-width="99" stroke-linecap="round"/>
                </svg>
            </div>
            <h2 className="text-[24px] font-medium mb-[36px]">{ days } <br /> { time } <br /> { location }</h2>
            <p className="text-[25px] font-light italic mb-[65px]">{ description }</p>
            <h2 className="text-[24px] font-medium italic">*Open to all UW Students*</h2>
        </div>
    )
}