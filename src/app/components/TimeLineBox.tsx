type TimeLineBoxProps = {
    top: string,
    header: string,
    desc: string
}

export default function TimeLineBox(props: TimeLineBoxProps) {
    return (
        <div className="flex gap-[40px] text-[#11122D]">
            <div className="flex flex-col items-center gap-[16px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <path d="M25.125 11.4032L38.625 24.9032L25.125 38.4032M36.75 24.9032L9.375 24.9032" stroke="#11122D" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
                <div className="w-[2px] h-[100px] bg-[#1AF343]" />
            </div>
            <div className="flex flex-col items-start gap-[10px]">
                { props.top !== "" && <p className="text-[#2B9575] text-[16px] font-medium leading-[150%]">{ props.top }</p> }
                <h1 className="text-[32px] font-medium leading-[130%] capitalize">{ props.header }</h1>
                <p className="text-[16px] font-normal leading-[150%]">{ props.desc }</p>
            </div>
        </div>
    )
}