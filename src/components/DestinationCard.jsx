import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const { _id,destinationName, imageUrl, duration, price, country } = destination;

  return (
    <div className="border border-zinc-400  m-2 ">
      <Image alt={destinationName} src={imageUrl} height={400} width={400}  />
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
          <div className="text-2xl font-bold">$ {price}</div>
        </div>
      </div>
    <Link href={`/destinations/${_id}`}>  <Button className={'m-1 text-cyan-500 flex items-center'} variant="ghost"> Book Now <GoArrowUpRight /></Button></Link>
    </div>
  );
};

export default DestinationCard;
