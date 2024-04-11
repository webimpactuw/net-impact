import ChevronLink from "./ChevronLink"

export default function CurrentInfoBox4() {
    return (
        <div className="w-[640px] h-[572px] flex flex-col rounded-[20px] border-[1px] border-[#2B9575]">
            <div className="h-[328px] p-[48px] flex flex-col justify-center gap-[32px]">
                <div>
                    <p className="text-[16px] font-medium mb-[8px]">Fall 2024</p>
                    <h1 className="text-[40px] font-medium mb-[24px]">Fall Panel Coming Soon...</h1>
                    <p className="text-[16px] font-normal">Stay tuned for our upcoming Fall Panel! For quicker updates follow our instagram @netimpactuw</p>
                </div>
                <div className="flex items-center gap-[24px]">
                    <button className="px-[24px] py-[12px] bg-[#E1E0DC] text-[16px] font-normal text-[#62615D] rounded-[8px]">View Past Fall Panels</button>
                    <ChevronLink text="Stay Updated" />
                </div>
            </div>
            <figure className="h-[244px] bg-[url('/infobox2.jpg')] bg-cover rounded-b-[20px]" />
        </div>
    )
}