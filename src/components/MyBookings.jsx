import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import { BookingCancelAlert } from "./BookingCancelAlert";

const MyBookings = ({ booking }) => {
  return (
    <Card className="w-full my-5 items-stretch md:flex-row">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
        <Image
          alt={booking.destinationName}
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={booking.imageUrl}
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 font-bold text-2xl">
            {booking.destinationName}
          </Card.Title>
          <Card.Description>Booking Id: {booking._id}</Card.Description>
          <Card.Description>
            {new Date(booking.departureDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Card.Description>
        <BookingCancelAlert bookingId={booking._id} />
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-3xl font-semibold text-cyan-400">
              ${booking.price}
            </span>
            <span>
              <span className="text-xs text-muted"> for</span>{" "}
              <span className="text-md font-semibold"> {booking.userName}</span>
            </span>
          </div>
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default MyBookings;
