import Footer from "./Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <header className="w-[1440px] h-[751px] px-[64px] flex gap-[64px] items-center bg-slate-100">
        <div className="w-[664px] h-[377px] flex gap-[64px] flex-col">
          <div className="h-[105px]">
            <h1 className="font-semibold text-[41px] leading-[110%]">Let's create a more</h1>
            <h1 className="font-bold text-[53.679px] leading-[110%] uppercase text-[#2B9575]">Sustainable Future</h1>
          </div>
          <div className="w-[615px] h-[93px]">
            <p className="text-[#11122D] text-[23px] font-medium">We are <strong className="text-[#2B9575] font-semibold">Net Impact UW</strong> and we aim to inspire environmental action and increase awareness through <strong className="text-[#2B9575] font-semibold">Education, Activism, & Career Development.</strong></p>
          </div>
          <div className="w-[615px] h-[51px] flex gap-[23px]">
            <div className="w-[472px] h-[51px] py-[12px] px-[24px] bg-white border-[1px] border-[#2B9575] rounded-full text-[18px] font-medium opacity-50">
              Join our team by adding your email...
            </div>
            <div className="w-[120px] h-[51px] flex bg-[#2B9575] uppercase rounded-full justify-center items-center">
              <p className="text-[18px] font-medium text-white">Join Us</p>
            </div>
          </div>
        </div>
        <div>
        </div>
      </header>
      {/* TODO: New splash homepage
      TODO: "Our Mission"
      TODO: Current Information 
      TODO: "Our Values"
      TODO: Past Sponsors */}
      <Footer/>
    </main>
  );
}
