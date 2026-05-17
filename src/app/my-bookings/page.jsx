import MyBookings from "@/components/MyBookings";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:8008/booking/${user?.id}`);

  const bookings = await res.json();

  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-3xl font-bold my-10">My bookings</h2>
      <div>
        {bookings.map((booking) => {
          return <MyBookings booking={booking} key={booking._id} />;
        })}
      </div>
    </div>
  );
};

export default page;
