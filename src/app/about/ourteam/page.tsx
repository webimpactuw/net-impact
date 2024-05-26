import { Metadata } from 'next'
import TeamPage from '@/app/components/TeamPage';
import { SanityDocument } from "next-sanity";
import { urlFor, sanityFetch } from "@/sanity/client";
import Image from 'next/image';

const TEAM_QUERY = `*[_type == "team"] | order(ordering asc)`;
 
export const metadata: Metadata = {
  title: 'Our Team',
}

export const dynamic = 'force-dynamic';

export default async function OurTeam() {
  const team = await sanityFetch<SanityDocument[]>({query: TEAM_QUERY});

  return (
    <div className="bg-slate-100">
      <div className="h-[110px] overflow-hidden w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="1036" height="1160" viewBox="0 0 1036 1160" fill="none">
          <path d="M123.474 -410.903C120.323 -341.188 109.968 -263.884 130.086 -195.791C158.109 -100.944 33.3817 -253.702 75.4997 -164.903C108.514 -95.2973 157 68.0967 402.062 240.164C511.533 310.846 622.921 375.335 738.836 434.778C817.272 475.002 901.347 527.863 964.086 590.602C983.944 610.46 998.19 637.329 1013.46 660.69C1041.42 703.476 1065.93 748.362 1087.51 794.694C1117.22 858.477 1131.15 921.933 1131.15 991.954C1131.15 1025.03 1136.46 1061.78 1123.22 1092.68" stroke="white" stroke-width="133.326" stroke-linecap="round"/>
        </svg>
      </div> 
      <main className="px-16 py-28 flex flex-col gap-20 text-[#11122D] bg-white z-10">
        <p className="text-[#2F8097] text-[20px] font-medium leading-[150%]">Our Team</p>
        <h1 className="text-[48px] font-medium leading-[120%]">Introduce the team</h1>
        <figure className="m-auto relative overflow-hidden w-[95%] h-[400px] lg:h-[700px] rounded-3xl z-10">
          <Image alt="teamimg" src="/team/teamimg.png" layout="fill" objectFit="cover" />
        </figure>

        <div className="flex md:flex-row flex-col gap-[5%] flex-wrap">
          {
            team.map((member: SanityDocument) => {
              const newUrl = member.photo ? urlFor(member.photo)?.url() : null;
              return <TeamPage img={newUrl ? newUrl : ""} name={member.name} role={member.role} year={member.year} major={member.major} minor={member.minor} statement={member.statement} linkedin={member.linkedin} twit={member.twitter} instagram={member.instagram} key={member.name} />
            })
          }
        </div>
      </main>
    </div>
  );
}
