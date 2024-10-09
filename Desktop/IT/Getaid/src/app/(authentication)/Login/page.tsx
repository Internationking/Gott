"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "@/../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>("");
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    //To check if the user is authenticated this displays in the console
    if (auth.currentUser) {
      console.log("User is authenticated:", auth.currentUser);
    } else {
      console.log("No user is authenticated");
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user.emailVerified) {
        //Retrieve user data from local storage
        const registrationData = localStorage.getItem("registrationData");
        const {
          firstName = "",
          lastName = "",
          gender = "",
        } = registrationData ? JSON.parse(registrationData) : {};

        //Check if user data exists in firestore
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
          //Save user data to firestore after email verification
          await setDoc(doc(firestore, "users", user.uid), {
            firstName,
            lastName,
            gender,
            email: user.email,
          });
        }
        router.push("../HospitalList");
      } else {
        setError("Please verify your email before logging in.");
      }
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
      <div className="flex lg:flex-row mt-16 gap-10 sm:flex-col">
        <div className="flex justify-center hidden sm:block mt-8">
          <Image
            src="/login.svg"
            alt="GetAid Logo"
            width={400}
            height={400}
            className="hero-logo"
          />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="getaid mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="block p-2 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      href="/ChangePassword"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    value={password}
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-button-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/Register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
