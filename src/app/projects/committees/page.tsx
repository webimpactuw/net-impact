import Footer from '@/app/components/Footer';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Committees',
}

export default function Committees() {
  return (
    <main>
      <div className="w-[1440px] h-[1849px] bg-slate-100 flex-col justify-start items-start inline-flex">
    <div className="w-[1440px] h-[571px] px-16 py-20 flex-col justify-start items-center gap-20 flex">
        <div className="self-stretch h-[411px] px-[57.78px] py-[101.11px] bg-slate-900 rounded-[40px] flex-col justify-center items-start gap-[72.22px] flex">
            <div className="h-[302.78px] flex-col justify-center items-end gap-[21.67px] flex">
                <div className="self-stretch h-[302.78px] flex-col justify-start items-start gap-[14.44px] flex">
                    <div className="text-center text-green-500 text-sm font-medium font-['General Sans'] leading-snug">Projects</div>
                    <div className="h-[266.33px] flex-col justify-center items-start gap-[21.67px] flex">
                        <div className="self-stretch text-white text-[56px] font-medium font-['General Sans'] leading-[67.20px]">Committees</div>
                        <div className="w-[649px] text-white text-lg font-normal font-['General Sans'] leading-[27px]">Net Impact committees offer any member a chance to get hands-on leadership experience in a field of interest while advancing club sustainability initiatives. Committees meet weekly or biweekly outside of regular Net Impact meetings, and are open to any UW student. *No prior experience is required. </div>
                        <div className="px-6 py-3 bg-teal-600 rounded-lg justify-center items-end gap-2 inline-flex">
                            <div className="text-white text-base font-medium font-['General Sans'] leading-normal">Join our Committees!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1312px] h-[411px] opacity-80 bg-slate-900" />
        </div>
    </div>
    <div className="self-stretch h-[738px] px-[57.82px] py-[101.19px] bg-white flex-col justify-start items-start gap-[72.28px] flex">
        <div className="self-stretch justify-start items-start gap-[114px] inline-flex">
            <div className="flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-slate-900 text-2xl font-medium font-['General Sans'] leading-[33.60px]">Table of contents</div>
                <div className="self-stretch h-[204px] flex-col justify-start items-start flex">
                    <div className="self-stretch px-4 py-3 bg-slate-100 rounded-lg justify-start items-start gap-2 inline-flex">
                        <div className="w-6 h-6 relative origin-top-left rotate-90" />
                        <div className="text-slate-900 text-lg font-semibold font-['General Sans'] leading-[27px]">Overview</div>
                    </div>
                    <div className="self-stretch px-4 py-3 justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-900 text-lg font-normal font-['General Sans'] leading-[27px]">Events</div>
                    </div>
                    <div className="self-stretch px-4 py-3 justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-900 text-lg font-normal font-['General Sans'] leading-[27px]">Education</div>
                    </div>
                    <div className="self-stretch px-4 py-3 justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-900 text-lg font-normal font-['General Sans'] leading-[27px]">Marketing</div>
                    </div>
                </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[58px] pb-4 flex-col justify-start items-start flex">
                    <div className="self-stretch text-slate-900 text-[28px] font-medium font-['General Sans'] leading-[42px]">Events Committee: </div>
                </div>
                <div className="self-stretch h-[88px] pb-4 flex-col justify-start items-start flex">
                    <div className="self-stretch text-slate-900 text-base font-normal font-['General Sans'] leading-normal">The events committee helps organize large and small scale club events, such as speaker panels, career fairs, case competitions, and weekly member meetings. We are looking for students who want to gain experience in event planning, including ideation, budgeting, outreach, promotion, and implementation. </div>
                </div>
                <div className="self-stretch h-[90px] pt-8 pb-4 flex-col justify-start items-start flex">
                    <div className="self-stretch text-slate-900 text-[28px] font-medium font-['General Sans'] leading-[42px]">Marketing Committee: </div>
                </div>
                <div className="self-stretch h-[88px] pb-4 flex-col justify-start items-start flex">
                    <div className="self-stretch text-slate-900 text-base font-normal font-['General Sans'] leading-normal">The marketing committee is responsible for shaping how Net Impact’s sustainability and social responsibility initiatives are communicated to the world. This includes helping with marketing tasks such as creating engaging content that highlights our work, interacting with our online communities, and reaching out to like-minded organizations for potential collaborations to further our mission. </div>
                </div>
                <div className="self-stretch h-[82px] pt-6 pb-4 flex-col justify-start items-start flex">
                    <div className="self-stretch text-slate-900 text-[28px] font-medium font-['General Sans'] leading-[42px]">Education Committee: </div>
                </div>
                <div className="self-stretch h-28 pb-4 flex-col justify-start items-start flex">
                    <div className="self-stretch text-slate-900 text-base font-normal font-['General Sans'] leading-normal">The Education committee focuses on advancing ESG and sustainability initiatives in our academic programs. We are looking for students to help design exciting class concepts and lesson plans. Our team collaborates with Foster Faculty and the UW Administration to explore new educational offerings, such as the sustainability minor, certificate program, or elective courses. Furthermore, you will be helping to promote and boost enrollment in sustainability-focused courses like Fin 490, part of the Sustainability Curriculum project.</div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
    </main>
  );
}
