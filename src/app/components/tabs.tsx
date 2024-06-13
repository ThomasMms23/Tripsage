import React from 'react';
import { Tabs } from './ui/tabs';
import data from '../../data/dataa.json'; // Assurez-vous que le chemin d'accès est correct

// Définition des types pour les props de TabContent
interface TabContentProps {
  image: string;
  city: string;
  info: {
    main_attractions: string[];
    average_summer_temperature: string;
  };
  priceByType: { [key: string]: number };
  duration: number;
}

export function TabsDemo() {
  const tabs = data.trips.map(trip => ({
    title: trip.country,
    value: trip.city,
    content: (
      <TabContent
        key={trip.city} // Ajout de la clé pour la performance du rendu
        image={trip.img_url}
        city={trip.city}
        info={trip.additional_info}
        priceByType={trip.price_by_type_in_usd}
        duration={trip.recommended_duration_days}
      />
    ),
  }));

  return (
    <div className="h-[20rem] md:h-[30rem] perspective-[1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TabContent: React.FC<TabContentProps> = ({ image, city, info, priceByType, duration }) => {
  return (
    <div className="w-full h-full relative p-6 text-white mb-10" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-0 left-0 right-0 p-4 bg-black bg-opacity-70">
        <h2 className="text-3xl md:text-5xl font-bold text-main-yellow">{city}</h2>
      </div>
      <div className="p-4 bg-black bg-opacity-60 rounded-lg mt-20">
        <h3 className="text-xl font-semibold">Duration & Price:</h3>
        <p>{`Recommended for ${duration} days at an average of $${calculateAveragePrice(priceByType)} per night`}</p>
        <h3 className="text-xl font-semibold mt-4">Main Attractions:</h3>
        <p>{info.main_attractions.join(', ')}</p>
      </div>
    </div>
  );
};

const calculateAveragePrice = (prices: { [key: string]: number }): number => {
  return Object.values(prices).reduce((sum, price) => sum + price, 0) / Object.values(prices).length;
};

export default TabsDemo;
