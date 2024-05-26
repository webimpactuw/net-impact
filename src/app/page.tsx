import ValuesBox from "./components/ValuesBox";
import CurrentInfoBox1 from "./components/CurrentInfoBox1";
import CurrentInfoBox2 from "./components/CurrentInfoBox2";
import CurrentInfoBox3 from "./components/CurrentInfoBox3";
import CurrentInfoBox4 from "./components/CurrentInfoBox4";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "@/sanity/client";
import SponsorScroll from "./components/SponsorScroll";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const SPONSOR_QUERY = `*[_type == "sponsors"]`;

export const dynamic = 'force-dynamic';

const { projectId, dataset } = client.config();

function urlFor(source: SanityImageSource) {
  return projectId && dataset ? imageUrlBuilder({ projectId, dataset}).image(source) : null;
}

export default async function Home() {
  const sponsors = await sanityFetch<SanityDocument[]>({query: SPONSOR_QUERY});

  return (
    <main>
      {/* ====================
      BACKGROUND VECTOR
      ==================== */}
      <div className="absolute overflow-hidden w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="1127" height="650" viewBox="0 0 1127 650" fill="none">
          <path d="M1049.05 306.083C1032.71 309.673 1018.09 323.623 1003.27 330.951C981.674 341.627 959.064 346.657 935.804 352.294C901.83 360.526 869.695 371.801 837.12 384.347C796.803 399.875 755.042 409.98 713.961 422.965C691.812 429.966 670.452 440.189 649.548 450.152C604.08 471.82 559.311 491.33 511.109 506.342C435.874 529.774 359.372 552.806 282.533 570.497C265.749 574.362 258.535 568.034 243.161 560.197C227.382 552.153 231.695 547.873 246.495 537.845C269.524 522.242 295.133 510.7 318.976 496.447C349.186 478.388 377.213 456.818 405.522 435.965C434.063 414.941 461.912 392.668 491.571 373.224C530.135 347.941 571.78 327.936 610.834 303.479C677.739 261.58 751.27 203.591 786.889 130.335C797.749 107.999 798.414 95.5168 773.77 86.723C752.183 79.0201 728.896 79.9003 706.739 84.5746C652.868 95.9392 601.935 121.49 551.756 143.216C471.693 177.882 399.901 217.812 329.911 270.156C304.186 289.395 279.548 310.328 251.982 326.967C226.066 342.61 197.341 352.871 168.773 362.431C129.326 375.631 63.1321 405.471 24.7866 371.273C10.7963 358.795 43.5437 339.909 50.1067 335.056C83.4801 310.383 115.44 284.895 145.974 256.682C155.416 247.958 181.346 229.662 188.571 216.669C192.277 210.006 192.865 205.764 199.592 199.143C240.716 158.67 291.822 128.074 336.063 91.1153C392.45 44.0105 471.132 41.6015 532.525 1.44221C558.752 -15.7137 592.793 -42.5302 603.36 -74.2437C609.598 -92.9626 577.547 -71.9848 573.677 -69.9411C483.268 -22.1966 393.996 19.4642 294.61 45.8828C220.997 65.4501 146.11 79.7501 73.4538 102.928C37.2638 114.473 -4.53972 126.957 -36.0295 149.497C-57.3741 164.776 -81.1183 170.329 -107.974 172.565C-147.67 175.869 -189.711 173.128 -229.588 171.307C-237.018 170.967 -224.639 156.814 -219.719 151.221C-193.045 120.895 -164.546 92.5221 -139.473 60.7323C-119.699 35.6602 -92.62 4.07164 -83.5092 -27.6773C-78.9791 -43.4639 -109.545 -28.2109 -112.814 -27.0117C-162.526 -8.77519 -212.375 8.35448 -263.012 23.9156C-389.414 62.7592 -521.848 87.9335 -645.23 134.72" stroke="white" stroke-width="155.537" stroke-linecap="round"/>
        </svg>
      </div>

      {/* ====================
      SPLASH
      ==================== */}
      {/* TODO: add responsivity for medium sized screens
      TODO: add responsivity for smaller sized screens */}
      <header className="lg:h-[1000px] px-[3.5%] py-[10%] pt-0 md:pt-[10%] lg:pt-[5%] flex flex-col-reverse lg:flex-row justify-between gap-[3.5%] items-center bg-slate-100">
        <div className="lg:w-1/2 h-1/2 flex gap-8 xl:gap-16 flex-col z-10 pt-16 lg:pt-0">
          <h2 className="text-[#2C3E3E] text-[40px] font-semibold leading-[110%] z-20 text-center lg:text-left">Net Impact UW</h2>
          <div className="z-20 text-center lg:text-left">
            <h1 className="font-semibold text-[30px] sm:text-[41px] leading-[110%]">Let&apos;s create a more</h1>
            <h1 className="font-bold text-[40px] sm:text-[53.679px] leading-[110%] uppercase text-[#2F8097]">Sustainable Future</h1>
          </div>
          <div className="lg:w-[90%] z-20 text-center lg:text-left">
            <p className="text-[rgb(17,18,45)] text-[23px] font-medium">We aim to inspire environmental action and increase awareness through Education, Activism, & Career Development.</p>
          </div>
          <div className="flex gap-[4%] text-[18px] font-medium">                  
            <input name= "user_email" id="email" type="email" className="w-3/4 h-[48px] p-4 bg-white text-gray-900 text-[11px] sm:text-sm border border-[#2B9575] rounded-full" placeholder ="Join our team by adding your email..." required />
            <div className="cursor-pointer w-1/3 xl:w-1/5 flex bg-[#2B9575] uppercase rounded-full justify-center items-center sm:px-6 py-3 hover:bg-teal-900 active:bg-teal-400 transition delay-15009  gap-2 ">
              <div className="text-white cursor-pointer text-base font-normal font-['General Sans'] leading-normal">Join Us</div>
            </div>
          </div>
        </div>
        {/* TODO: consider making this more static/less responsive, only changing at media breakpoints */}
        <figure className="relative rounded-3xl overflow-hidden pointer-events-none w-11/12 lg:w-[609px] h-[300px] lg:h-[700px] mt-16 lg:mt-0">
          <Image alt="headerimg" src="/headerimg.jpg" layout="fill" objectFit="cover" />
        </figure>
      </header>

      {/* ====================
      OUR MISSION
      ==================== */}
      <section className="flex justify-center py-[250px]">
        <div className=" flex justify-center items-center gap-[16px] flex-col w-3/4 sm:w-1/2 text-[#11122D] text-center">
          <p className="text-[16px] font-medium leading-6">Our Mission</p>
          <p className="text-[24px] font-normal leading-8">Net Impact UW is a sustainable business club, aiming to <strong className="font-semibold">inspire environmental action</strong> and <strong className="font-semibold">increase awareness</strong> through Education, Activism, & Career Development.</p>
        </div>
      </section>
      
      {/* ====================
      CURRENT INFORMATION
      ==================== */}
      <section className="flex xl:h-[1276px] items-center px-16 py-[112px] gap-[80px] flex-col">
        <div className="flex flex-col items-center gap-[18px] text-[#132515] text-center">
          <h1 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">Current Information</h1>
          <p className="text-[18px] font-normal leading-[150%]">What is Net Impact currently doing?</p>
        </div>
        <div className="xl:flex gap-8">
          <div className="lg:flex flex-col gap-8">
            <CurrentInfoBox1 />
            <div className="lg:flex gap-8 lg:h-[340px]">
              <CurrentInfoBox2 header="Take a look at who we are & what we do" desc="View our event pictures" link="/about/gallery" />
              <CurrentInfoBox2 header="Read through our journey!" desc="Read how Net Impact was created" link="/about" />
            </div>
          </div>
          <div className="lg:flex flex-col gap-8">
            <CurrentInfoBox3 />
            <CurrentInfoBox4 />
          </div>
        </div>
      </section>

      {/* ====================
      OUR VALUES
      ==================== */}
      <section className="flex justify-center px-16 py-[112px] gap-[80px] flex-col">
        <div className="flex gap-4 flex-col text-[#11122D]">
          <p className="text-[16px] font-medium leading-6 text-center lg:text-left">Our Values</p>
          <p className="text-[36px] font-medium leading-12 lg:leading-8">Education. Activism. Career Development.</p>
        </div>
        <div className="w-[250px] sm:w-[386.5px] lg:w-[773px] h-[250px] sm:h-[371px] lg:h-[742px] relative m-auto">
          <figure className="absolute 
            left-[50.1px] sm:left-[77.5px] lg:left-[155px] 
            w-[149.7px] sm:w-[231.5px] lg:w-[463px] 
            h-[149.7px] sm:h-[231.5px] lg:h-[463px] 
            bg-[#2B9575] bg-opacity-45 rounded-full text-center 
            pt-10 sm:pt-20 lg:pt-40 lg:text-[30px] font-medium">Activism</figure>
          <figure className="absolute 
            left-[100.3px] sm:left-[155px] lg:left-[310px] 
            top-[94px] sm:top-[139.5px] lg:top-[279px] 
            w-[149.7px] sm:w-[231.5px] lg:w-[463px] 
            h-[149.7px] sm:h-[231.5px] lg:h-[463px] 
            bg-[#5CB5B0] bg-opacity-70 rounded-full 
            pl-10 sm:pl-24 lg:pl-52 pt-12 sm:pt-24 lg:pt-52 lg:text-[30px] font-medium">Career<br/>Development</figure>
          <figure className="absolute 
            top-[94px] sm:top-[139.5px] lg:top-[279px] 
            w-[149.7px] sm:w-[231.5px] lg:w-[463px] 
            h-[149.7px] sm:h-[231.5px] lg:h-[463px] 
            bg-[#097E97] bg-opacity-50 rounded-full 
            pl-8 sm:pl-16 lg:pl-28 pt-16 sm:pt-28 lg:pt-60 lg:text-[30px] font-medium">Education</figure>
          <figure className="absolute 
            left-[99.3px] sm:left-[153.56px] lg:left-[307.12px] 
            top-[113.2px] sm:top-[168.06px] lg:top-[336.12px] 
            w-[50.7px] sm:w-[78.376px] lg:w-[156.752px] 
            h-[50.7px] sm:h-[78.376px] lg:h-[156.752px] 
            bg-[url('/NI+logo.png')] bg-cover" />
        </div>
        <div className="lg:flex lg:h-[500px] text-[#11122D] justify-between">
          <ValuesBox img="values1.png" header="Education" desc="Increasing awareness of the climate crisis and climate solutions through member meetings and the Sustainability Curriculum Initiative." />
          <ValuesBox img="values2.png" header="Activism" desc="Driving environmental change on campus through volunteering, philanthropy, and the Net Impact Consultancy." />
          <ValuesBox img="values3.png" header="Career Development" desc="Connecting members with meaningful sustainability career opportunities through speaker meetings, panel events, and the Climate Solutions Summit (CSS)." />
        </div>
      </section>

      {/* ====================
      PAST SPONSORS
      ==================== */}
      <section className="flex items-center px-16 py-[112px] gap-[80px] flex-col">
        <div className="flex gap-[16px] flex-col lg:w-[768px] text-[#11122D] text-center">
          <p className="text-[16px] font-medium leading-6">Our Connections</p>
          <p className="text-[36px] font-medium leading-8">Past Sponsors</p>
        </div>
        <div className="relative h-[103px] w-[270px] lg:w-[832px] xl:w-[1166px] 2xl:w-[1500px] overflow-hidden">
          <SponsorScroll images={sponsors.map((img: SanityDocument) => {
            return img.sourceImage ? urlFor(img.sourceImage)?.width(103).height(103).url() : null
          })} />
        </div>
      </section>
    </main>
  );
}
