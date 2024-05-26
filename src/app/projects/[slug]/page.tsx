import { Metadata } from 'next'
import Image from 'next/image'
import { sanityFetch, urlFor } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'
import { PortableText } from '@portabletext/react'

export const metadata: Metadata = {
  title: 'Projects',
}

const PROJECT_QUERY = `*[
    _type == "projects" &&
    slug.current == $slug
][0]`

export default async function Committees({ params, }: { params: {slug: string} }) {
    const project = await sanityFetch<SanityDocument>({
        query: PROJECT_QUERY,
        params,
    });

    const projImage = project && project.projectImage ? urlFor(project.projectImage)?.url() : '';

  return project ? (
    <main className="bg-[#EFF5F8] relative">

        <svg className="absolute z-1 w-screen block" width="1440" viewBox="0 0 1440 1368" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-827.673 -582.813C-838.08 -570.919 -824.885 -575.335 -815.359 -569.472C-742.074 -524.374 -709.436 -424.806 -643.983 -368.337C-468.307 -216.773 -239.128 -148.295 -49.8113 -15.3228C221.312 175.109 551.54 411.751 613.629 761C646.555 946.209 712.834 1242.87 517.679 1360.82C414.029 1423.46 293.502 1452.12 182.111 1497.3C12.7439 1565.99 -160.42 1635.97 -323.294 1718.96C-437.486 1777.15 -552.197 1847.66 -652.193 1928.31C-774.442 2026.89 -855.297 2155.72 -925.163 2294.66C-994.476 2432.5 -1054.93 2577.08 -1091.92 2727.21C-1126.56 2867.82 -1116.83 3019.52 -1108.34 3162.83C-1090.52 3463.77 -937.863 3708.83 -669.638 3847.31C-583.295 3891.88 -491.361 3929.18 -402.825 3969.42C-301.208 4015.61 -190.437 4035.63 -91.8855 4088.98C20.2777 4149.69 127.607 4218.81 240.604 4278.31C304.429 4311.92 361.086 4339.88 433.531 4339.88C546.454 4339.88 639.88 4306.18 727.538 4230.08C832.044 4139.35 926.564 3957.02 884.034 3812.42C839.022 3659.38 684.311 3591.68 561.806 3512.25C476.954 3457.24 391.027 3407.34 301.15 3360.89C214.049 3315.86 114.287 3285.12 33.3113 3229.53C-62.594 3163.7 -93.76 3039.85 -116.001 2931.42C-153.005 2751.03 -138.881 2562.16 -33.3918 2407.54C-3.00084 2363 22.8891 2308.85 64.6104 2273.62C114.915 2231.14 149.531 2208.73 188.268 2153.04C209.844 2122.03 236.884 2104.58 266.259 2082.24C309.891 2049.05 345.999 2007.97 388.377 1973.46C427.498 1941.6 470.67 1915.16 510.496 1884.18C559.107 1846.37 621.367 1834.01 673.662 1801.57C799.387 1723.59 927.194 1583.29 998.969 1452.15C1153.56 1169.69 1195.83 862.663 1229.86 544.984C1240.78 443.082 1242.53 343.037 1229.86 241.228C1212.65 102.837 1149.5 -2.29721 1073.88 -118.969C821.494 -508.399 467.485 -817.681 97.449 -1092.84C-137.201 -1267.32 -382.114 -1426.83 -661.428 -1519.74C-764.135 -1553.9 -948.032 -1618.81 -1056.52 -1560.78C-1143.93 -1514.03 -1222.34 -1409.81 -1285.87 -1336.56C-1404.36 -1199.94 -1496.75 -1021.33 -1559.36 -852.705C-1617.22 -696.834 -1630.6 -476.611 -1569.62 -318.053C-1521.99 -194.22 -1435.01 -62.8854 -1345.91 34.4481C-1156.16 241.707 -900.088 397.558 -789.704 667.102C-746.275 773.149 -711.278 886.651 -755.839 998.053C-786.933 1075.79 -834.298 1136.8 -887.193 1200.73C-1020.33 1361.63 -1142.76 1528.22 -1290.49 1676.89C-1483.77 1871.39 -1709.93 2054.12 -1939.05 2205.38C-2090.98 2305.68 -2239.18 2385.4 -2407 2455.77" stroke="white" strokeWidth="133.326" strokeLinecap="round"/>
        </svg>

        <div className="w-full px-16 py-20 flex-col justify-start items-center gap-20 inline-flex mt-10">
            <div className="w-full px-[57.78px] py-[101.11px] bg-slate-900 rounded-[40px] flex-col justify-center items-start gap-[72.22px] flex relative">
                <Image className="rounded-[40px] w-full h-full absolute top-0 left-0 z-0" src={ projImage ? projImage : '' } alt="Consulting Image" layout="fill" objectFit="cover"/>
                <div className="w-full h-full absolute top-0 left-0 bg-slate-900 opacity-80 rounded-[40px] z-10" />
                <div className="flex-col justify-start items-start gap-[21.67px] flex z-20 mb-16 relative">
                    <div className="self-stretch flex-col justify-start items-start gap-[14.44px] flex">
                        <div className="self-stretch flex-col justify-start items-start gap-[14.44px] flex">
                            <div className="text-center text-green-500 text-sm font-medium font-['General Sans'] leading-snug">Projects</div>
                            <div className="max-w-[649px] self-stretch flex-col justify-start items-start gap-[21.67px] flex">
                                <div className="self-stretch text-white text-[56px] font-medium font-['General Sans'] leading-[67.20px]">{ project.name }</div>
                                <div className="self-stretch text-white text-lg font-normal font-['General Sans'] leading-[27px]">{ project.description }</div>
                                { project.buttonText ? <a href={ project.buttonLink }><div className="px-6 py-3 cursor-pointer bg-teal-600 hover:bg-teal-900 active:bg-teal-400 transition delay-75 rounded-lg justify-center items-end gap-2 inline-flex">
                                    <div className="text-white text-base font-medium font-['General Sans'] leading-normal">{ project.buttonText }</div>
                                </div></a> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative self-stretch min-h-[738px] px-[57.82px] py-[101.19px] bg-white flex-col justify-start items-start gap-[72.28px] flex overflow-auto">
            <div className="flex-col md:flex-row self-stretch justify-start items-start gap-[114px] inline-flex">
                { project.information.length > 1 ? <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="text-slate-900 text-2xl font-medium font-['General Sans'] leading-[33.60px]">Table of contents</div>
                        <div className="self-stretch h-[204px] flex-col justify-start items-start flex">
                        {
                            project.information.map((section: { header: string, content: any }) => {
                                return <div key={ section.header } className="self-stretch px-4 py-3 justify-start items-start gap-2 inline-flex">
                                    <div className="text-slate-900 text-lg font-normal font-['General Sans'] leading-[27px]">{ section.header }</div>
                                </div>
                            })
                        }
                        </div>
                </div> : <></> }
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    {
                        project.information.map((section: { header: string, content: any }) => {
                            return <>
                                <div className="self-stretch lg:h-[16%] pb-4 flex-col justify-start items-start flex">
                                    <div className="self-stretch text-slate-900 text-[28px] font-medium font-['General Sans'] leading-[42px]">{ section.header }</div>
                                </div>
                                <div className="self-stretch lg:h-[16%] pb-4 flex-col justify-start items-start flex">
                                    <div className="self-stretch text-slate-900 text-base font-normal font-['General Sans'] leading-normal">
                                        <PortableText value={ section.content } />
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
        {/* </div> */}
    </main>
  ) : <div className="relative bg-slate-100">
        <div className="absolute w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="2200" height="424" viewBox="0 0 1400 424" fill="none">
                <path d="M63.6648 -85.2876C-33.6799 -67.4735 -119.217 -33.0075 -206.293 11.6968C-259.574 39.0506 -312.133 66.9877 -357.694 104.83C-404.446 143.662 -436.126 187.596 -456.688 242.253C-460.325 251.922 -502.778 357.278 -472.048 356.557C-453.221 356.115 -432.808 351.739 -414.293 349.271C-377.836 344.409 -341.404 339.289 -305.078 333.511C-225.468 320.848 -152.406 307.529 -82.0365 268.972C79.1335 180.664 240.56 89.6568 424.414 51.6927C480.873 40.0345 539.257 27.7344 596.987 24.4727C616.716 23.3581 620.889 22.1062 624.011 40.2585C629.739 73.5543 606.809 110.994 595.726 141.936C581.122 182.707 566.367 229.839 570.583 272.888C573.597 303.656 601.023 315.577 631.708 316.084C658.896 316.532 686.969 312.68 713.966 310.092C779.378 303.824 844.666 296.625 909.837 288.042C1022.63 273.19 1131.61 250.775 1241.69 223.069C1323.4 202.503 1409.04 194.113 1492.27 181.231" stroke="white" stroke-width="133.326" stroke-linecap="round"/>
            </svg>
        </div>
        <div className="px-[366px] py-[200px] gap-100 justify-center items-center flex">
            <div className="flex-grow flex-shrink basis-0 self-stretch flex flex-col justify-start items-center gap-5">
                <div className="self-stretch text-center text-red-400 text-[56px] font-medium leading-[150%] mt-20 z-10">
                    Error: that project doesn&apos;t exist!
                </div>
            </div>
        </div>
    </div>
}
