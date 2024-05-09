"use client"

import React,{useEffect,useState} from "react";
import { Input } from "../components/ui/Input";
import Navabar from "../components/Navbar";
import { Textarea } from "../components/ui/Textarea";

function Page() {

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
      <div className="p-10 items-center flex flex-col justify-center h-[40rem]">
        <div>
          <h1 className="text-3xl mb-4">Sign Up</h1>
        </div>
        <div className="flex gap-5 flex-col items-center">
          <Input className="w-[31rem]" placeholder="Name" type="Name" />
          <Input className="w-[31rem]" placeholder="Email" type="email" />
          <Input className="w-[31rem]" placeholder="Password" type="password" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
          <text className="text-blue-500">Already have an account? <a href="/signin">Log in</a></text>
        </div>
      </div>
    </div>
  );
}

export default Page;

