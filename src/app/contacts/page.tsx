import { Metadata } from 'next'

import NavBar from "../components/NavBar";

import Image from 'next/image'
import ContactsList from "../components/ContactsList"
import ContactsForm from "../components/ContactsForm"
import { sanityFetch, urlFor } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'

export const metadata: Metadata = {
  title: 'Contact Us',
}

const ASSET_QUERY = `*[_type == "assets"]`;
const SOCIALS_QUERY = `*[_type == "socials"]`;

export default async function Contacts() {
  const assets = await sanityFetch<SanityDocument[]>({query: ASSET_QUERY});
  const socials = await sanityFetch<SanityDocument[]>({query: SOCIALS_QUERY});

  const headerImage = assets[0].contactImage ? urlFor(assets[0].contactImage)?.url() : '';

  return (
    <main className = "bg-[#EFF5F8]">
      <div className="absolute z-1 lg:w-full block">
        <svg viewBox="0 0 1440 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2128.35 605.677C2120.98 591.695 2120.37 605.596 2111.48 612.384C2043.08 664.603 1938.44 659.336 1862.24 700.166C1657.73 809.751 1511.57 999.091 1319.52 1128.08C1044.47 1312.81 705.089 1536.12 356.822 1468.74C172.133 1433.01 -128.548 1388.42 -168.609 1163.93C-189.887 1044.71 -173.386 921.922 -175.582 801.738C-178.922 619.001 -182.093 432.26 -201.11 250.452C-214.442 122.985 -239.098 -9.39007 -278.484 -131.664C-326.635 -281.15 -417.868 -402.85 -522.479 -517.921C-626.264 -632.083 -739.52 -740.398 -866.371 -828.794C-985.187 -911.591 -1130.28 -956.939 -1267.09 -1000.45C-1554.38 -1091.81 -1837.9 -1037.26 -2063.4 -836.594C-2135.99 -771.998 -2203.8 -699.573 -2273.14 -631.376C-2352.71 -553.103 -2411.15 -456.894 -2496.31 -384.05C-2593.23 -301.145 -2696.26 -225.771 -2792.35 -141.651C-2846.62 -94.1367 -2893.05 -51.2896 -2919.05 16.3298C-2959.58 121.732 -2961.64 221.03 -2922.07 330.158C-2874.89 460.261 -2738.62 613.918 -2588.38 626.112C-2429.38 639.018 -2310.68 518.906 -2192.58 433.063C-2110.78 373.605 -2033.37 311.306 -1957.76 244.088C-1884.48 178.945 -1819.98 96.8611 -1739.04 41.226C-1643.17 -24.6665 -1516.38 -9.31132 -1407.2 8.83836C-1225.54 39.0348 -1054.33 119.992 -947.861 273.942C-917.188 318.295 -875.943 361.889 -858.03 413.475C-836.432 475.673 -827.932 516.028 -789.858 572.166C-768.651 603.436 -762.066 634.937 -751.754 670.373C-736.438 723.007 -711.053 771.451 -694.045 823.393C-678.345 871.341 -669.156 921.127 -654.535 969.416C-636.69 1028.36 -647.491 1090.91 -635.982 1151.36C-608.312 1296.69 -523.224 1466.33 -426.572 1580.39C-218.405 1826.04 53.004 1975.68 337.309 2121.45C428.506 2168.21 521.261 2205.74 620.833 2230.45C756.183 2264.05 876.978 2242.83 1013.01 2214.12C1467.08 2118.29 1882.8 1898.85 2272.41 1652.2C2519.48 1495.8 2756.26 1324.44 2943.21 1097.07C3011.95 1013.46 3138.53 865.11 3123.3 743.028C3111.03 644.656 3041.89 534.067 2996.32 448.484C2911.32 288.861 2777.76 138.528 2642.83 19.582C2518.11 -90.3669 2317.36 -181.882 2147.48 -181.86C2014.8 -181.843 1861 -147.79 1738.17 -99.5462C1476.63 3.18298 1239.26 186.272 948.061 192.576C833.493 195.057 714.993 186.992 627.002 105.421C565.604 48.5033 525.652 -17.602 484.964 -89.915C382.552 -271.925 270.996 -445.98 185.247 -637.223C73.0621 -887.429 -16.3387 -1164.1 -75.3049 -1432.24C-114.405 -1610.04 -135.629 -1776.98 -141.094 -1958.87" stroke="white" stroke-width="133.326" stroke-linecap="round"/>
        </svg>
      </div> 

      <div className = "flex flex-col justify-between">

      {/*background thing */}

        <div className = "flex w-full h-[919] flex-col justify-around z-10 mb-20">
          <div className = "flex lg:flex-row flex-col-reverse pt-72 justify-between px-24">
            <ContactsForm/>
        
            <figure className = "rounded-3xl lg:w-[45%] h-[300px] lg:h-[685px] lg:mb-0 mb-10 relative overflow-hidden bg-slate-300">
              <Image src={headerImage ? headerImage : ''} alt={'Contacts image'} layout="fill" objectFit="cover" />
            </figure>
          </div>
        </div>
        <div className = "z-20">
          <ContactsList instagram={ socials[0].instagram } linkedin={ socials[0].linkedin } slack={ socials[0].slack } />
        </div>
        
      </div>
      
      
    </main>
  );
}
