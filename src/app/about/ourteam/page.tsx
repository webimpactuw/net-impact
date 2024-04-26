import { Metadata } from 'next'
import TeamPage from '@/app/components/TeamPage';
 
export const metadata: Metadata = {
  title: 'Our Team',
}

export default function OurTeam() {
  return (
    <div className="bg-slate-100">
      <div className="h-[110px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="1036" height="1160" viewBox="0 0 1036 1160" fill="none">
          <path d="M123.474 -410.903C120.323 -341.188 109.968 -263.884 130.086 -195.791C158.109 -100.944 33.3817 -253.702 75.4997 -164.903C108.514 -95.2973 157 68.0967 402.062 240.164C511.533 310.846 622.921 375.335 738.836 434.778C817.272 475.002 901.347 527.863 964.086 590.602C983.944 610.46 998.19 637.329 1013.46 660.69C1041.42 703.476 1065.93 748.362 1087.51 794.694C1117.22 858.477 1131.15 921.933 1131.15 991.954C1131.15 1025.03 1136.46 1061.78 1123.22 1092.68" stroke="white" stroke-width="133.326" stroke-linecap="round"/>
        </svg>
      </div>
      <main className="w-[1440px] px-[64px] py-[112px] flex flex-col gap-[80px] text-[#11122D] bg-white z-10">
        <p className="text-[#2F8097] text-[20px] font-medium leading-[150%]">Our Team</p>
        <h1 className="text-[48px] font-medium leading-[120%]">Introduce the team</h1>
        <div className="flex gap-[60px] flex-wrap">
          <TeamPage img="toliver.png" name="TJ Oliver" role="President" year="Senior" major="Finance" minor="" statement="In joining Net Impact, I found meaning in the business world, and a group of driven peers looking to use their skills to become a positive force in their future careers. Through learning about and experiencing the world of sustainable business first-hand, I want to be part of a new wave of UW students that enters the workforce empowered with a vision of environmental change." linkedin="test" twit="test" instagram="test" />
          <TeamPage img="avaughan.png" name="Ava Vaughan" role="Vice President" year="Sophomore" major="Business Admin & Environmental Studies" minor="Nutritional Sciences" statement="I have always been fascinated with the idea of changing the world for the better. When choosing my career trajectory, I knew I wanted something that would allow me to enact widespread action, while providing my life with meaning. With this criteria in mind, I set off on a path that fused my passion for equity and community with the largest challenge our population has ever faced: the climate crisis. Net Impact has not only allowed me to bridge the gap between my cross-disciplinary education, but has gifted me lifelong friendships, clarity, and the skills to facilitate broad social and environmental action for the public good." linkedin="test" twit="test" instagram="test" />
          <TeamPage img="mmedeiros.png" name="Monet Medeiros" role="Director of Consulting" year="Junior" major="Marketing" minor="" statement="placeholder" linkedin="test" twit="test" instagram="test" />
          <TeamPage img="mpaul.png" name="Mohini Paul" role="Director of Communications" year="Sophomore" major="Marketing & Information Systems" minor="" statement="placeholder" linkedin="test" twit="test" instagram="test" />
          <TeamPage img="ptran.png" name="Phi Tran" role="Director of Fundraising" year="Junior" major="Finance & Information Systems" minor="" statement="placeholder" linkedin="test" twit="test" instagram="test" />
          <TeamPage img="acox.png" name="Aidan Cox" role="Director of Education" year="Junior" major="Environmental Studies and Political Science" minor="Business" statement="placeholder" linkedin="test" twit="test" instagram="test" />
          <TeamPage img="szhang.png" name="Stacy Zhang" role="Director of Marketing" year="Sophomore" major="Finance, Accounting, Information Systems" minor="" statement="placeholder" linkedin="test" twit="test" instagram="test" />
          <TeamPage img="aparsuram.png" name="Arihant Parsuram" role="Director of Events" year="Senior" major="Accounting" minor="" statement="placeholder" linkedin="test" twit="test" instagram="test" />
          <TeamPage img="mwidmann.png" name="Malia Widmann" role="Sustainability Curriculum Lead" year="Sophomore" major="Entrepreneurship and Environmental & Sustainability Studies" minor="" statement="placeholder" linkedin="test" twit="test" instagram="test" />
          <TeamPage img="svangala.png" name="Sai Vangala" role="Sustainability Curriculum Lead" year="Senior" major="Finance, Information Systems" minor="" statement="placeholder" linkedin="test" twit="test" instagram="test" />
          <TeamPage img="gnavarro.png" name="Gabriel Navarro" role="Director of Outreach" year="Senior" major="Marketing, Entrepreneurship" minor="" statement="placeholder" linkedin="test" twit="test" instagram="test" />
        </div>
      </main>
    </div>
  );
}
