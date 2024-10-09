import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="hero max-w-5xl">
      <div className="hero-content  md:flex-row md:space-x-8">
        <p className="tagline max-w-5xl lg:pt-32 pt-14 leading-none tracking-tight text-center md:text-left">
          {/* font-oxygen font-bold text-[72px] leading-[1.4] c */}
          Gets You Discover a Medical Assistant around You
        </p>
        <div className="lg:hidden -mt-12">
          <Image
            src="/ambulance.svg"
            alt="GetAid Logo"
            width={500}
            height={-100}
            className="hero-logo"
          />
        </div>
        <div className="hero-content2 mt-16 flex flex-col items-center">
          <p className="description w-full max-w-5xl pt-20 text-center sm:w-3xl md:text-left">
            At GetAid, we believe that access to quality healthcare should be
            simple and stress-free. Our platform helps you quickly find and
            connect with skilled medical assistants in your area, ensuring that
            you receive the care and support you need, right when you need it.
          </p>
          <div>
            <Link href="/redirect">
              <button className="btn flex gap-4  bg-blue-500 text-white font-bold py-4 px-4 mt-6 w-52 rounded-2xl hover:text-black ">
                Get Hospitals List
                <Image
                  src="/arrow-left.svg"
                  alt="GetAid Logo"
                  width={20}
                  height={20}
                  className="hero-logo"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute lg:top-14 lg:right-10 lg:w-400 lg:h-100 hidden md:hidden lg:block">
          <Image
            src="/ambulance.svg"
            alt="GetAid Logo"
            width={500}
            height={-100}
            className="hero-logo"
          />
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16  py-8 px-4">
          <h1 className="why text-3xl lg:text-4xl mb-6">Why Choose GetAid?</h1>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 border-2 border-y-[#407BFF] py-8 px-4">
          <p className="text-lg lg:text-xl text-center lg:text-left ">
            <span className="font-bold text-2xl">
              Trusted Professionals:
            </span>
            <br></br>
            <span className="pt-12 w-full">
              We connect you with certified and reliable medical
              assistants.
            </span>
          </p>
          <div className="w-full max-w-xs lg:max-w-md">
            <Image
              src="/doctors.svg"
              alt="doctors-image"
              width={500}
              height={1000}
              className="mx-auto"
            />
          </div>
        </div>


      </div>

      
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16  py-8 px-4 border-2 border-b-[#407BFF]">
        <div className="w-full max-w-xs lg:max-w-md">
          <Image
            src="/Fast.svg"
            alt="Quick Access"
            width={700}
            height={500}
            className="mx-auto"
          />
        </div>
        <p className="text-lg lg:text-xl text-center lg:text-left">
          <span className="font-bold">Easy Access:</span>
          <br />
          Quickly discover medical assistants nearby with just a few clicks.
          Access our services anytime, anywhere, to get the help you need.
        </p>
      </div>

      <div className="text-center ">
        <div className=" ">
          <Image
            src="/doctors-pana.svg"
            alt="GetAid Logo"
            width={700}
            height={200}
            className="hero-logo mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
