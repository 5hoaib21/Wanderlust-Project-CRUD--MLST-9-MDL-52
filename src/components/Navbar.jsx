import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between p-5 shadow-xl'>
      <ul className='flex gap-3'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/destinations'}>Destinations</Link></li>
        <li><Link href={'/my-bookings'}>My Bookings</Link></li>
        <li><Link href={'/'}>Home</Link></li>
      </ul>
      <div>
        <Image
         src={'/assets/Wanderlast.png'}
        height={150}
        width={150}
        alt='logo'
         />
      </div>
         <ul className='flex gap-3'>
        <li><Link href={'/profile'}>Profile</Link></li>
        <li><Link href={'/signin'}>Sign in</Link></li>
        <li><Link href={'/signup'}>Sign Up</Link></li>
      
      </ul>
    </nav>
  );
};

export default Navbar;