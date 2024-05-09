"use client"

import React,{useEffect,useState} from "react";
import { Input } from "../components/ui/Input";
import Navabar from "../components/Navabar";
import { Textarea } from "../components/ui/Textarea";
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
  } from "react-geocode";
  

function page() {

    const [position, setPosition] = useState({ latitude:223, longitude: 23 });

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
          <Textarea  className="w-[31rem]" placeholder="Tasty biriyani"  />
          <Input className="w-[31rem]" placeholder="location" type="textarea" />
          <Input className="w-[31rem]" placeholder="Mobile" type="title" />

        </div>
      </div>
    </div>
  );
}

export default page;
