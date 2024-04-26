import ChevronLink from "./ChevronLink"

type CurrentInfoBox2Props = {
    header: string,
    desc: string
}

export default function CurrentInfoBox2(props: CurrentInfoBox2Props) {
    return (
        <div className="w-[304px] h-[212px] p-[24px] rounded-[20px] border-[1px] border-[#2B9575] flex flex-col justify-between">
            <div>
                <h2 className="text-[24px] font-medium mb-[8px]">{ props.header }</h2>
                <p className="text-[16px] font-normal">{ props.desc }</p>
            </div>
            <ChevronLink text="See more" />
        </div>
    )
}