type ChevronLinkProps = {
    text: string,
    link: string
}

export default function ChevronLink(props: ChevronLinkProps) {
    return (
        <div className="flex gap-[8px] hover:gap-[16px] hover:opacity-60 transition-all">
            <p className="text-[16px] font-normal"><a href={props.link}>{ props.text }</a></p>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9603 12.1159C15.18 12.3356 15.18 12.6917 14.9603 12.9114L9.22541 18.6463C9.00573 18.8659 8.64963 18.8659 8.42996 18.6463L8.16476 18.3811C7.94508 18.1614 7.94508 17.8053 8.16476 17.5856L13.2367 12.5137L8.16476 7.44172C7.94508 7.22204 7.94508 6.86594 8.16476 6.64627L8.42996 6.38107C8.64963 6.16139 9.00573 6.16139 9.22541 6.38107L14.9603 12.1159Z" fill="#132515"/></svg>
        </div>
    )
}