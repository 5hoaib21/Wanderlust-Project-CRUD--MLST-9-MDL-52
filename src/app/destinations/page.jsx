import DestinationCard from "@/components/DestinationCard";
import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:8008/destination");
  const destinations = await res.json();

  return (
    <div className="w-10/12 mx-auto mt-10 mb-10">
      <h2 className="text-3xl font-bold">All Destinations</h2>

      <div className="grid grid-cols-3 gap-3 ">
        {destinations.map((destination) => {
          return (
            <DestinationCard
              key={destination._id}
              destination={destination}
            ></DestinationCard>
          );
        })}
      </div>
    </div>
  );
};

export default page;
