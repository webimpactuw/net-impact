import { Metadata } from 'next'
import Image from 'next/image'
import ChevronLink from '@/app/components/ChevronLink'

export const metadata: Metadata = {
  title: 'Past Events',
}

export default function PastEvents() {
  return (
    <div className="w-full bg-slate-100 flex-col inline-flex">
        <div className="absolute overflow-hidden w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="2200" height="1900" viewBox="0 0 1440 1860" fill="none">
                <path d="M136.327 -2102.81C125.92 -2090.92 139.115 -2095.33 148.641 -2089.47C221.926 -2044.37 254.564 -1944.81 320.017 -1888.34C495.693 -1736.77 724.872 -1668.3 914.189 -1535.32C1185.31 -1344.89 1515.54 -1108.25 1577.63 -759C1610.56 -573.791 1676.83 -277.135 1481.68 -159.184C1378.03 -96.5384 1257.5 -67.8788 1146.11 -22.6992C976.744 45.995 803.58 115.968 640.706 198.961C526.514 257.148 411.803 327.665 311.807 408.306C189.558 506.895 108.703 635.723 38.8374 774.661C-30.4762 912.5 -90.9337 1057.08 -127.921 1207.21C-162.565 1347.82 -152.825 1499.52 -144.34 1642.83C-126.521 1943.77 26.1371 2188.83 294.362 2327.31C380.705 2371.88 472.639 2409.18 561.175 2449.42C662.792 2495.61 773.563 2515.63 872.115 2568.98C984.278 2629.69 1091.61 2698.81 1204.6 2758.31C1268.43 2791.92 1325.09 2819.88 1397.53 2819.88C1510.45 2819.88 1603.88 2786.18 1691.54 2710.08C1796.04 2619.35 1890.56 2437.02 1848.03 2292.42C1803.02 2139.38 1648.31 2071.68 1525.81 1992.25C1440.95 1937.24 1355.03 1887.34 1265.15 1840.89C1178.05 1795.86 1078.29 1765.12 997.311 1709.53C901.406 1643.7 870.24 1519.85 847.999 1411.42C810.995 1231.03 825.119 1042.16 930.608 887.543C960.999 842.997 986.889 788.855 1028.61 753.624C1078.91 711.144 1113.53 688.728 1152.27 633.045C1173.84 602.029 1200.88 584.578 1230.26 562.237C1273.89 529.052 1310 487.973 1352.38 453.459C1391.5 421.598 1434.67 395.155 1474.5 364.179C1523.11 326.371 1585.37 314.006 1637.66 281.57C1763.39 203.589 1891.19 63.2923 1962.97 -67.8521C2117.56 -350.308 2159.83 -657.337 2193.86 -975.016C2204.78 -1076.92 2206.53 -1176.96 2193.86 -1278.77C2176.65 -1417.16 2113.5 -1522.3 2037.88 -1638.97C1785.49 -2028.4 1431.49 -2337.68 1061.45 -2612.84C826.799 -2787.32 581.886 -2946.83 302.572 -3039.74C199.865 -3073.9 15.9681 -3138.81 -92.5166 -3080.78C-179.932 -3034.03 -258.345 -2929.81 -321.873 -2856.56C-440.36 -2719.94 -532.753 -2541.33 -595.356 -2372.7C-653.224 -2216.83 -666.602 -1996.61 -605.618 -1838.05C-557.99 -1714.22 -471.014 -1582.89 -381.906 -1485.55C-192.162 -1278.29 63.9115 -1122.44 174.296 -852.898C217.725 -746.851 252.722 -633.349 208.161 -521.947C177.067 -444.213 129.702 -383.2 76.807 -319.272C-56.3285 -158.366 -178.757 8.22079 -326.491 156.886C-519.772 351.387 -745.934 534.12 -975.051 685.381C-1126.98 785.68 -1275.18 865.4 -1443 935.775" stroke="white" stroke-width="133.326" stroke-linecap="round"/>
            </svg>
        </div>
        <div className="h-[272px] px-16 py-52 flex-col justify-start items-center gap-20 flex">
            <div className="h-28 flex-col justify-start items-center gap-6 flex">
                <div className="self-stretch h-[61px] text-center text-slate-900 text-[56px] font-medium font-['General Sans'] leading-[67.20px] z-10">Past Events</div>
                <div className="self-stretch text-center text-cyan-700 text-lg font-normal font-['General Sans'] leading-[3px] z-10">View all of our past events</div>
            </div>
        </div>
    <div className="w-[90%] self-stretch h-[470px] flex-col justify-start items-center gap-16 flex m-auto">
        <div className="h-[422px] bg-white rounded-[20px] border border-teal-600 justify-start items-start inline-flex z-10">
            <div className="grow shrink basis-0 self-stretch px-[60px] flex-col justify-center items-start inline-flex">
                <div className="self-stretch h-[266px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-slate-900 text-[32px] font-medium font-['General Sans'] leading-[41.60px]">2024 Sustainability Career Fair</div>
                    <div className="self-stretch text-slate-900 text-base font-normal font-['General Sans'] leading-normal">Student Organizations, ReThink and Net Impact, 
                        are calling attention to sustainability in the Foster School of Business. <br/><br/>This quarter we are hosting a career fair to connect high-potential
                        students with quality companies. <br/><br/>Our goal with this event is to highlight sustainability-related organizations and provide employment connections
                        to current job-seekers and prospective future sustainability professionals. </div>
                </div>
                <div className="justify-center items-center gap-2 flex">
                    <ChevronLink text="Gallery" link="/" />
                </div>
            </div>
            <div className="w-px self-stretch bg-teal-600" />
            <div className="h-[422px] flex-col justify-center items-end inline-flex overflow-hidden rounded-r-2xl">
                <Image width={800} height={422} alt="test" src="https://via.placeholder.com/655x422" />
            </div>
        </div>
    </div>
    <div className="w-[90%] self-stretch h-[470px] flex-col justify-start items-center gap-16 flex m-auto">
        <div className="h-[422px] bg-white rounded-[20px] border border-teal-600 justify-start items-start inline-flex z-10">
            <div className="grow shrink basis-0 self-stretch px-[60px] flex-col justify-center items-start inline-flex">
                <div className="self-stretch h-[266px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-slate-900 text-[32px] font-medium font-['General Sans'] leading-[41.60px]">Global Sustainability Case Competition</div>
                    <div className="self-stretch text-slate-900 text-base font-normal font-['General Sans'] leading-normal">In 2022, Net Impact partnered with Nasdaq and Wilcox Farms to host the Global Sustainability Case Competition (GSCC).<br/><br/>In the GSCC, student teams worked together to pitch innovative and sustainable solutions for the High Atlas Foundation, a nonprofit in Morocco.<br/><br/>The solutions focused on empowering small organic farmers to make a living sustainably.</div>
                </div>
            </div>
            <div className="w-px self-stretch bg-teal-600" />
            <div className="h-[422px] flex-col justify-center items-end inline-flex overflow-hidden rounded-r-2xl">
                <Image width={800} height={422} alt="test" src="https://via.placeholder.com/655x422" />
            </div>
        </div>
    </div>
</div>
  )
}
