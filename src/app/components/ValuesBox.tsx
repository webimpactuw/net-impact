type ValuesBoxProps = {
    img: string,
    header: string,
    desc: string
}

export default function ValuesBox(props: ValuesBoxProps) {
    return (
        <div className="flex flex-col gap-[32px] w-[405.33px] h-[410px]">
            <figure className={`bg-[url('/${ props.img }')] bg-cover bg-center w-[405.33px] h-[240px] rounded-[20px]`} />
            <div>
              <h2 className="text-[32px] font-medium mb-[24px]">{ props.header }</h2>
              <p className="text-[16px] font-normal">{ props.desc }</p>
            </div>
        </div>
    )
}