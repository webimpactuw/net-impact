import FooterNewsletter from "./Newsletter"
export default function Footer() {
    return (
        <footer>
            <div className="w-full h-[571px] relative px-16 py-20 flex-col justify-start items-center gap-20 inline-flex mt-10">
                <div className="self-stretch h-[380px] flex-col justify-start items-start gap-9 flex">
                    <div className="self-stretch justify-start items-start gap-[100px] flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/3 flex-col justify-start items-start inline-flex">
                            <div className="self-stretch text-slate-900 text-lg font-medium font-['General Sans'] leading-[27px]">Join our newsletter</div>
                            <div className="self-stretch text-slate-900 text-base font-normal font-['General Sans'] leading-normal">Get connected to know our updates!</div>
                        </div>
                        <div className=" w-full sm:w-2/3 grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch justify-end items-end gap-4 inline-flex">
                                  
                                   
                                       
                                <div className= "w-[80%] items-end gap-4">
                                    <FooterNewsletter></FooterNewsletter>
                                </div>
                                        
                                        
                          
                            </div>
                           
                        </div>
                    </div>
                    <div className="self-stretch h-px bg-slate-100" />
                    <div className="self-stretch justify-between gap-20 lg:gap-0 items-start flex flex-col lg:flex-row">
                        <div className="grow shrink basis-0 self-stretch justify-start items-start inline-flex w-full lg:w-1/2">
                            <div className="w-[818px] grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
                                <div className="text-slate-900 text-4xl font-semibold font-['General Sans'] leading-[54px]"><a href="https://www.uwnetimpact.org/" className="hover:underline active:text-slate-400">Net Impact UW</a></div>
                                <div className="w-full h-[85px] flex-col justify-start items-start gap-10 inline-flex">
                                    <div className="w-24 h-6 justify-start items-start gap-3 inline-flex">
                                        <div className="w-6 h-6 relative">
                                            <a href="https://www.instagram.com/netimpactuw/" target="_blank">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Icon / Instagram">
                                                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z" fill="#11122D"/>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="w-6 h-6 relative">
                                            <a href="https://www.linkedin.com/company/net-impact-uw" target="_blank">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Icon / LinkedIn">
                                                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z" fill="#11122D"/>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="w-6 h-6 relative">
                                            <a href="https://www.youtube.com/@netimpactvideos" target="_blank">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Icon / Youtube">
                                                    <path id="Vector" d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005Z" fill="#11122D"/>
                                                </g>
                                            </svg>

                                            </a>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-start gap-3 flex flex-wrap flex-col lg:flex-row">
                                        <div className="text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]">© 2023 Net Impact. All rights reserved.</div>
                                        <div className="justify-start items-start gap-6 flex">
                                            <div className="text-slate-900 text-sm font-normal font-['General Sans'] underline leading-[21px] hover:no-underline active:text-slate-400"><a href="" target="_blank" >Privacy Policy</a></div>
                                            <div className="text-slate-900 text-sm font-normal font-['General Sans'] underline leading-[21px] hover:no-underline active:text-slate-400"><a href="" target="_blank" >Terms of Service</a></div>
                                            <div className="text-slate-900 text-sm font-normal font-['General Sans'] underline leading-[21px] hover:no-underline active:text-slate-400"><a href="" target="_blank" >Cookies Settings</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:justify-end justify-start items-start gap-[15%] flex w-full lg:w-1/2">
                            <div className="flex-col justify-start items-start gap-4 inline-flex">
                                <div className="self-stretch text-slate-900 text-base font-medium font-['General Sans'] leading-normal">Column One</div>
                                <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link One</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Two</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Three</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Four</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Five</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-4 inline-flex">
                                <div className="self-stretch text-slate-900 text-base font-medium font-['General Sans'] leading-normal">Column Two</div>
                                <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Six</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Seven</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Eight</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Nine</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Ten</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-4 inline-flex">
                                <div className="self-stretch text-slate-900 text-base font-medium font-['General Sans'] leading-normal">Column Three</div>
                                <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Eleven</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Twelve</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Thirteen</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Fourteen</a></div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-slate-900 text-sm font-normal font-['General Sans'] leading-[21px]"><a href="" target="_blank" className="hover:underline active:text-slate-400" >Link Fifteen</a></div>
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