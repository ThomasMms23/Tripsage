"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "../../data/data.json";
import { Button } from "../components/ui/button";

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
  additional_info: {
    population: number;
    main_attractions: string[];
    average_summer_temperature: string;
    average_winter_temperature: string;
    number_of_museums: number;
    official_language: string | string[];
    currency: string;
    currency_symbol: string;
    recommended_accommodation: string;
    best_visit_period: string;
    postal_code: string;
    safety_index: number;
    public_transport_index: number;
    recommended_local_food: string[];
  };
}

const TripPage: React.FC = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    if (id) {
      const tripData = data.trips.find((trip) => trip.id === Number(id)) as Trip;
      setTrip(tripData || null);
    }
  }, [id]);

  return (
    <main className="relative min-h-screen p-6 bg-cover bg-center" style={{ backgroundImage: `url(${trip?.img_url})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex justify-between items-center mb-8">
        <Button
          className="bg-main-yellow text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
          onClick={() => (window.location.href = "/")}
        >
          ← Back to Home
        </Button>
        <h1 className="text-5xl font-bold text-white">{trip?.city}</h1>
      </div>
      {!trip ? (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
          <p className="text-white text-xl">Loading...</p>
        </div>
      ) : (
        <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-main-yellow mb-4">Basic Information</h2>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Country:</span> {trip.country}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Average Price per Night:</span> ${trip.average_price_per_night}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Recommended Duration:</span> {trip.recommended_duration_days} days</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Season:</span> {trip.season}</p>
          </div>
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-main-yellow mb-4">Additional Information</h2>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Population:</span> {trip.additional_info.population.toLocaleString()}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Main Attractions:</span> {trip.additional_info.main_attractions.join(", ")}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Average Summer Temperature:</span> {trip.additional_info.average_summer_temperature}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Average Winter Temperature:</span> {trip.additional_info.average_winter_temperature}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Number of Museums:</span> {trip.additional_info.number_of_museums}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Official Language:</span> {Array.isArray(trip.additional_info.official_language) ? trip.additional_info.official_language.join(", ") : trip.additional_info.official_language}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Currency:</span> {trip.additional_info.currency} ({trip.additional_info.currency_symbol})</p>
          </div>
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-main-yellow mb-4">Visit Information</h2>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Recommended Accommodation:</span> {trip.additional_info.recommended_accommodation}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Best Visit Period:</span> {trip.additional_info.best_visit_period}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Postal Code:</span> {trip.additional_info.postal_code}</p>
            <p className="text-lg text-white mb-2"><span className="font-semibold text-main-yellow">Recommended Local Food:</span> {trip.additional_info.recommended_local_food.join(", ")}</p>
          </div>
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-main-yellow mb-4">Safety and Transport</h2>
            <div className="mb-4">
              <p className="text-lg text-white"><span className="font-semibold text-main-yellow">Safety Index:</span> {trip.additional_info.safety_index}/100</p>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div className="bg-main-yellow h-4 rounded-full" style={{ width: `${trip.additional_info.safety_index}%` }}></div>
              </div>
            </div>
            <div>
              <p className="text-lg text-white"><span className="font-semibold text-main-yellow">Public Transport Index:</span> {trip.additional_info.public_transport_index}/10</p>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div className="bg-main-yellow h-4 rounded-full" style={{ width: `${trip.additional_info.public_transport_index * 10}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default TripPage;
