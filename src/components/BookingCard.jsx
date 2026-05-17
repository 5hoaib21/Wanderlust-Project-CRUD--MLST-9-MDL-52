"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);
  const { price, _id, imageUrl, country, destinationName } = destination;

  const handleBookNow = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };
    const res = await fetch("http://localhost:8008/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success('your booking successfully added')
  };

  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm font-light">Starting from</p>
      <h2 className="text-3xl font-bold">$ {price}</h2>
      <p className="text-sm font-light">per person</p>
      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button onClick={handleBookNow} className={"w-full"}>
        Book Now
      </Button>
      <Toaster />
    </Card>
  );
};

export default BookingCard;
