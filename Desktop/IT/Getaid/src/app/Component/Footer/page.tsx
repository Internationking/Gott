import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <section className="bg-footer-color w-full h-full items-center justify-between px-12">
        <Image
          src="/ourLogo.svg"
          className="mt-4"
          width={50}
          height={50}
          alt="Company_logo"
        />
        <div className="grid text-center mt-8 gap-4 lg:mb-0 lg:w-full lg:grid-cols-3 lg:text-left ">
          <div className="text-center">
              <p className="getaid text-3xl">Our Services </p>            
              <ul className="list-inside">
              <ol>Locate Medical Assistants in Your Area</ol>
              <ol>Export Hospital lists</ol>
              <ol> Verified and Trusted Medical Professionals</ol>
              <ol>24/7 Customer Support for Your Healthcare Needs</ol>
            </ul>
          </div>
          <div className="text-center">
            <p className="getaid text-3xl">Quick Access</p>
            <div className="w-full items-center justify-center">
              <Link href="/Login" className="hover:underline">
                <p >Login</p>
              </Link>
              <Link href="/Register" className="hover:underline">
                <p >Sign Up</p>
              </Link>
              <Link href="/HospitalList" className="hover:underline">
                <p >Hospitals List</p>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <div className=" text-center">
              <p className="getaid text-3xl">Contact</p>
              <div className="flex gap-2">
                <Image
                  src="/location-icon.svg"
                  width={20}
                  height={20}
                  alt="location_logo"
                />
                <p>Crescent Avenue Odumodu Estate Awka</p>
              </div>
              <div className="flex gap-2 ">
                <Image
                  src="/phone.svg"
                  width={20}
                  height={20}
                  alt="phone_icon"
                />
                <p>+2348137563250, +2348144421282</p>
              </div>
              <div className="flex gap-2 ">
                <Image
                  src="/email-icon.svg"
                  width={20}
                  height={20}
                  alt="phone_icon"
                />
                <p>kenechukwumartin4@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-xs text-center">
        <p>Created with <span className="text-[#ff0000]">❤</span>. &copy; <span id="current-year">{year}</span> Kennymartin. All rights reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
