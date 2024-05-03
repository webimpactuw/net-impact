export default function Footer() {
    return (
        <footer>
            <div className="max-w-full h-[571px] px-16 py-20 flex-col justify-start items-center gap-20 inline-flex mt-10">
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
                            <div className="w-[818px] h-[85px] flex-col justify-start items-start gap-10 inline-flex">
                                <div className="justify-start items-start gap-3 inline-flex">
                                <div className="justify-start items-start gap-3 flex">
                                <svg width="96" height="24" viewBox="0 0 96 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <a href="https://www.instagram.com/" target="_blank"><path fill-rule="evenodd" clipRule="evenodd" d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z" fill="#11122D"/></a>
                                    <a href="https://www.linkedin.com/" target="_blank"><path fill-rule="evenodd" clipRule="evenodd" d="M40.5 3.24268C39.6716 3.24268 39 3.91425 39 4.74268V19.7427C39 20.5711 39.6716 21.2427 40.5 21.2427H55.5C56.3284 21.2427 57 20.5711 57 19.7427V4.74268C57 3.91425 56.3284 3.24268 55.5 3.24268H40.5ZM44.5208 7.2454C44.5264 8.20165 43.8106 8.79087 42.9612 8.78665C42.1611 8.78243 41.4636 8.1454 41.4678 7.24681C41.472 6.40165 42.14 5.72243 43.0076 5.74212C43.8879 5.76181 44.5264 6.40728 44.5208 7.2454ZM48.2797 10.0044H45.7597H45.7583V18.5643H48.4217V18.3646C48.4217 17.9847 48.4214 17.6047 48.4211 17.2246C48.4203 16.2108 48.4194 15.1959 48.4246 14.1824C48.426 13.9363 48.4372 13.6804 48.5005 13.4455C48.7381 12.568 49.5271 12.0013 50.4074 12.1406C50.9727 12.2291 51.3467 12.5568 51.5042 13.0898C51.6013 13.423 51.6449 13.7816 51.6491 14.129C51.6605 15.1766 51.6589 16.2242 51.6573 17.2719C51.6567 17.6417 51.6561 18.0117 51.6561 18.3815V18.5629H54.328V18.3576C54.328 17.9056 54.3278 17.4537 54.3275 17.0018C54.327 15.8723 54.3264 14.7428 54.3294 13.6129C54.3308 13.1024 54.276 12.599 54.1508 12.1054C53.9638 11.3713 53.5771 10.7638 52.9485 10.3251C52.5027 10.0129 52.0133 9.81178 51.4663 9.78928C51.404 9.78669 51.3412 9.7833 51.2781 9.77989C50.9984 9.76477 50.7141 9.74941 50.4467 9.80334C49.6817 9.95662 49.0096 10.3068 48.5019 10.9241C48.4429 10.9949 48.3852 11.0668 48.2991 11.1741L48.2797 11.1984V10.0044ZM41.6816 18.5671H44.3324V10.01H41.6816V18.5671Z" fill="#11122D"/></a>
                                    <a href="https://www.youtube.com/" target="_blank"><path d="M93.5933 7.20301C93.4794 6.78041 93.2568 6.39501 92.9477 6.08518C92.6386 5.77534 92.2537 5.55187 91.8313 5.43701C90.2653 5.00701 84.0003 5.00001 84.0003 5.00001C84.0003 5.00001 77.7363 4.99301 76.1693 5.40401C75.7473 5.52415 75.3632 5.75078 75.0539 6.06214C74.7446 6.3735 74.5206 6.75913 74.4033 7.18201C73.9903 8.74801 73.9863 11.996 73.9863 11.996C73.9863 11.996 73.9823 15.26 74.3923 16.81C74.6223 17.667 75.2973 18.344 76.1553 18.575C77.7373 19.005 83.9853 19.012 83.9853 19.012C83.9853 19.012 90.2503 19.019 91.8163 18.609C92.2388 18.4943 92.6241 18.2714 92.934 17.9622C93.2439 17.653 93.4677 17.2682 93.5833 16.846C93.9973 15.281 94.0003 12.034 94.0003 12.034C94.0003 12.034 94.0203 8.76901 93.5933 7.20301ZM81.9963 15.005L82.0013 9.00501L87.2083 12.01L81.9963 15.005Z" fill="#11122D"/></a>
                                </svg>
                                <div className="w-6 h-6 relative" />
                                <div className="w-6 h-6 relative" />
                                </div>
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
        </footer>
    );
}