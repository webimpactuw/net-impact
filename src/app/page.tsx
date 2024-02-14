import NavBar from "./components/NavBar";

import bg from '../../public/headerimg.jpg';

// TODO: replace manual widths/heights
export default function Home() {
  return (
    <main>
      <NavBar />
      <header className="m-auto">
        <div className='relative m-auto my-5 h-[512px] w-[1193px] bg-center bg-cover rounded-3xl' style={{
          backgroundImage: `url(${bg.src})`,
        }}>
          <div className="absolute top-[184px] left-[57px] w-1/2">
            <h1 className="text-[68px] uppercase text-white">Net Impact UW</h1>
            <h2 className="text-[26px] leading-[30px] text-white">We are a sustainable business club,<br/>open for all undergraduate students</h2>
          </div> 
          <div className="absolute bottom-0 w-full flex gap-[23px] justify-center py-8">
            <div className="bg-neutral-400 w-[883px] h-[38px] rounded-full text-center leading-8 text-white">
              <p>We aim to inspire environmental action and increase awareness through <strong>Education</strong>, <strong>Activism</strong>, & <strong>Career Development</strong>.</p>
            </div>
            <button className="bg-white w-[110px] h-[38px] rounded-full text-center">
              JOIN US
            </button>
          </div>
        </div>
      </header>
      <div>

      </div>
    </main>
  );
}
