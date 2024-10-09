"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../../../firebase/firebase";
import Image from "next/image";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);

      localStorage.setItem(
        "registrationData",
        JSON.stringify({
          firstName,
          lastName,
          gender,
          email,
        })
      );

      setMessage(
        "Registration successful! Please check your email for verification also check your Spam incase you don't find it."
      );

      setFirstName("");
      setLastName("");
      setGender("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <>
      {/* <h2 className="text-2xl font-bold text-center justify-center items-center mt-16">
        Register
      </h2> */}
      <div className="flex flex-row mt-16">
        <div className="flex justify-center hidden md:block ">
          <Image
            src="/authentication.svg"
            alt="GetAid Logo"
            width={1200}
            height={1200}
            className="hero-logo"
          />
        </div>
        <div className="justify-center items-center h-screen w-screen flex flex-col h-screen relative z-10">
          <div className="p-5 border-gray-300 rounded">
            <form onSubmit={handleRegister} className="space-y-6 px-6 pb-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium block mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full p-2.5"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium block mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full p-2.5"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="gender"
                  className="text-sm font-medium block mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="border-2 outline-none sm:text-sm rounded-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full p-2.5 placeholder-gray-400"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="text-sm font-medium block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-2 outline-none sm:text-sm rounded-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full p-2.5 placeholder-gray-400"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium block mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full p-2.5 placeholder-gray-400"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium block mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full p-2.5 placeholder-gray-400"
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {message && <p className="text-green-500 text-sm">{message}</p>}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-button-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {" "}
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
