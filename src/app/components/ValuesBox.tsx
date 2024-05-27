import Image from "next/image"

type ValuesBoxProps = {
    img: string,
    header: string,
    desc: string
}

export default function ValuesBox(props: ValuesBoxProps) {
    return (
        <div className="flex flex-col gap-8 lg:w-[30%] mb-20 lg:mb-0">
            <figure className="relative h-[300px] rounded-[20px] overflow-hidden bg-slate-300">
                <Image src={`${ props.img }`} alt={ props.img } layout="fill" objectFit="cover" />
            </figure>
            <div>
              <h2 className="text-[32px] font-medium mb-[24px]">{ props.header }</h2>
              <p className="text-[16px] font-normal">{ props.desc }</p>
            </div>
        </div>
    )
}