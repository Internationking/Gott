import Image from "next/image";
import Header from "./Component/Header/page";
import HeroSection from "./heropage/page";
import Footer from "./Component/Footer/page";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      
      <HeroSection />

      {/* <HospitalList /> */}

      <Footer />

      
    </main>
  );
}
