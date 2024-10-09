import React from "react";
import HospitalCard from "../HospitalCard/HospitalCard";

interface Provider {
  name: string;
  address: string;
  phone_number: string;
  // Add other properties based on the API response
}

interface HospitalListProps {
  providers: Provider[];
}

const HospitalList: React.FC<HospitalListProps> = ({ providers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {providers.map((provider: Provider, index) => (
        <HospitalCard
          key={index}
          name={provider.name}
          phonenumber={provider.phone_number}
          address={provider.address}  />
      ))}
    </div>
  );
};

export default HospitalList;
