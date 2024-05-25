import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
    return (
      <main className="bg-[#EFF5F8] relative">
        <svg className="absolute z-1 w-screen overflow-hidden" width="1440" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M136.327 -2348.81C125.92 -2336.92 139.115 -2341.33 148.641 -2335.47C221.926 -2290.37 254.564 -2190.81 320.017 -2134.34C495.693 -1982.77 724.872 -1914.3 914.189 -1781.32C1185.31 -1590.89 1515.54 -1354.25 1577.63 -1005C1610.56 -819.791 1676.83 -523.135 1481.68 -405.184C1378.03 -342.538 1257.5 -313.879 1146.11 -268.699C976.744 -200.005 803.58 -130.032 640.706 -47.0393C526.514 11.1477 411.803 81.6646 311.807 162.306C189.558 260.895 108.703 389.723 38.8374 528.661C-30.4762 666.5 -90.9337 811.083 -127.921 961.206C-162.565 1101.82 -152.825 1253.52 -144.34 1396.83C-126.521 1697.77 26.1371 1942.83 294.362 2081.31C380.705 2125.88 472.639 2163.18 561.175 2203.42C662.792 2249.61 773.563 2269.63 872.115 2322.98C984.278 2383.69 1091.61 2452.81 1204.6 2512.31C1268.43 2545.92 1325.09 2573.88 1397.53 2573.88C1510.45 2573.88 1603.88 2540.18 1691.54 2464.08C1796.04 2373.35 1890.56 2191.02 1848.03 2046.42C1803.02 1893.38 1648.31 1825.68 1525.81 1746.25C1440.95 1691.24 1355.03 1641.34 1265.15 1594.89C1178.05 1549.86 1078.29 1519.12 997.311 1463.53C901.406 1397.7 870.24 1273.85 847.999 1165.42C810.995 985.026 825.119 796.165 930.608 641.543C960.999 596.997 986.889 542.855 1028.61 507.624C1078.91 465.144 1113.53 442.728 1152.27 387.045C1173.84 356.029 1200.88 338.578 1230.26 316.237C1273.89 283.052 1310 241.973 1352.38 207.459C1391.5 175.598 1434.67 149.155 1474.5 118.179C1523.11 80.371 1585.37 68.0062 1637.66 35.5701C1763.39 -42.411 1891.19 -182.708 1962.97 -313.852C2117.56 -596.308 2159.83 -903.337 2193.86 -1221.02C2204.78 -1322.92 2206.53 -1422.96 2193.86 -1524.77C2176.65 -1663.16 2113.5 -1768.3 2037.88 -1884.97C1785.49 -2274.4 1431.49 -2583.68 1061.45 -2858.84C826.799 -3033.32 581.886 -3192.83 302.572 -3285.74C199.865 -3319.9 15.9681 -3384.81 -92.5166 -3326.78C-179.932 -3280.03 -258.345 -3175.81 -321.873 -3102.56C-440.36 -2965.94 -532.753 -2787.33 -595.356 -2618.7C-653.224 -2462.83 -666.602 -2242.61 -605.618 -2084.05C-557.99 -1960.22 -471.014 -1828.89 -381.906 -1731.55C-192.162 -1524.29 63.9115 -1368.44 174.296 -1098.9C217.725 -992.851 252.722 -879.349 208.161 -767.947C177.067 -690.213 129.702 -629.2 76.807 -565.272C-56.3285 -404.366 -178.757 -237.779 -326.491 -89.1135C-519.772 105.387 -745.934 288.12 -975.051 439.381C-1126.98 539.68 -1275.18 619.4 -1443 689.775" stroke="white" strokeWidth="133.326" strokeLinecap="round"/>
        </svg>

        <div className="w-full px-16 pt-20 flex-col lg:flex-row justify-start items-center gap-20 inline-flex mt-10 font-semibold relative">
          <div className="text-center text-green-500 text-5xl font-medium font-['General Sans'] leading-snug">Projects</div>
        </div>

        <div className="w-full px-16 pb-20 flex-col lg:flex-row justify-start items-center gap-20 inline-flex mt-10">

          <div className="w-full px-[57.78px] py-[101.11px] bg-slate-900 rounded-[40px] flex-col justify-center items-start gap-[72.22px] flex relative">
            <Image className="rounded-[40px] w-full h-full absolute top-0 left-0 z-10" src="/home4.jpg" alt="Consulting Image" layout="fill" objectFit="cover"/>
            <div className="w-full h-full absolute top-0 left-0 bg-slate-900 opacity-80 rounded-[40px] z-20" />
            <div className="flex-col justify-start items-start gap-[21.67px] flex z-20 mb-16 relative">
              <div className="self-stretch flex-col justify-start items-start gap-[14.44px] flex">
                <div className="self-stretch flex-col justify-start items-start gap-[14.44px] flex">
                  <div className="text-center text-green-500 text-sm font-medium font-['General Sans'] leading-snug">Projects</div>
                  <div className="max-w-[649px] self-stretch flex-col justify-start items-start gap-[21.67px] flex">
                      <a href='./projects/consulting/'><div className="hover:text-slate-400 active:text-slate-600 transition delay-75 self-stretch text-white text-[56px] font-medium font-['General Sans'] leading-[67.20px]">Consulting</div></a>
                      <div className="self-stretch text-white text-lg font-normal font-['General Sans'] leading-[27px]">Learn more about our efforts through consulting!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-[57.78px] py-[101.11px] bg-slate-900 rounded-[40px] flex-col justify-center items-start gap-[72.22px] flex relative">
          <Image className="rounded-[40px] w-full h-full absolute top-0 left-0 z-10" src="/values1.png" alt="Consulting Image" layout="fill" objectFit="cover"/>
            <div className="w-full h-full absolute top-0 left-0 bg-slate-900 opacity-80 rounded-[40px] z-20" />
            <div className="flex-col justify-start items-start gap-[21.67px] flex z-20 mb-16 relative">
              <div className="self-stretch flex-col justify-start items-start gap-[14.44px] flex">
                <div className="self-stretch flex-col justify-start items-start gap-[14.44px] flex">
                  <div className="text-center text-green-500 text-sm font-medium font-['General Sans'] leading-snug">Projects</div>
                  <div className="max-w-[649px] self-stretch flex-col justify-start items-start gap-[21.67px] flex">
                    <a href='./projects/committees/'><div className="hover:text-slate-400 active:text-slate-600 transition delay-75 self-stretch text-white text-[56px] font-medium font-['General Sans'] leading-[67.20px]">Committees</div></a>
                    <div className="self-stretch text-white text-lg font-normal font-['General Sans'] leading-[27px]">Learn more about our efforts through our committees!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
    );
  }
