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
    safety_index: string;
    public_transport_index: number;
    recommended_local_food: string[];
  };
}

const TripPage: React.FC = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    if (id) {
      const tripData = data.trips.find((trip) => trip.id === Number(id));
      setTrip(tripData || null);
    }
  }, [id]);

  return (
    <main className="min-h-screen p-6">
      <Button
        className="bg-main-yellow text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 mb-4"
        onClick={() => (window.location.href = "/")}
      >
        ← Back to Home
      </Button>
      {!trip ? (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
          <p className="text-white text-xl">Loading...</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={trip.img_url}
            alt={trip.city}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-4xl font-bold mt-4 mb-2 text-main-yellow">
              {trip.city}
            </h1>
            <p className="text-xl mb-4 text-gray-700">{trip.country}</p>
            <p className="text-lg mb-2">
              <span className="font-bold">Average Price per Night:</span> $
              {trip.average_price_per_night}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">Recommended Duration:</span>{" "}
              {trip.recommended_duration_days} days
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">Season:</span> {trip.season}
            </p>
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-4 text-main-yellow">
                Additional Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-lg">
                  <span className="font-bold">Population:</span>{" "}
                  {trip.additional_info.population.toLocaleString()}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Main Attractions:</span>{" "}
                  {trip.additional_info.main_attractions.join(", ")}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Average Summer Temperature:</span>{" "}
                  {trip.additional_info.average_summer_temperature}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Average Winter Temperature:</span>{" "}
                  {trip.additional_info.average_winter_temperature}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Number of Museums:</span>{" "}
                  {trip.additional_info.number_of_museums}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Official Language:</span>{" "}
                  {Array.isArray(trip.additional_info.official_language)
                    ? trip.additional_info.official_language.join(", ")
                    : trip.additional_info.official_language}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Currency:</span>{" "}
                  {trip.additional_info.currency} (
                  {trip.additional_info.currency_symbol})
                </p>
                <p className="text-lg">
                  <span className="font-bold">Recommended Accommodation:</span>{" "}
                  {trip.additional_info.recommended_accommodation}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Best Visit Period:</span>{" "}
                  {trip.additional_info.best_visit_period}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Postal Code:</span>{" "}
                  {trip.additional_info.postal_code}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Safety Index:</span>{" "}
                  {trip.additional_info.safety_index}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Public Transport Index:</span>{" "}
                  {trip.additional_info.public_transport_index}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Recommended Local Food:</span>{" "}
                  {trip.additional_info.recommended_local_food.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default TripPage;
