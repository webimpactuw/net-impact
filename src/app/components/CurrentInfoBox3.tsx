import ChevronLink from "./ChevronLink"

export default function CurrentInfoBox3() {
    return (
        <div className="lg:w-[640px] w-11/12 lg:h-[272px] lg:m-0 m-auto my-8 flex rounded-[20px] border-[1px] border-[#2B9575]">
            <figure className="w-1/2 bg-[url('/infobox1.jpg')] bg-cover rounded-l-[20px]" />
            <div className="flex flex-col justify-between p-[24px] w-1/2">
                <div>
                    <p className="text-[16px] font-medium mb-[8px]">See more?</p>
                    <h1 className="text-[24px] font-medium mb-[8px]">See Our Past Weekly Meetings</h1>
                    <p className="text-[16px] font-normal">View our past meeting activities!</p>
                </div>
                <ChevronLink text="Weekly Meetings" link="/events/pastevents" />
            </div>
        </div>
    )
}