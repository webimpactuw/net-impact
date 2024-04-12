type ValuesBoxProps = {
    img: string,
    header: string,
    desc: string
}

export default function ValuesBox(props: ValuesBoxProps) {
    return (
        <div className="flex flex-col gap-8 w-[30%]">
            <figure className={`bg-[url('/${ props.img }')] bg-cover bg-center h-[300px] rounded-[20px]`} />
            <div>
              <h2 className="text-[32px] font-medium mb-[24px]">{ props.header }</h2>
              <p className="text-[16px] font-normal">{ props.desc }</p>
            </div>
        </div>
    )
}