import Footer from "./Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <p className="py-80" >Hello World!</p>
      <Footer/>
    </main>
  );
}
