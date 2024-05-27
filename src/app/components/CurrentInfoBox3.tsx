import ChevronLink from "./ChevronLink"
import { SanityDocument } from 'next-sanity';
import { sanityFetch, urlFor } from '@/sanity/client';
import Image from "next/image";

const ASSET_QUERY = `*[_type == "assets"]`;

export default async function CurrentInfoBox3() {
    const assets = await sanityFetch<SanityDocument[]>({query: ASSET_QUERY});
    const projImage = assets[0].projectImage ? urlFor(assets[0].projectImage)?.url() : '';

    return (
        <div className="lg:w-[900px] xl:w-[600px] 2xl:w-[710px] w-11/12 lg:h-[272px] lg:m-0 m-auto my-8 flex rounded-[20px] border-[1px] border-[#2B9575]">
            <figure className="w-1/2 rounded-l-[20px] overflow-hidden relative bg-slate-300">
                <Image alt="headerimg" src={projImage ? projImage : ''} layout="fill" objectFit="cover" />
            </figure>
            <div className="flex flex-col justify-between p-[24px] w-1/2">
                <div>
                    <h1 className="text-[24px] font-medium mb-[8px]">See Our Projects</h1>
                    <p className="text-[16px] font-normal">View our projects, as well as how to get involved!</p>
                </div>
                <ChevronLink text="See more" link="/projects" />
            </div>
        </div>
    )
}