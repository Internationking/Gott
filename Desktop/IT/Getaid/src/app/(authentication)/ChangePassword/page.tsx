"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import { auth } from "@/../firebase/firebase";
import Link from "next/link";
// import { EmailAuthProvider } from "firebase/auth/web-extension";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");

  const handlePasswordChange = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (newPassword !== confirmNewPassword) {
      setError("New Password do not match");
      return;
    }

    try {
      const user = auth.currentUser;
      if (user && user.email) {
        const credential = EmailAuthProvider.credential(
          user.email,
          currentPassword
        );
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        setMessage("Password changed successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        setError("No user is currently signed in.");
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
    <div className="flex lg:flex-row gap-10 sm:flex-col">
        <div className="flex justify-center">
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="getaid mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Change Password
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handlePasswordChange} className="space-y-6">
              <div>
                <label
                  htmlFor="currentPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Current Password
                </label>
                  <input
                    id="password"
                    name="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    New Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirmNewPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm New Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="newPassword"
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                    className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {message && <p className="text-red-500 text-sm">{message}</p>}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-button-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Change Password
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
  );
};

export default ChangePassword;