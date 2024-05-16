import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Climate Summit'
}

export default function ClimateSummit() {
return(
<div className="w-[1440px] h-[3980px] relative bg-slate-100">
        <div className="w-[1440px] px-[336px] py-20 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-6 inline-flex">
                <div className="self-stretch text-center text-slate-900 text-[56px] font-medium font-['General Sans'] leading-[67.20px]">Climate Solutions Summit</div>
                <div className="w-[863px] text-center text-cyan-700 text-xl font-normal font-['General Sans'] leading-[30px]">REOCCURRING SPRING EVENT</div>
            </div>
        </div>
        <div className="w-[1440px] h-[84px] relative">
            <div className="w-[1440px] h-[84px] left-0 top-0 absolute bg-green-100 border-t border-b border-green-600" />
            <div className="left-[310px] top-[26px] absolute"><span className="text-slate-900 text-[22px] font-medium font-['General Sans'] leading-[33px]">UPCOMING: </span><span className="text-slate-900 text-[22px] font-semibold font-['General Sans'] leading-[33px]">THE CLIMATE SOLUTIONS SUMMIT WILL RETURN NEXT SPRING</span></div>
        </div>
        <div className="w-[1440px] h-[877px] relative bg-white">
            <div className="h-[625.11px] left-[64px] top-[180.94px] absolute flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch h-[625.11px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch"><span className="text-teal-600 text-lg font-medium font-['General Sans'] leading-[27px]">SPRING 2023<br/></span><span className="text-slate-900 text-[38px] font-medium font-['General Sans'] leading-[57px]">Event Summary<br/></span><span className="text-slate-900 text-lg font-normal font-['General Sans'] leading-[27px]"> <br/>Last year, a coalition of sustainability and business organizations launched the first Climate Solutions Summit. The event explored scaling and implementing clean energy technology in the wake of the Inflation Reduction Act.<br/><br/>The centerpiece of the summit was a cross-disciplinary conference that connected over 150 enthusiastic students with clean energy professionals. The conference featured a keynote speech from Governor Jay Inslee and dynamic panel discussions focused on Disruptive Innovation, Scaling Adoption, and Workforce Development.<br/><br/>The second element was a residential decarbonization case competition. 16 student teams learned about the IRA and proposed solutions to increase the speed and scale of decarbonization projects. Teams presented their ideas to expert judges and the top teams competed in a final round for cash prizes.</span></div>
                    <div className="pt-[14.44px] justify-start items-start gap-[14.44px] inline-flex">
                        <div className="px-[21.67px] py-[10.83px] bg-slate-100 rounded-lg border border-teal-600 justify-center items-center gap-[7.22px] flex">
                            <div className="text-slate-900 text-sm font-medium font-['General Sans'] leading-snug">Case Competition</div>
                        </div>
                        <div className="px-[21.67px] py-[10.83px] bg-slate-100 rounded-lg border border-teal-600 justify-center items-center gap-[7.22px] flex">
                            <div className="text-slate-900 text-sm font-medium font-['General Sans'] leading-snug">Convention</div>
                        </div>
                        <div className="px-[21.67px] py-[10.83px] bg-slate-100 rounded-lg border border-teal-600 justify-center items-center gap-[7.22px] flex">
                            <div className="text-slate-900 text-sm font-medium font-['General Sans'] leading-snug">Promo Video</div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="w-[616px] h-[640px] left-[760px] top-[142px] absolute rounded-[20px]" src="https://via.placeholder.com/616x640" />
        </div>
        <div className="w-[1440px] h-[735px] px-16 py-[100px] bg-white justify-start items-center gap-20 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch h-[587.45px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-center text-slate-900 text-5xl font-medium font-['General Sans'] leading-[72px]">Past Summits</div>
                    <div className="w-[1312px] h-[467.45px] relative">
                        <div className="left-[470px] top-[429.45px] absolute text-center text-slate-900 text-[25px] font-medium font-['General Sans'] leading-[37.50px]">2022 Climate Solutions Summit</div>
                        <div className="w-[1312px] h-[363px] left-0 top-[26.89px] absolute bg-black/opacity-40 rounded-[20px] shadow border border-indigo-500" />
                        <img className="w-[980px] h-[416px] left-[146px] top-0 absolute rounded-[20px] shadow" src="https://via.placeholder.com/980x416" />
                        <div className="left-[1243px] top-[170px] absolute text-center text-white/opacity-90 text-[50px] font-bold font-['General Sans'] leading-[75px]"></div>
                        <div className="left-[43px] top-[170px] absolute text-center text-white/opacity-90 text-[50px] font-bold font-['General Sans'] leading-[75px]"></div>
                    </div>
                    <div className="w-[1312px] h-[0px] px-[50px] justify-center items-center gap-[5px] inline-flex">
                        <div className="w-2 h-2 bg-neutral-400 rounded-full" />
                        <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                        <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[1361px] px-16 py-28 bg-white flex-col justify-start items-center gap-20 flex">
            <div className="h-[109px] flex-col justify-start items-center gap-6 flex">
                <div className="self-stretch text-center text-slate-900 text-5xl font-medium font-['General Sans'] leading-[57.60px]">Image Gallery</div>
                <div className="self-stretch text-center text-cyan-700 text-lg font-normal font-['General Sans'] leading-[27px]">See more about what we did in the 2023 Summit</div>
            </div>
            <div className="w-[1312px] justify-start items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                    <img className="w-[416px] h-[416px] rounded-[20px]" src="https://via.placeholder.com/416x416" />
                    <img className="w-[416px] h-[416px] rounded-[20px]" src="https://via.placeholder.com/416x416" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                    <img className="w-[416px] h-[234px] rounded-[20px]" src="https://via.placeholder.com/416x234" />
                    <img className="w-[416px] h-[234px] rounded-[20px]" src="https://via.placeholder.com/416x234" />
                    <img className="w-[416px] h-[416px] rounded-[20px]" src="https://via.placeholder.com/416x416" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                    <img className="w-[416px] h-[416px] rounded-[20px]" src="https://via.placeholder.com/416x416" />
                    <img className="w-[416px] h-[416px] rounded-[20px]" src="https://via.placeholder.com/416x416" />
                </div>
            </div>
        </div>
     </div>
)
}