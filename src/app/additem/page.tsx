"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/Input";
// Fixed typo in component import
import { Textarea } from "../components/ui/Textarea";
import geocodeAddress from "../lib/utils";
import FileBase from "react-file-base64";
import Navbar from "../components/Navbar";

function Page() {
  const [postData, setPostData] = useState({
    title: "",
    description: "", // 
    location: "",
    mobile: "", //
    image: "",
  });

  // Renamed to start with an uppercase letter
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    latitude: 0, // Changed default latitude value
    longitude: 0, // Changed default longitude value
  });
  const [error, setError] = useState("");

  const handleAddressSubmit = async (address: any) => {
    // Removed type annotation for address
    try {
      const { latitude, longitude } = await geocodeAddress(address);
      setCoordinates({ latitude, longitude });
      setError("");
      console.log(coordinates);
    } catch (error) {
      setError("Could not find coordinates for the provided address.");
    }
  };

  const handleSaveData = async () => {
    const response = await fetch("/api/postfood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: postData }),
    });

    if (response.ok) {
      alert("Data saved successfully!");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <Navbar /> {/* Fixed component name */}
      <div className="w-[50%] p-6 flex flex-col gap-5">
        <Input
          value={postData.title}
          placeholder="Title of the food"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <Textarea
          value={postData.description}
          placeholder="Description"
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <Input
          value={postData.location}
          placeholder="Location"
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />
        <Input
          value={postData.mobile}
          placeholder="Mobile"
          onChange={(e) => setPostData({ ...postData, mobile: e.target.value })}
        />
        <FileBase
          type="file"
          multiple={false}
          placeholder="Image"
          onDone={({ base64 }: any) =>
            setPostData({ ...postData, image: base64 })
          }
        />
        <button onClick={handleSaveData}>Save Data</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Page;
