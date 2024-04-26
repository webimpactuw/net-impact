export default function ContactsList() {
    return (
        <div className="flex flex-col w-full h-[375px] justify-around px-16">
            <div className="flex justify-between h-[151px]"> {/** horizontal thing */}
                {/** Instagram*/}
                <div className="flex flex-col justify-between">

                    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.000976562H36C38.2092 0.000976562 40 1.79184 40 4.00098V28.001C40 30.2102 38.2092 32.001 36 32.001H4C1.79086 32.001 0 30.2102 0 28.001V4.00098C0 1.79184 1.79086 0.000976562 4 0.000976562ZM23.3 22.901L36 14.001V9.80098L21.3 20.101C20.5182 20.6436 19.4818 20.6436 18.7 20.101L4 9.80098V14.001L16.7 22.901C18.682 24.2864 21.318 24.2864 23.3 22.901Z" fill="#11122D"/>
                    </svg>

                    <div className="flex flex-col gap-3 mt-10">
                        <h1 className="font-medium text-[32px] text-[#11122D]">Instagram</h1>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className = "underline">https://www.instagram.com/netimpactuw/</a>
                    </div>

                </div>


                {/**Linked in*/}
                <div className="flex flex-col justify-between">

                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.333 0H8.33301C3.91473 0 0.333008 3.58172 0.333008 8V39C0.333008 39.5522 0.780728 40 1.33301 40C1.59725 39.9984 1.84967 39.8902 2.03301 39.7L8.03301 33.7C9.18167 32.5816 10.7301 31.9694 12.333 32H32.333C36.7512 32 40.333 28.4182 40.333 24V8C40.333 3.58172 36.7512 0 32.333 0ZM24.333 21C24.333 21.5522 23.8852 22 23.333 22H9.33301C8.78073 22 8.33301 21.5522 8.33301 21V19C8.33301 18.4478 8.78073 18 9.33301 18H23.333C23.8852 18 24.333 18.4478 24.333 19V21ZM31.333 14C31.8852 14 32.333 13.5523 32.333 13V11C32.333 10.4477 31.8852 10 31.333 10H9.33301C8.78073 10 8.33301 10.4477 8.33301 11V13C8.33301 13.5523 8.78073 14 9.33301 14H31.333Z" fill="#11122D"/>
                    </svg>


                    <div className="flex flex-col gap-3 mt-10">
                        <h1 className="font-medium text-[32px] text-[#11122D]">Linkedin</h1>
                        <a href="https://www.linkedin.com/company/net-impact-uw/" className = "underline">https://www.linkedin.com/company/net-impact-uw/</a>
                    </div>

                </div>


                {/**Slack*/}
                <div className="flex flex-col justify-between">

                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.666 36.0006C25.3586 35.9976 22.1026 35.1802 19.186 33.6206L18.286 33.1206C12.0675 29.7772 6.9694 24.679 3.62602 18.4606L3.12602 17.5606C1.52566 14.6274 0.680277 11.3419 0.666017 8.00054V6.66054C0.665177 5.59446 1.08994 4.57213 1.84602 3.82053L5.22602 0.440535C5.55428 0.109735 6.01764 -0.049705 6.47994 0.00905501C6.94224 0.067815 7.35098 0.338135 7.58602 0.740535L12.086 8.46054C12.5411 9.24632 12.4097 10.2401 11.766 10.8805L7.98602 14.6606C7.6721 14.971 7.59896 15.4506 7.80602 15.8406L8.50602 17.1606C11.0201 21.8174 14.8446 25.635 19.506 28.1406L20.826 28.8606C21.216 29.0676 21.6956 28.9944 22.006 28.6806L25.786 24.9006C26.4264 24.257 27.4202 24.1256 28.206 24.5806L35.926 29.0806C36.3284 29.3156 36.5988 29.7244 36.6574 30.1866C36.7162 30.649 36.5568 31.1124 36.226 31.4406L32.846 34.8206C32.0944 35.5766 31.072 36.0014 30.006 36.0006H28.666Z" fill="#11122D"/>
                    </svg>




                    <div className="flex flex-col gap-3 mt-10">
                        <h1 className="font-medium text-[32px] text-[#11122D]">Slack</h1>
                        <a href="https://www.netimpactuw.slack.com" className = "underline">https://www.netimpactuw.slack.com</a>
                    </div>

                </div>


            </div>


        </div>
    )
}