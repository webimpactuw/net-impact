import Footer from "./Footer";
import NavBar from "./components/NavBar";

import bg from '../../public/headerimg.jpg';

export default function Home() {
  return (
    <main>
      <NavBar />
      <header className="m-auto">
        <div className='relative m-auto my-5 h-[512px] w-11/12 bg-center bg-cover rounded-3xl bg-opacity-30' style={{
          backgroundImage: `url(${bg.src})`
        }}>
          <div className="absolute top-[36%] left-14 w-1/2">
            <h1 className="text-6xl uppercase text-white font-[900]">Net Impact UW</h1>
            <h2 className="text-2xl text-white">We are a sustainable business club,<br/>open for all undergraduate students</h2>
          </div> 
          <div className="absolute bottom-0 w-full flex gap-6 justify-center py-8">
            <div className="bg-neutral-400 w-3/4 h-10 rounded-full text-center leading-8 text-white font-[400]">
              <p>We aim to inspire environmental action and increase awareness through <strong>Education</strong>, <strong>Activism</strong>, & <strong>Career Development</strong>.</p>
            </div>
            <button className="bg-white w-1/12 h-10 rounded-full text-center">
              JOIN US
            </button>
          </div>
        </div>
      </header>
      <div>

      </div>
      <Footer/>
    </main>
  );
}
