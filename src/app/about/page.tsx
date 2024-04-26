import { Metadata } from 'next'
import NavBar from '../components/NavBar';
import TimeLineBox from '../components/TimeLineBox';
import ValuesBox from '../components/ValuesBox';
import Footer from '../components/Footer';
import Image from 'next/image';
 
export const metadata: Metadata = {
  title: 'About Us',
}

export default function About() {
  return (
    <main>
      {/* ====================
      BACKGROUND VECTOR
      ==================== */}
      <div className="absolute">
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1803" viewBox="0 0 1440 1803" fill="none">
          <path d="M549.151 -142C499.398 -86.2777 307.009 -75.9391 243.501 -39.4996C118.875 32.0068 91.8239 45.8802 -15.9995 139C-24.7031 146.517 -274.166 407.655 -203.499 312.501C-167.109 302.797 -173.701 294.689 -137 284C-203.499 424 462.968 513.995 526.307 195.5C589.646 -122.994 1622.19 235.584 435.5 552C350.969 589.946 354.625 524.487 273.331 569.266C214.084 601.9 156.492 637.822 98.7583 673.05C55.1488 699.659 152.891 680.395 157.138 679.818C379.439 649.629 601.194 609.77 822.432 572.649C952.171 550.881 1080.49 522.646 1209.65 497.912C1246.23 490.907 1287.46 471.673 1315.69 500.451C1353.81 539.299 1373.53 605.246 1375.48 658.949C1379.75 776.299 1228.35 775.47 1144.22 785.014C999.705 801.408 850.102 807.194 710.468 851.289C606.548 884.106 541.525 942.242 477.234 1028.4C414.025 1113.11 366.28 1198.22 407.011 1302.53C419.477 1334.45 447.331 1347.34 476.952 1360.91C525.099 1382.95 574.632 1400.62 624.733 1417.59C684.111 1437.7 737.613 1464.79 793.665 1492.33C872.16 1530.89 955.654 1558.78 1036.49 1591.88C1109.74 1621.88 1181.61 1654.11 1250.83 1692.56C1282.87 1710.37 1311.4 1726.35 1346.15 1736.28" stroke="white" stroke-width="133.326" stroke-linecap="round"/>
        </svg>
      </div>

      {/* ====================
      SPLASH
      ==================== */}
      <NavBar />
      {/* TODO: add responsivity for medium sized screens
      TODO: add responsivity for smaller sized screens */}
      {/* w-[1440px] h-[751px] */}
      <header className="px-16 pb-20 pt-44 box-border flex flex-col gap-20 items-center bg-slate-100 z-10">
        <div className="flex flex-col items-center text-[#11122D] z-10">
          <Image src="/NI+logo.png" width={130} height={130} alt="logo" />
          <h1 className="text-center text-[56px] font-medium leading-[120%]">About Us</h1>
          <p className="text-center text-[#2F8097] text-[18px] font-normal leading-[150%]">Who Are We: Introducing Net Impact</p>
        </div>
        <figure className="w-[90%] h-[700px] bg-[url('/home1.png')] bg-cover bg-center rounded-3xl z-10" />
      </header>

      {/* ====================
      TIMELINE
      ==================== */}
      <section className="px-16 py-28 flex gap-20 items-start text-[#11122D]">
        <div className="w-[200%] flex flex-col gap-4 z-10">
          <p className="text-[16px] font-medium leading-[150%]">Our story</p>
          <h1 className="text-[48px] font-medium leading-[120%]">Net Impact&apos;s Journey</h1>
        </div>
        <div className="flex flex-col gap-4 z-10">
          <TimeLineBox top="Start" header="Who founded Net Impact?" desc="UW Undergraduate Net Impact was founded in 2016 by Jennifer Louie, who's goal was to open a conversation about Corporate Social Responsibility in the Foster School of Business." />
          <TimeLineBox top="" header="What is our impact?" desc="In its short life, our chapter has made an even greater impact than we could have imagined. Hosting dozens of speakers and gaining membership from students all across campus, we are proud of the progress we've made and excited to see how we can keep achieving in the future." />
          <TimeLineBox top="" header="Who are our speakers?" desc="In its short life, our chapter has made an even greater impact than we could have imagined. Hosting dozens of speakers and gaining membership from students all across campus, we are proud of the progress we’ve made and excited to see how we can keep achieving in the future. " />
          <TimeLineBox top="" header="What’s our goal?" desc="Beyond providing professional guidance, our hope is to connect with students and allow them to find a community of like-minded peers who are just as passionate as they are. Our goal is to create an inviting environment where members feel comfortable participating in discussions and getting to know each other. We have begun participating in regular community service events and offering members social opportunities like hikes to allow them to connect on a greater level." />
          <TimeLineBox top="Now" header="Our community" desc="We challenge our members to connect with this community and dare them to ask challenging questions. We strive to redefine success and to push for progress in our careers. We hope to leave an impact on our members, so that they can leave an even greater impact in their careers. " />
        </div>
      </section>

      {/* ====================
      OUR MISSION
      ==================== */}
      <section className="flex justify-center py-60">
        <div className=" flex justify-center items-center gap-4 flex-col w-1/2 text-[#11122D] text-center">
          <p className="text-[16px] font-medium leading-6">Our Mission</p>
          <p className="text-[24px] font-normal leading-8">Net Impact UW is a sustainable business club, aiming to <strong className="font-semibold">inspire environmental action</strong> and <strong className="font-semibold">increase awareness</strong> through Education, Activism, & Career Development.</p>
        </div>
      </section>

      {/* ====================
      OUR VALUES
      ==================== */}
      <section className="flex justify-center px-16 py-28 gap-20 flex-col">
        <div className="flex gap-4 flex-col text-[#11122D]">
          <p className="text-[16px] font-medium leading-6">Our Values</p>
          <p className="text-[36px] font-medium leading-8">Education. Activism. Career Development.</p>
        </div>
        <div className="w-[773px] h-[773px] relative m-auto">
          <figure className="absolute left-[20%] w-[60%] h-[60%] bg-[#2B9575] bg-opacity-45 rounded-full" />
          <figure className="absolute left-[40%] top-[38%] w-[60%] h-[60%] bg-[#5CB5B0] bg-opacity-70 rounded-full" />
          <figure className="absolute top-[38%] w-[60%] h-[60%] bg-[#097E97] bg-opacity-50 rounded-full" />
          <figure className="absolute left-[40%] top-[45%] w-[20%] h-[20%] bg-[url('/NI+logo.png')] bg-cover" />
        </div>
        <div className="flex text-[#11122D] justify-between">
          <ValuesBox img="values1.png" header="Education" desc="Increasing awareness of the climate crisis and climate solutions through member meetings and the Sustainability Curriculum Initiative." />
          <ValuesBox img="values2.png" header="Activism" desc="Driving environmental change on campus through volunteering, philanthropy, and the Net Impact Consultancy." />
          <ValuesBox img="values3.png" header="Career Development" desc="Connecting members with meaningful sustainability career opportunities through speaker meetings, panel events, and the Climate Solutions Summit (CSS)." />
        </div>
      </section>
      <Footer/>
    </main>
  );
}
