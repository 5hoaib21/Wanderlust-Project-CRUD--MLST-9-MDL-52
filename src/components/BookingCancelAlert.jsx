"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button, CloseButton } from "@heroui/react";
import toast, { Toaster } from "react-hot-toast";

export function BookingCancelAlert({ bookingId }) {

  const handleCancelBooking = async () => {
    const {data: tokenData} = await authClient.token()
    
    const res = await fetch(`http://localhost:8008/booking/${bookingId}`,{
      method: "DELETE",
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${tokenData?.token}`
      },
      // body: JSON.stringify()
    })
    const data = await res.json()
    toast.error('booking Canceled')
    // console.log(data, 'data');
    window.location.reload()

  }


  return (
    <AlertDialog>
      <CloseButton
        aria-label="Close banner"
        className="absolute top-3 right-3"
      />
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Deny
              </Button>
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
      <Toaster />
    </AlertDialog>
  );
}
