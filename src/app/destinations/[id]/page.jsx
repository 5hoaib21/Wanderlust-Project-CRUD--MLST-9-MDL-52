import BookingCard from "@/components/BookingCard";
import { DeleteDialog } from "@/components/DeleteDialog";
import { EditDestinationForm } from "@/components/EditDestinationForm";

import Image from "next/image";
import React from "react";

import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const page = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8008/destination/${id}`);
  const destination = await res.json();
  const {
    _id,
    destinationName,
    imageUrl,
    duration,
    price,
    country,
    description,
  } = destination;

  // console.log(destination, "destination from detailed page");
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex items-center justify-end gap-2 mt-10 mb-5  ">
        <DeleteDialog destination={destination} />
        <EditDestinationForm destination={destination} />
      </div>

      <Image 
      alt={destinationName} 
      src={imageUrl} 
      height={500} 
      width={800}
      />

   <div className="flex justify-between m-5 p-3">
       <div className="p-2">
        <div className="flex items-center gap-1">
          <LuMapPin />
          <span>{country}</span>
        </div>
        <div className="flex justify-between ">
          <div>
            {" "}
            <div>
              <h2 className="text-xl font-bold">{destinationName}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegCalendar />
              {duration}
            </div>
          </div>
        </div>
        <div className="mt-10 text-3xl font-bold">Overview</div>
        <div>{description}</div>
      </div>
      <BookingCard destination={destination}/>
   </div>
    </div>
  );
};

export default page;
