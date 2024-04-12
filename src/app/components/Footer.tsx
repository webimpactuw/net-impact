import Image from "next/image";
import { FaArrowUp } from 'react-icons/fa';
export default function Footer() {
    return (
        <footer>
            <div>
            <div className="w-[1440px] h-[540px] px-16 py-20 bg-white flex-col justify-start items-center gap-20 inline-flex">
    <div className="self-stretch h-[380px] flex-col justify-start items-start gap-9 flex">
        <div className="self-stretch justify-start items-start gap-[100px] inline-flex">
            <div className="w-[500px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-slate-900 text-lg font-medium font-['General Sans'] leading-[27px]">Join our newsletter</div>
                <div className="self-stretch text-slate-900 text-base font-normal font-['General Sans'] leading-normal">Get connected to know our updates!</div>
            </div>
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="grow shrink basis-0 h-12 p-3 bg-white rounded-lg border border-slate-900 justify-start items-center gap-2 flex">
                        <div className="grow shrink basis-0 text-slate-900 text-base font-normal font-['General Sans'] leading-normal">Enter your email</div>
                    </div>
                    <div className="px-6 py-3 bg-teal-600 rounded-lg justify-center items-center gap-2 flex">
                        <div className="text-white text-base font-normal font-['General Sans'] leading-normal"><a href="" target="_blank">Subscribe</a></div>
                    </div>
                </div>
                <div className="self-stretch"><span className="text-slate-900 text-xs font-normal font-['General Sans'] leading-[18px]">By subscribing you agree to with our <a href="" target="_blank" >Privacy Policy</a></span></div>
            </div>
        </div>
        <div className="self-stretch h-px bg-slate-100" />
        <div className="self-stretch justify-between items-start inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
                <div className="text-slate-900 text-4xl font-semibold font-['General Sans'] leading-[54px]">Net Impact UW</div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start gap-10 flex">
                    <div className="justify-start items-start gap-3 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                    </div>
                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                        <div className="text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]">© 2023 Net Impact. All rights reserved.</div>
                        <div className="justify-start items-start gap-6 flex">
                            <div className="text-slate-900 text-sm font-normal font-['General Sans'] underline leading-[21px]"><a href="" target="_blank" >Privacy Policy</a></div>
                            <div className="text-slate-900 text-sm font-normal font-['General Sans'] underline leading-[21px]"><a href="" target="_blank" >Terms of Service</a></div>
                            <div className="text-slate-900 text-sm font-normal font-['General Sans'] underline leading-[21px]"><a href="" target="_blank" >Cookies Settings</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-start items-start gap-[100px] flex">
                <div className="flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch text-slate-900 text-base font-medium font-['General Sans'] leading-normal">Column One</div>
                    <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link One</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Two</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Three</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Four</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Five</a></div>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch text-slate-900 text-base font-medium font-['General Sans'] leading-normal">Column Two</div>
                    <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Six</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Seven</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Eight</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Nine</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Ten</a></div>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch text-slate-900 text-base font-medium font-['General Sans'] leading-normal">Column Three</div>
                    <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Eleven</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Twelve</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Thirteen</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Fourteen</a></div>
                        </div>
                        <div className="self-stretch py-2 justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" >Link Fifteen</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
        </footer>
    );
}