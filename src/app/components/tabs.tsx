"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs } from "./ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data/data.json";
import { BorderBeam } from "./ui/border-beam";
import { Button } from "./ui/button";

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
  visa_required: boolean;
  activities: string[];
  pets_allowed: boolean;
}

type AccommodationType = "camping" | "airbnb" | "hotel";

export function TabsDemo() {
  const [showForm, setShowForm] = useState(true);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>(data.trips);
  const [filters, setFilters] = useState({
    budget: "",
    type: "",
    season: "",
    visaRequired: "",
    activity: "",
    petsAllowed: "",
  });

  const activitiesOptions = [
    "Hiking",
    "Swimming",
    "Skiing",
    "Sightseeing",
    "Shopping",
    "Cultural tours",
    "Nightlife",
    "Wildlife tours",
    "Beach",
    "Adventure sports",
  ];

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterSubmit = () => {
    const filtered = data.trips.filter((trip) => {
      const matchesBudget = filters.budget
        ? filters.type
          ? trip.price_by_type_in_usd[filters.type as AccommodationType] <=
            parseFloat(filters.budget)
          : trip.average_price_per_night <= parseFloat(filters.budget)
        : true;

      const matchesType = filters.type
        ? trip.price_by_type_in_usd[filters.type as AccommodationType] !==
          undefined
        : true;
      const matchesSeason = filters.season
        ? trip.season.toLowerCase() === filters.season.toLowerCase()
        : true;
      const matchesVisaRequired = filters.visaRequired
        ? trip.visa_required === (filters.visaRequired === "true")
        : true;
      const matchesActivity = filters.activity
        ? trip.activities.includes(filters.activity)
        : true;
      const matchesPetsAllowed = filters.petsAllowed
        ? trip.pets_allowed === (filters.petsAllowed === "true")
        : true;

      return (
        matchesBudget &&
        matchesType &&
        matchesSeason &&
        matchesVisaRequired &&
        matchesActivity &&
        matchesPetsAllowed
      );
    });

    setFilteredTrips(filtered);
    setShowForm(false);
  };

  const resetFilters = () => {
    setFilters({
      budget: "",
      type: "",
      season: "",
      visaRequired: "",
      activity: "",
      petsAllowed: "",
    });
    setFilteredTrips(data.trips);
    setShowForm(true);
  };

  const tabs = filteredTrips.map((trip) => ({
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
    <div id="demo" className="py-24 px-6">
      <AnimatePresence>
        {showForm ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative max-w-5xl mx-auto p-6 border border-gray-600 rounded-lg bg-black"
          >
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              Filter Trips
            </h2>
            <BorderBeam />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative mb-4">
                <label className="block mb-2 text-white">
                  Budget (max price per night)
                </label>
                <input
                  type="number"
                  name="budget"
                  value={filters.budget}
                  onChange={handleFilterChange}
                  className="w-full border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-main-yellow transition-colors"
                />
              </div>
              <div className="relative mb-4">
                <label className="block mb-2 text-white">
                  Type of Accommodation
                </label>
                <select
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="w-full border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-main-yellow transition-colors"
                  style={{ paddingRight: "2rem" }} // Adjust padding to move the icon
                >
                  <option value="">Any</option>
                  <option value="camping">Camping</option>
                  <option value="airbnb">Airbnb</option>
                  <option value="hotel">Hotel</option>
                </select>
              </div>
              <div className="relative mb-4">
                <label className="block mb-2 text-white">Season</label>
                <select
                  name="season"
                  value={filters.season}
                  onChange={handleFilterChange}
                  className="w-full border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-main-yellow transition-colors"
                  style={{ paddingRight: "2rem" }} // Adjust padding to move the icon
                >
                  <option value="">Any</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter">Winter</option>
                </select>
              </div>
              <div className="relative mb-4">
                <label className="block mb-2 text-white">Visa Required</label>
                <select
                  name="visaRequired"
                  value={filters.visaRequired}
                  onChange={handleFilterChange}
                  className="w-full border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-main-yellow transition-colors"
                  style={{ paddingRight: "2rem" }} // Adjust padding to move the icon
                >
                  <option value="">Any</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="relative mb-4">
                <label className="block mb-2 text-white">
                  Activities Available
                </label>
                <select
                  name="activity"
                  value={filters.activity}
                  onChange={handleFilterChange}
                  className="w-full border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-main-yellow transition-colors"
                  style={{ paddingRight: "2rem" }} // Adjust padding to move the icon
                >
                  <option value="">Any</option>
                  {activitiesOptions.map((activity) => (
                    <option key={activity} value={activity}>
                      {activity}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative mb-4">
                <label className="block mb-2 text-white">Pets Allowed</label>
                <select
                  name="petsAllowed"
                  value={filters.petsAllowed}
                  onChange={handleFilterChange}
                  className="w-full border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-main-yellow transition-colors"
                  style={{ paddingRight: "2rem" }} // Adjust padding to move the icon
                >
                  <option value="">Any</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                onClick={handleFilterSubmit}
                className="bg-main-yellow text-white py-2 px-8 rounded-md hover:bg-yellow-600 transition-colors duration-300 cursor-pointer z-50"
              >
                Apply Filters
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={`relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start ${
              filteredTrips.length > 0
                ? "h-[30rem] md:h-[40rem] my-20"
                : "h-64 my-10"
            }`}
          >
            {filteredTrips.length > 0 ? (
              <>
                <Button
                  onClick={() => setShowForm(true)}
                  className="mb-4 bg-main-yellow text-white py-2 px-4 rounded-md"
                >
                  Back to Search
                </Button>
                <Tabs tabs={tabs} />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full text-white">
                <p className="text-2xl mb-4">No trips match your filters.</p>
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-main-yellow text-white py-2 px-4 rounded-md"
                >
                  Reset Filters
                </Button>
              </div>
            )}
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
    <div
      onClick={handleClick}
      className="w-full h-full relative p-6 text-white mb-10 cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 right-0 w-full h-full bg-black bg-opacity-50 transition-all duration-300 hover:bg-opacity-30 flex items-center justify-center">
        <h2 className="text-5xl md:text-7xl font-bold text-main-yellow text-center">
          {city}
        </h2>
      </div>
    </div>
  );
};

export default TabsDemo;
