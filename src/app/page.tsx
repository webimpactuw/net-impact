import Footer from "./Footer";
import NavBar from "./components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* ====================
      BACKGROUND VECTOR
      ==================== */}
      <div className="absolute">
        <svg xmlns="http://www.w3.org/2000/svg" width="1127" height="650" viewBox="0 0 1127 650" fill="none">
          <path d="M1049.05 306.083C1032.71 309.673 1018.09 323.623 1003.27 330.951C981.674 341.627 959.064 346.657 935.804 352.294C901.83 360.526 869.695 371.801 837.12 384.347C796.803 399.875 755.042 409.98 713.961 422.965C691.812 429.966 670.452 440.189 649.548 450.152C604.08 471.82 559.311 491.33 511.109 506.342C435.874 529.774 359.372 552.806 282.533 570.497C265.749 574.362 258.535 568.034 243.161 560.197C227.382 552.153 231.695 547.873 246.495 537.845C269.524 522.242 295.133 510.7 318.976 496.447C349.186 478.388 377.213 456.818 405.522 435.965C434.063 414.941 461.912 392.668 491.571 373.224C530.135 347.941 571.78 327.936 610.834 303.479C677.739 261.58 751.27 203.591 786.889 130.335C797.749 107.999 798.414 95.5168 773.77 86.723C752.183 79.0201 728.896 79.9003 706.739 84.5746C652.868 95.9392 601.935 121.49 551.756 143.216C471.693 177.882 399.901 217.812 329.911 270.156C304.186 289.395 279.548 310.328 251.982 326.967C226.066 342.61 197.341 352.871 168.773 362.431C129.326 375.631 63.1321 405.471 24.7866 371.273C10.7963 358.795 43.5437 339.909 50.1067 335.056C83.4801 310.383 115.44 284.895 145.974 256.682C155.416 247.958 181.346 229.662 188.571 216.669C192.277 210.006 192.865 205.764 199.592 199.143C240.716 158.67 291.822 128.074 336.063 91.1153C392.45 44.0105 471.132 41.6015 532.525 1.44221C558.752 -15.7137 592.793 -42.5302 603.36 -74.2437C609.598 -92.9626 577.547 -71.9848 573.677 -69.9411C483.268 -22.1966 393.996 19.4642 294.61 45.8828C220.997 65.4501 146.11 79.7501 73.4538 102.928C37.2638 114.473 -4.53972 126.957 -36.0295 149.497C-57.3741 164.776 -81.1183 170.329 -107.974 172.565C-147.67 175.869 -189.711 173.128 -229.588 171.307C-237.018 170.967 -224.639 156.814 -219.719 151.221C-193.045 120.895 -164.546 92.5221 -139.473 60.7323C-119.699 35.6602 -92.62 4.07164 -83.5092 -27.6773C-78.9791 -43.4639 -109.545 -28.2109 -112.814 -27.0117C-162.526 -8.77519 -212.375 8.35448 -263.012 23.9156C-389.414 62.7592 -521.848 87.9335 -645.23 134.72" stroke="white" stroke-width="155.537" stroke-linecap="round"/>
        </svg>
      </div>

      {/* ====================
      SPLASH
      ==================== */}
      <NavBar />
      {/* TODO: add responsivity for medium sized screens
      TODO: add responsivity for smaller sized screens */}
      <header className="w-[1440px] h-[751px] px-[64px] flex gap-[64px] items-center bg-slate-100">
        <div className="w-[664px] h-[377px] flex gap-[64px] flex-col z-10">
          <div className="h-[105px]">
            <h1 className="font-semibold text-[41px] leading-[110%]">Let&apos;s create a more</h1>
            <h1 className="font-bold text-[53.679px] leading-[110%] uppercase text-[#2B9575]">Sustainable Future</h1>
          </div>
          <div className="w-[615px] h-[93px]">
            <p className="text-[#11122D] text-[23px] font-medium">We are <strong className="text-[#2B9575] font-semibold">Net Impact UW</strong> and we aim to inspire environmental action and increase awareness through <strong className="text-[#2B9575] font-semibold">Education, Activism, & Career Development.</strong></p>
          </div>
          <div className="w-[615px] h-[51px] flex gap-[23px]">
            <div className="w-[472px] h-[51px] py-[12px] px-[24px] bg-white border-[1px] border-[#2B9575] rounded-full text-[18px] font-medium">
              <p className="opacity-50">Join our team by adding your email...</p>
            </div>
            <div className="w-[120px] h-[51px] flex bg-[#2B9575] uppercase rounded-full justify-center items-center">
              <p className="text-[18px] font-medium text-white">Join Us</p>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <div className="absolute w-[264px] h-[303px] left-[32px] top-[82px] rotate-[-2.5deg] bg-[url('/home1.png')] bg-cover rounded-lg z-0 shadow-lg shadow-black/15"></div>
          <div className="absolute w-[202px] h-[210px] left-[468px] top-[40px] rotate-[3.1deg] bg-[url('/home2.jpg')] bg-cover rounded-lg z-20 shadow-lg shadow-black/15"></div>
          <div className="absolute w-[460px] h-[460px] left-[171px] top-[122px] rotate-[1.2deg] bg-[url('/home3.jpg')] bg-cover rounded-lg z-10 shadow-lg shadow-black/15"></div>
          <div className="absolute w-[230px] h-[230px] left-[29px] top-[469px] rotate-[-3.1deg] bg-[url('/home4.jpg')] bg-cover rounded-lg z-20 shadow-lg shadow-black/15"></div>
          <div className="absolute w-[193px] h-[108px] left-[399px] top-[565px] rotate-[2.7deg] bg-[url('/home5.png')] bg-cover rounded-lg z-20 shadow-lg shadow-black/15"></div>
        </div>
      </header>

      {/* ====================
      OUR MISSION
      ==================== */}
      <div className="flex w-[1440px] justify-center px-[64px] py-[112px]">
        <div className=" flex justify-center items-center gap-[16px] flex-col w-[768px] text-[#11122D] text-center">
          <p className="text-[16px] font-medium leading-6">Our Mission</p>
          <p className="text-[24px] font-normal leading-8">Net Impact UW is a sustainable business club, aiming to <strong className="font-semibold">inspire environmental action</strong> and <strong className="font-semibold">increase awareness</strong> through Education, Activism, & Career Development.</p>
        </div>
      </div>
      
      {/* ====================
      CURRENT INFORMATION
      ==================== */}
      <div className="flex w-[1440px] h-[1276px] items-center px-[64px] py-[112px] gap-[80px] flex-col">
        <div className="flex flex-col items-center gap-[18px] text-[#132515] text-center">
          <h1 className="text-[48px] font-medium leading-[120%]">Current Information</h1>
          <p className="text-[18px] font-normal leading-[150%]">What is Net Impact currently doing?</p>
        </div>
        <div className="flex gap-[32px]">
          <div className="flex flex-col gap-[32px]">
            <div className="w-[640px] h-[629px] p-[48px] rounded-[20px] border-[1px] border-[#2B9575]"></div>
            <div className="flex gap-[32px] h-[340px]">
              <div className="w-[304px] h-[212px] p-[24px] rounded-[20px] border-[1px] border-[#2B9575]"></div>
              <div className="w-[304px] h-[212px] p-[24px] rounded-[20px] border-[1px] border-[#2B9575]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="w-[640px] h-[272px] flex rounded-[20px] border-[1px] border-[#2B9575]"></div>
            <div className="w-[640px] h-[572px] flex flex-col rounded-[20px] border-[1px] border-[#2B9575]"></div>
          </div>
        </div>
      </div>

      {/* ====================
      OUR VALUES
      ==================== */}
      <div className="flex w-[1440px] justify-center px-[64px] py-[112px] gap-[80px] flex-col">
        <div className="flex gap-[16px] flex-col w-[1312px] text-[#11122D]">
          <p className="text-[16px] font-medium leading-6">Our Values</p>
          <p className="text-[36px] font-medium leading-8">Education. Activism. Career Development.</p>
        </div>
        <div className="w-[773px] h-[742px]">
          VENN DIAGRAM HERE
        </div>
        <div className="flex gap-[48px] w-[1312px] h-[410px] text-[#11122D]">
        </div>
      </div>

      {/* ====================
      PAST SPONSORS
      ==================== */}
      <Footer/>
    </main>
  );
}
