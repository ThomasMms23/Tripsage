"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Tabs } from './ui/tabs';
import data from '../../data/dataa.json';

interface TabContentProps {
  image: string;
  city: string;
  id: number;
}

export function TabsDemo() {
  const tabs = data.trips.map(trip => ({
    id: trip.id,
    value: trip.city,
    content: (
      <TabContent
        key={trip.id}
        image={trip.img_url}
        city={trip.city}
        id={trip.id}
      />
    ),
  }));

  return (
    <div className="h-[30rem] md:h-[40rem] perspective-[1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TabContent: React.FC<TabContentProps> = ({ image, city, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${id}`);
  };

  return (
    <div onClick={handleClick} className="w-full h-full relative p-6 text-white mb-10 cursor-pointer" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-0 left-0 right-0 w-full h-full bg-black bg-opacity-50 transition-all duration-300 hover:bg-opacity-30 flex items-center justify-center">
        <h2 className="text-5xl md:text-7xl font-bold text-main-yellow text-center">{city}</h2>
      </div>
    </div>
  );
};

export default TabsDemo;
