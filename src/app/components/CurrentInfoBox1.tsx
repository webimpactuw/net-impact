import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "@/sanity/client";

const MEETING_QUERY = `*[_type == "meeting"]`;

export default async function CurrentInfoBox1() {
    const meeting = await sanityFetch<SanityDocument[]>({query: MEETING_QUERY});
    const { type, days, time, location, description } = meeting[0];

    return (
        <div className="lg:w-[640px] w-11/12 lg:m-0 m-auto lg:h-[629px] p-[48px] rounded-[20px] border-[1px] border-[#2B9575]">
            <p className="text-[16px] font-medium">When we meet?</p>
            <h1 className="text-[40px] font-medium mb-[70px]">{ type } Meetings</h1>
            <h2 className="text-[24px] font-medium mb-[36px]">{ days } <br /> { time } <br /> { location }</h2>
            <p className="text-[25px] font-light italic mb-[65px]">{ description }</p>
            <h2 className="text-[24px] font-medium italic">*Open to all UW Students*</h2>
        </div>
    )
}