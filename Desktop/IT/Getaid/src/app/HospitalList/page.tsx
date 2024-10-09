"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  onAuthStateChanged,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { auth, firestore } from "@/../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import MyHospitals from "../Component/Hospitals/Hospitals";
import "./hospitalPage.css";

const HospitalList = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          setUser(user);
          const userDoc = await getDoc(doc(firestore, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserName(`${userData.firstName} ${userData.lastName}`);
          } else {
            console.warn("User document does not exist");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        router.push("/Login");
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/#");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="getaid flex min-h-screen flex-col items-center">
        <div className="flex justify-between w-full space-x-4 mt-mega">
          {userName && (
            <h1 className="justify-start text-xl font-light mt-6">
              Welcome, <span className="italic lg:text-4xl md:text-2xl">{userName}!</span>
            </h1>
          )}
          <button
            onClick={handleLogout}
            className="px-4 bg-red-600 text-white rounded-b-md hover:bg-red-700 py-0"
          >
            Logout
          </button>
        </div>
        <main className="flex flex-col items-center justify-center flex-grow mt-0">
          <MyHospitals />
        </main>
      </section>
    </>
  );
};

export default HospitalList;



// import React from "react";
// import HospitalList from "./HospitalList";

// const Page = () => {
//   // Example providers data; replace this with real data
//   const providers = [
//     { name: "Hospital A", address: "123 Main St", phone_number: "123-456-7890" },
//     { name: "Hospital B", address: "456 Oak St", phone_number: "987-654-3210" },
//   ];

//   return <HospitalList providers={providers} />;
// };

// export default Page;
