"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs } from './ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../../data/dataa.json';

interface TabContentProps {
  image: string;
  city: string;
  id: number;
}

interface Trip {
  id: number;
  city: string;
  img_url: string;
  country: string;
  average_price_per_night: number;
  recommended_duration_days: number;
  price_by_type_in_usd: {
    camping: number;
    airbnb: number;
    hotel: number;
  };
  season: string;
}

export function TabsDemo() {
  const [showForm, setShowForm] = useState(true);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>(data.trips);
  const [filters, setFilters] = useState({
    budget: '',
    type: '',
    duration: '',
    season: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterSubmit = () => {
    const filtered = data.trips.filter(trip => {
      const matchesBudget = filters.budget ? trip.average_price_per_night <= parseFloat(filters.budget) : true;
      const matchesType = filters.type ? trip.price_by_type_in_usd[filters.type] !== undefined : true;
      const matchesDuration = filters.duration ? trip.recommended_duration_days === parseInt(filters.duration) : true;
      const matchesSeason = filters.season ? trip.season.toLowerCase() === filters.season.toLowerCase() : true;
      return matchesBudget && matchesType && matchesDuration && matchesSeason;
    });
    setFilteredTrips(filtered);
    setShowForm(false);
  };

  const resetFilters = () => {
    setFilters({ budget: '', type: '', duration: '', season: '' });
    setFilteredTrips(data.trips);
    setShowForm(true);
  };

  const tabs = filteredTrips.map(trip => ({
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
    <div className="min-h-screen p-6">
      <AnimatePresence>
        {showForm ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Filter Trips</h2>
            <div className="mb-4">
              <label className="block mb-2 text-white">Budget (max price per night)</label>
              <input
                type="number"
                name="budget"
                value={filters.budget}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Type of Accommodation</label>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
              >
                <option value="">Any</option>
                <option value="camping">Camping</option>
                <option value="airbnb">Airbnb</option>
                <option value="hotel">Hotel</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Recommended Duration (days)</label>
              <input
                type="number"
                name="duration"
                value={filters.duration}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Season</label>
              <select
                name="season"
                value={filters.season}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
              >
                <option value="">Any</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
              </select>
            </div>
            <button
              onClick={handleFilterSubmit}
              className="w-full bg-main-yellow text-white py-2 rounded-md"
            >
              Apply Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-[30rem] md:h-[40rem] perspective-[1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20"
          >
            <button
              onClick={resetFilters}
              className="mb-4 bg-main-yellow text-white py-2 px-4 rounded-md"
            >
              Back to Search
            </button>
            <Tabs tabs={tabs} />
          </motion.div>
        )}
      </AnimatePresence>
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
