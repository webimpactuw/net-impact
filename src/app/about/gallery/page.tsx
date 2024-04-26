import { Metadata } from 'next'
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer'; 

export const metadata: Metadata = {
  title: 'Gallery',
}

export default function Gallery() {
  return (
    <div className="bg-slate-100">
      <NavBar />
      <div className="h-[110px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1803" viewBox="0 0 1440 1803" fill="none">
          <path d="M549.151 -142C499.398 -86.2777 307.009 -75.9391 243.501 -39.4996C118.875 32.0068 91.8239 45.8802 -15.9995 139C-24.7031 146.517 -274.166 407.655 -203.499 312.501C-167.109 302.797 -173.701 294.689 -137 284C-203.499 424 462.968 513.995 526.307 195.5C589.646 -122.994 1622.19 235.584 435.5 552C350.969 589.946 354.625 524.487 273.331 569.266C214.084 601.9 156.492 637.822 98.7583 673.05C55.1488 699.659 152.891 680.395 157.138 679.818C379.439 649.629 601.194 609.77 822.432 572.649C952.171 550.881 1080.49 522.646 1209.65 497.912C1246.23 490.907 1287.46 471.673 1315.69 500.451C1353.81 539.299 1373.53 605.246 1375.48 658.949C1379.75 776.299 1228.35 775.47 1144.22 785.014C999.705 801.408 850.102 807.194 710.468 851.289C606.548 884.106 541.525 942.242 477.234 1028.4C414.025 1113.11 366.28 1198.22 407.011 1302.53C419.477 1334.45 447.331 1347.34 476.952 1360.91C525.099 1382.95 574.632 1400.62 624.733 1417.59C684.111 1437.7 737.613 1464.79 793.665 1492.33C872.16 1530.89 955.654 1558.78 1036.49 1591.88C1109.74 1621.88 1181.61 1654.11 1250.83 1692.56C1282.87 1710.37 1311.4 1726.35 1346.15 1736.28" stroke="white" stroke-width="133.326" stroke-linecap="round"/>
        </svg>
      </div>
      <main className="w-[1440px] px-[64px] py-[112px] flex flex-col gap-[80px] text-[#11122D] bg-white z-10">
        <div className="text-center">
          <h1 className="text-[48px] font-medium leading-[120%] mb-[24px]">Gallery</h1>
          <p className="text-[#2F8097] text-[20px] font-medium leading-[150%]">See more about what we do at Net Impact!</p>
        </div>
        <div className="flex gap-[32px]">
          <div className="flex flex-col gap-[32px]">
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[234px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[234px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[234px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="bg-slate-500 w-[416px] h-[234px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
            <div className="bg-slate-500 w-[416px] h-[416px] grid-item"></div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
