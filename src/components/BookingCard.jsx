'use client'
import { Button, Card, DateField, Label } from '@heroui/react';
import React from 'react';

const BookingCard = ({destination}) => {
  const {price} = destination;
  return (
    <Card className='rounded-none border mt-5'>
     <p className='text-sm font-light'>Starting from</p>
     <h2 className='text-3xl font-bold'>$ {price}</h2>
     <p className='text-sm font-light'>per person</p>
     <DateField className="w-[256px]" name="date">
      <Label>Departure Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
    <Button className={'w-full'}>Book Now</Button>
    </Card>
  );
};

export default BookingCard;