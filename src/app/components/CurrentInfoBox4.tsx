import ChevronLink from "./ChevronLink"
import Link from "next/link"
import { SanityDocument } from 'next-sanity';
import { sanityFetch, urlFor } from '@/sanity/client';
import Image from "next/image";

const SPOTLIGHT_QUERY = `*[_type == "spotlight"]`;

export default async function CurrentInfoBox4() {
    const spotlight = await sanityFetch<SanityDocument[]>({query: SPOTLIGHT_QUERY});
    const spotlightImage = spotlight[0].spotlightImg ? urlFor(spotlight[0].spotlightImg)?.url() : '';

    return (
        <div className="lg:w-[900px] xl:w-[600px] 2xl:w-[710px] w-11/12 lg:h-[572px] lg:m-0 m-auto my-8 flex flex-col rounded-[20px] border-[1px] border-[#2B9575]">
            <div className="lg:h-[328px] p-[48px] flex flex-col justify-center gap-[32px]">
                <div>
                    <p className="text-[16px] font-medium mb-[8px]">{ spotlight[0].time }</p>
                    <h1 className="text-[40px] font-medium mb-[24px]">{ spotlight[0].header }</h1>
                    <p className="text-[16px] font-normal">{ spotlight[0].description }</p>
                </div>
                <div className="flex items-center gap-[24px]">
                    <Link href="/events/pastevents"><button className="px-[24px] py-[12px] bg-[#E1E0DC] hover:bg-[#bebdbb] text-[16px] font-normal  hover:text-[#62615D] rounded-[8px] transition-all">View Past Events</button></Link>
                    <ChevronLink text="Stay Updated" link="/events/fallpanel" />
                </div>
            </div>
            <figure className="h-[244px] rounded-b-[20px] relative overflow-hidden bg-slate-300">
                <Image alt="headerimg" src={spotlightImage ? spotlightImage : ''} layout="fill" objectFit="cover" />
            </figure>
        </div>
    )
}