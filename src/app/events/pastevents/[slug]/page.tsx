import { Metadata } from 'next'
import { PortableText } from '@portabletext/react';
import { SanityDocument } from "next-sanity";
import { urlFor, sanityFetch } from "@/sanity/client";
import Image from 'next/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const metadata: Metadata = {
  title: 'Past Events'
}

const EVENT_QUERY = `*[
    _type == "event" &&
    pastEvent &&
    slug.current == $slug
][0]`

export default async function PastEventPage({ params, }: { params: {slug: string} }) {
    const event = await sanityFetch<SanityDocument>({
        query: EVENT_QUERY,
        params,
    });

    const gallery = event ? event.gallery : [];
    const imgLength = gallery.length;
    const colSize = imgLength / 3;
    const columns = [gallery.slice(0, colSize), gallery.slice(colSize, 2 * colSize), gallery.slice(2 * colSize, 3 * colSize + (imgLength % 3))];

return event ? (
<div className="relative bg-slate-100">
        <div className="px-16 py-28 bg-white flex-col justify-start items-center gap-20 flex">
            <div className="h-[109px] flex-col justify-start items-center gap-6 flex">
                <div className="self-stretch text-center text-slate-900 text-5xl font-medium font-['General Sans'] leading-[57.60px]">
                    Gallery
                </div>
                <div className="self-stretch text-center text-cyan-700 text-lg font-normal font-['General Sans'] leading-[27px]">
                    See more about what we did in the { event.name }
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-8 m-auto">
            {
                columns.map((imgs) => {
                return <div key={imgs[0]} className="flex flex-col gap-8">
                    {
                    imgs.map((img: { caption: string, imageSource: string }) => {
                        const newUrl = img.imageSource ? urlFor(img.imageSource)?.width(544).url() : null;
                        return <Image key={newUrl} src={newUrl || "test.png"} alt="test" height={300} width={544} className="grid-item rounded-2xl opacity-100 hover:opacity-60 cursor-pointer transition-all" />
                    })
                    }
                </div>
                })
            }
            </div>
        </div>
     </div>
) : <div className="relative bg-slate-100">
        <div className="absolute w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="2200" height="424" viewBox="0 0 1400 424" fill="none">
                <path d="M63.6648 -85.2876C-33.6799 -67.4735 -119.217 -33.0075 -206.293 11.6968C-259.574 39.0506 -312.133 66.9877 -357.694 104.83C-404.446 143.662 -436.126 187.596 -456.688 242.253C-460.325 251.922 -502.778 357.278 -472.048 356.557C-453.221 356.115 -432.808 351.739 -414.293 349.271C-377.836 344.409 -341.404 339.289 -305.078 333.511C-225.468 320.848 -152.406 307.529 -82.0365 268.972C79.1335 180.664 240.56 89.6568 424.414 51.6927C480.873 40.0345 539.257 27.7344 596.987 24.4727C616.716 23.3581 620.889 22.1062 624.011 40.2585C629.739 73.5543 606.809 110.994 595.726 141.936C581.122 182.707 566.367 229.839 570.583 272.888C573.597 303.656 601.023 315.577 631.708 316.084C658.896 316.532 686.969 312.68 713.966 310.092C779.378 303.824 844.666 296.625 909.837 288.042C1022.63 273.19 1131.61 250.775 1241.69 223.069C1323.4 202.503 1409.04 194.113 1492.27 181.231" stroke="white" stroke-width="133.326" stroke-linecap="round"/>
            </svg>
        </div>
        <div className="px-[366px] py-[200px] gap-100 justify-center items-center flex">
            <div className="flex-grow flex-shrink basis-0 self-stretch flex flex-col justify-start items-center gap-5">
                <div className="self-stretch text-center text-red-400 text-[56px] font-medium leading-[150%] mt-20 z-10">
                    Error: that event doesn&apos;t exist!
                </div>
            </div>
        </div>
    </div>
}