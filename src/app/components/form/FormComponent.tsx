"use client";

import React, { useState } from "react";
import countriesData from "@/app/lib/countries.json";
import { Button } from "../ui/button";
type Form = {
  destination: string;
  duration: string;
  budget: string;
};

const FormComponent = () => {
  const [form, setForm] = useState<Form>({
    destination: "can be any destination",
    duration: "any duration",
    budget: "any buget",
  });

  const handleChange = (
    key: keyof Form,
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div>
        {/* Destination Select */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            What is destination of choice?
          </label>
          <select
            value={form.destination}
            onChange={(e) => handleChange("destination", e)}
            className="w-full px-4 py-3 border border-neutral-300 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a destination...</option>
            {countriesData.countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        {/* Trip Duration Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            How many days are you planning your trip?
          </label>
          <input
            type="text"
            placeholder="Ex.3"
            value={form.duration}
            onChange={(e) => handleChange("duration", e)}
            className="w-full px-4 py-3 border border-neutral-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Budget Selection */}
        {/* <div className="space-y-3">
        <label className="block text-sm font-medium">
          What is Your Budget?
        </label>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={}
            className={`p-4 border rounded-lg text-center transition-colors ${
              budget === "cheap"
                ? "border-blue-500 bg-blue-50"
                : "border-neutral-300 hover:border-blue-500 hover:bg-blue-50"
            }`}
          >
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold text-sm">Cheap</h3>
            <p className="text-xs text-gray-600 mt-1">
              Stay conscious of costs
            </p>
          </button>
          <button
            onClick={}
            className={`p-4 border rounded-lg text-center transition-colors ${
              budget === "moderate"
                ? "border-blue-500 bg-blue-50"
                : "border-neutral-300 hover:border-blue-500 hover:bg-blue-50"
            }`}
          >
            <div className="text-3xl mb-2">💵</div>
            <h3 className="font-semibold text-sm">Moderate</h3>
            <p className="text-xs text-gray-600 mt-1">
              Keep cost on the average side 
            </p>
          </button>
          <button
            onClick={}
            className={`p-4 border rounded-lg text-center transition-colors ${
              budget === "luxury"
                ? "border-blue-500 bg-blue-50"
                : "border-neutral-300 hover:border-blue-500 hover:bg-blue-50"
            }`}
          >
            <div className="text-3xl mb-2">💸</div>
            <h3 className="font-semibold text-sm">Luxury</h3>
            <p className="text-xs text-gray-600 mt-1">Don't worry about cost</p>
          </button>
        </div>
      </div> */}
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;
