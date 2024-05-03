import Footer from '@/app/components/Footer';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Consulting',
}

export default function Consulting() {
  return (
    <main>
      <div className="w-[1440px] h-[1368px] bg-slate-100 flex-col justify-start items-start inline-flex">
    <div className="h-[571px] px-16 py-20 flex-col justify-start items-center gap-20 flex">
        <div className="self-stretch h-[411px] px-[57.78px] py-[101.11px] bg-slate-900 rounded-[40px] flex-col justify-center items-start gap-[72.22px] flex">
            <div className="h-[233.11px] flex-col justify-start items-start gap-[21.67px] flex">
                <div className="self-stretch h-[233.11px] flex-col justify-start items-start gap-[14.44px] flex">
                    <div className="text-center text-green-500 text-sm font-medium font-['General Sans'] leading-snug">Projects</div>
                    <div className="self-stretch h-[196.67px] flex-col justify-start items-start gap-[21.67px] flex">
                        <div className="self-stretch text-white text-[56px] font-medium font-['General Sans'] leading-[67.20px]">Consulting</div>
                        <div className="self-stretch text-white text-lg font-normal font-['General Sans'] leading-[27px]">The Net Impact Consultancy (NIC) is the premiere sustainability and social impact consulting firm at the Michael G. Foster School of Business. We focus on empowering clients to achieve their ESG goals and create a positive impact on society through their business practices.</div>
                    </div>
                </div>
            </div>
            <div className="w-[1312px] h-[411px] opacity-80 bg-slate-900" />
        </div>
    </div>
    <div className="self-stretch h-[257px] px-[57.82px] py-[101.19px] bg-white flex-col justify-start items-start gap-[72.28px] flex">
        <div className="self-stretch pt-[3px] justify-start items-start gap-[72.28px] inline-flex">
            <div className="w-[528px] flex-col justify-start items-start gap-[14.46px] inline-flex">
                <div className="self-stretch text-slate-900 text-[43.37px] font-medium font-['General Sans'] leading-[52.04px]">Coming soon..</div>
            </div>
            <div className="w-[522px] h-[52px] text-slate-900 text-base font-normal font-['General Sans'] leading-normal">Stay tuned for more information on NIC and how to get involved in the next application cycle!</div>
        </div>
    </div>
    <Footer />
</div>
    </main>
  );
}
