"use client";
import React, { useState } from "react";
import Image from "next/image";

interface HospitalCardProps {
  name: string;
  address: string;
  phonenumber: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ name, address, phonenumber }) => {
  const handleOpenGoogleMaps = () => {
    const formattedAddress = address.replace(/\s/g, "+");
    const url = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(url, "_blank");
  };

  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    const textToCopy = `${name}\n${address}\n${phonenumber}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((error) => console.error("Copy failed:", error));
  };

  return (
    <div className="max-w-sm p-4 bg-white flex flex-col justify-between border border-gray-200 bg-gray-100 rounded-lg hover:bg-gray-200">
      <div className="flex justify-end">
        <button className=" hover:bg-white" onClick={handleOpenGoogleMaps}>
          <Image
            className="w-6 h-6 cursor-pointer border"
            src="/location-icon.svg"
            alt="Google Maps"
            width={20}
            height={20}
          />
        </button>
      </div>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
        {name}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {address}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {phonenumber}
      </p>
      <div className="flex">
        <button
          className="inline-flex items-center text-gray-900 hover:text-white btn focus:ring-2 focus:outline-none focus:ring-Secondary font-medium rounded-lg text-sm text-center mr-2 "
          onClick={copyToClipboard}
        >
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
