import { Metadata } from 'next'
import TeamPage from '@/app/components/TeamPage';
import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { BiPhotoAlbum } from 'react-icons/bi';

const TEAM_QUERY = `*[_type == "team"]`;

const { projectId, dataset } = client.config();
function urlFor(source: SanityImageSource) {
  return projectId && dataset ? imageUrlBuilder({ projectId, dataset}).image(source) : null;
}
 
export const metadata: Metadata = {
  title: 'Our Team',
}

export default async function OurTeam() {
  const team = await sanityFetch<SanityDocument[]>({query: TEAM_QUERY});
  const {
    members
  } = team[0];

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
        <div className="flex justify-between flex-wrap">
          {
            members.map((member: { photo: any; name: any; role: any; year: any; major: any; minor: any; description: any; linkedin: any; twitter: any; instagram: any; }) => {
              const {
                photo,
                name,
                role,
                year,
                major,
                minor,
                description,
                linkedin,
                twitter,
                instagram
              } = member;
              const newUrl = photo ? urlFor(photo)?.url() : null;
              return <TeamPage img={newUrl ? newUrl : ""} name={name} role={role} year={year} major={major} minor={minor} statement={description} linkedin={linkedin} twit={twitter} instagram={instagram} key={name} />
            })
          }
        </div>
      </main>
    </div>
  );
}
