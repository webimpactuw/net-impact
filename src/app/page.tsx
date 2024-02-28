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

      <div className="flex gap-10 m-16">
        <div className="bg-[#EFEFEF] rounded-lg p-6">
          <h2 className="text-xl uppercase mb-4">Career</h2>
          <p className="font-light">Foster sustainability knowledge and skills through engaging expert speakers and the innovative Sustainability Curriculum Initiative.</p>
        </div>

        <div className="bg-[#EFEFEF] rounded-lg p-6">
          <h2 className="text-xl uppercase mb-4">Career</h2>
          <p className="font-light">Foster sustainability knowledge and skills through engaging expert speakers and the innovative Sustainability Curriculum Initiative.</p>
        </div>

        <div className="bg-[#EFEFEF] rounded-lg p-6">
          <h2 className="text-xl uppercase mb-4">Career</h2>
          <p className="font-light">Foster sustainability knowledge and skills through engaging expert speakers and the innovative Sustainability Curriculum Initiative.</p>
        </div>
      </div>

      <div className="m-20">
        Our Mission 
        <br /><br />
        Net Impact UW is a sustainable business club, aiming to inspire environmental action and increase awareness through Education, Activism, & Career Development.
      </div>

      <div className="bg-gray-100 flex m-20 rounded-3xl">
        <div className="w-1/4 p-8 rounded">
          Weekly Meetings
          <br /><br />
          Wednesdays<br/>
          5:30pm-6:30pm<br/>
          Paccar 297
          <br /><br />
          *Open to all UW Students*
        </div>
        <div className="bg-gray-200 w-1/3 my-12 text-center p-8 italic">
        “Come to create tangible environmental change, connect with like-minded peers, learn more about sustainability and fulfilling career pathways, and get free snacks!”
        </div>
        <div className="w-1/4">
          Image here
        </div>
      </div>

      <Footer/>
    </main>
  );
}
