import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  const user = session?.user;


  console.log(user);
  const res = await fetch(`http://localhost:8008/booking/${user?.id}`)


  const data = await res.json()
  console.log(data, 'data')
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-3xl font-bold">My bookings</h2>
    </div>
  );
};

export default page;
