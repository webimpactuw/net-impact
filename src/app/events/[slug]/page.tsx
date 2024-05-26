import { Metadata } from 'next'
import { PortableText } from '@portabletext/react';
import { SanityDocument } from "next-sanity";
import { urlFor, sanityFetch } from "@/sanity/client";
import Image from 'next/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import PastGallery from '@/app/components/PastGallery';

export const metadata: Metadata = {
  title: 'Events'
}

const EVENT_QUERY = `*[
    _type == "event" &&
    slug.current == $slug
][0]`

export default async function EventPage({ params, }: { params: {slug: string} }) {
    const event = await sanityFetch<SanityDocument>({
        query: EVENT_QUERY,
        params,
    });

    const descImage = event && event.descriptionImage ? urlFor(event.descriptionImage)?.url() : '';

    const gallery = event ? event.gallery : [];
    const imgLength = gallery.length;
    const colSize = imgLength / 3;
    const columns = [gallery.slice(0, colSize), gallery.slice(colSize, 2 * colSize), gallery.slice(2 * colSize, 3 * colSize + (imgLength % 3))];

return event ? (
<div className="relative bg-slate-100">
    <div className="absolute w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="2200" height="424" viewBox="0 0 1400 424" fill="none">
            <path d="M63.6648 -85.2876C-33.6799 -67.4735 -119.217 -33.0075 -206.293 11.6968C-259.574 39.0506 -312.133 66.9877 -357.694 104.83C-404.446 143.662 -436.126 187.596 -456.688 242.253C-460.325 251.922 -502.778 357.278 -472.048 356.557C-453.221 356.115 -432.808 351.739 -414.293 349.271C-377.836 344.409 -341.404 339.289 -305.078 333.511C-225.468 320.848 -152.406 307.529 -82.0365 268.972C79.1335 180.664 240.56 89.6568 424.414 51.6927C480.873 40.0345 539.257 27.7344 596.987 24.4727C616.716 23.3581 620.889 22.1062 624.011 40.2585C629.739 73.5543 606.809 110.994 595.726 141.936C581.122 182.707 566.367 229.839 570.583 272.888C573.597 303.656 601.023 315.577 631.708 316.084C658.896 316.532 686.969 312.68 713.966 310.092C779.378 303.824 844.666 296.625 909.837 288.042C1022.63 273.19 1131.61 250.775 1241.69 223.069C1323.4 202.503 1409.04 194.113 1492.27 181.231" stroke="white" stroke-width="133.326" stroke-linecap="round"/>
        </svg>
    </div>

    <div className="px-[366px] py-[100px] gap-100 justify-center items-center flex">
        <div className="flex-grow flex-shrink basis-0 self-stretch flex flex-col justify-start items-center gap-5">
            <div className="self-stretch text-center text-slate-900 text-[56px] font-medium leading-[150%] mt-20 z-10">
                { event.name }
            </div>
            <div className="text-center text-cyan-700 text-xl font-normal mb-10 z-10 uppercase">
                { event.type }
            </div>
        </div>
    </div>

    <div className="h-[84px] relative">
        <div className="w-full h-[84px] bg-green-100 border-t border-b border-green-600 text-slate-900 text-[22px] font-medium text-center py-6 uppercase">
            { event.status }
            {/* UPCOMING: <strong className="font-semibold leading-[33px]">THE CLIMATE SOLUTIONS SUMMIT WILL RETURN NEXT SPRING</strong> */}
        </div>
    </div>


    <div className="h-[877px] relative bg-white">
    <div className="h-[625.11px] py-32 mx-16 flex flex-wrap flex-row-reverse gap-6">
        <figure className="w-[35%] h-[640px] rounded-[20px] relative overflow-hidden">
            <Image src={descImage ? descImage : ''} alt={descImage ? descImage : 'description image'} layout="fill" objectFit="cover" />
        </figure>
        <div className="flex-1">
            <div className="flex-col justify-start items-start gap-6">
                <div>
                    <span className="text-teal-600 text-lg font-medium leading-[27px]">
                        { event.time }<br/>
                    </span>
                    <span className="text-slate-900 text-[38px] font-medium leading-[57px]">
                        { event.descriptionHeader }<br/>
                    </span>
                    <span className="text-slate-900 text-lg font-normal leading-[27px]">
                        <PortableText value={ event.description } />
                    </span>
                </div>

                <div className="pt-[14.44px] flex gap-[14.44px]">
                    {
                        event.buttons.map((button: {name: string, link: string}) => {
                            return (
                            <button key={button.name} className="px-[21.67px] py-[10.83px] bg-slate-100 hover:bg-slate-300 transition-all rounded-lg border border-teal-600 flex items-center">
                                <a href={button.link} className="text-slate-900 text-sm font-medium leading-snug">{ button.name }</a>
                            </button>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
</div>

{/* <PastGallery  /> */}

        <div className="w-full h-[735px] px-16 py-[100px] bg-white justify-start items-center gap-20 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch h-[587.45px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-center text-slate-900 text-5xl font-medium leading-[72px]">
                        Past Summits
                    </div>
                    {
                        event.pastImages.map((pastImage: {subtitle: string, imageSource: SanityImageSource }) => {
                            const newUrl = pastImage.imageSource ? urlFor(pastImage.imageSource)?.url() : null;
                            return (<div className="w-full h-[467.45px] relative" key={pastImage.subtitle}>
                                <div>
                                    <figure className="w-1/3 h-[363px] left-[50px] top-[26.89px] absolute bg-black/opacity-40 rounded-[20px] shadow z-10" />
                                    <figure className="w-2/3 h-[416px] rounded-[20px] relative shadow m-auto z-20 overflow-hidden">
                                        <Image src={ newUrl ? newUrl : "" } alt={ newUrl ? newUrl : "" } layout="fill" objectFit="cover" />
                                    </figure>
                                    <figure className="w-1/3 h-[363px] right-[50px] top-[26.89px] absolute bg-black/opacity-40 rounded-[20px] shadow z-10" />
                                </div>
                                <div className="text-center text-slate-900 text-[25px] mt-4 font-medium leading-[37.50px]">
                                    <p>2022 Climate Solutions Summit</p>
                                    <div className="h-[0px] px-[50px] justify-center items-center gap-[5px] inline-flex">
                                        <div className="w-2 h-2 bg-neutral-400 rounded-full" />
                                        <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                                        <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                                    </div>
                                </div>
                                <div className="left-[5%] top-[181.5px] absolute text-center text-[50px] font-bold leading-[75px] transition-all opacity-100 hover:opacity-60 z-20 cursor-pointer">&lt;</div>
                                <div className="right-[5%] top-[181.5px] absolute text-center text-[50px] font-bold leading-[75px] transition-all opacity-100 hover:opacity-60 z-20 cursor-pointer">&gt;</div>
                            </div>);
                        })
                    }
                </div>
            </div>
        </div>

        
        <div className="px-16 py-28 bg-white flex-col justify-start items-center gap-20 flex">
            <div className="h-[109px] flex-col justify-start items-center gap-6 flex">
                <div className="self-stretch text-center text-slate-900 text-5xl font-medium font-['General Sans'] leading-[57.60px]">
                    Image Gallery
                </div>
                <div className="self-stretch text-center text-cyan-700 text-lg font-normal font-['General Sans'] leading-[27px]">
                    See more about what we did in the 2023 Summit
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-8 m-auto">
            {
                columns.map((imgs) => {
                return <div key={imgs[0].imageSource} className="flex flex-col gap-8">
                    {
                    imgs.map((img: SanityDocument) => {
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