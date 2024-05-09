"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/Input";
import Navabar from "../components/Navabar";
import { Textarea } from "../components/ui/Textarea";

function Page() { // Renamed to start with an uppercase letter
  const [position, setPosition] = useState({ latitude: 223, longitude: 23 });
  const [location, setLocation]:any = useState();

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${position.latitude}&lon=${position.longitude}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.address.suburb);
        console.log(data.address.suburb);
      })
      .catch((error) => {
        console.error("Error fetching reverse geocode data:", error);
      });
      console.log(location);
      
  }, [position]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(position);
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  return (
    <div>
      <Navabar />
      <div className="p-10">
        <div>
          <h1 className="text-3xl mb-4">Add your food item</h1>
        </div>
        <div className="flex gap-5 flex-col">
          <Input className="w-[31rem]" placeholder="Title" type="title" />
          <Textarea className="w-[31rem]" placeholder="Tasty biriyani" />
          <Input className="w-[31rem]" placeholder="location" type="textarea" />
          <Input className="w-[31rem]" placeholder="Mobile" type="title" />
          {location ? location : ""}
        </div>
      </div>
    </div>
  );
}

export default Page;
