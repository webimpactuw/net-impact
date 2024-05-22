import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Past Events',
}

export default function PastEvents() {
  return (
    <div className="w-[1440px] h-[1200px] bg-slate-100 flex-col justify-start items-start inline-flex">
    <div className="h-[272px] px-16 py-20 flex-col justify-start items-center gap-20 flex">
        <div className="h-28 flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[61px] text-center text-slate-900 text-[56px] font-medium font-['General Sans'] leading-[67.20px]">Past Events</div>
            <div className="self-stretch text-center text-cyan-700 text-lg font-normal font-['General Sans'] leading-[3px]">View all of our past events</div>
        </div>
    </div>
    <div className="self-stretch h-[470px] flex-col justify-start items-center gap-16 flex">
        <div className="self-stretch h-[470px] flex-col justify-center items-center gap-12 flex">
            <div className="flex-col justify-start items-start gap-12 flex">
                <div className="w-[1312px] h-[422px] bg-white rounded-[20px] border border-teal-600 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 self-stretch px-[60px] flex-col justify-center items-start inline-flex">
                        <div className="self-stretch h-[322px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[266px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch text-slate-900 text-[32px] font-medium font-['General Sans'] leading-[41.60px]">2024 Sustainability Career Fair</div>
                                <div className="self-stretch text-slate-900 text-base font-normal font-['General Sans'] leading-normal">Student Organizations, ReThink and Net Impact, 
                                are calling attention to sustainability in the Foster School of Business. <br/><br/>This quarter we are hosting a career fair to connect high-potential
                                 students with quality companies. <br/><br/>Our goal with this event is to highlight sustainability-related organizations and provide employment connections
                                  to current job-seekers and prospective future sustainability professionals. </div>
                            </div>
                            <div className="self-stretch justify-start items-center gap-6 inline-flex">
                                <div className="justify-center items-center gap-2 flex">
                                    <div className="w-6 h-6 relative" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-px self-stretch bg-teal-600" />
                    <div className="grow shrink basis-0 h-[422px] flex-col justify-center items-end inline-flex">
                        <img className="self-stretch grow shrink basis-0" src="https://via.placeholder.com/655x422" />
                    </div>
                </div>
                <div className="self-stretch h-[0px] border border-green-500"></div>
            </div>
        </div>
    </div>
    <div className="self-stretch h-[475px] flex-col justify-start items-center gap-16 flex">
        <div className="flex-col justify-start items-start gap-12 flex">
            <div className="flex-col justify-start items-start gap-12 flex">
                <div className="w-[1312px] bg-white rounded-[20px] border border-teal-600 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch px-[60px] flex-col justify-center items-center gap-8 inline-flex">
                        <div className="self-stretch h-[427px] py-[46px] flex-col justify-center items-center gap-8 flex">
                            <div className="self-stretch h-[335px] flex-col justify-center items-center flex">
                                <div className="self-stretch h-[335px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch text-slate-900 text-[32px] font-medium font-['General Sans'] leading-[41.60px]">Global Sustainability Case Competition</div>
                                    <div className="self-stretch text-slate-900 text-lg font-normal font-['General Sans'] leading-[27px]">In 2022, Net Impact partnered with Nasdaq and Wilcox Farms to host the Global Sustainability Case Competition (GSCC). <br/><br/>In the GSCC, student teams worked together to pitch innovative and sustainable solutions for the High Atlas Foundation, a nonprofit in Morocco. <br/><br/>The solutions focused on empowering small organic farmers to make a living sustainably.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-px self-stretch bg-teal-600" />
                    <div className="grow shrink basis-0 self-stretch flex-col justify-center items-end inline-flex">
                        <img className="self-stretch grow shrink basis-0" src="https://via.placeholder.com/655x427" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
