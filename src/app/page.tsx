import Image from "next/image";

import Navabar from "./components/Navabar";
import { FaLocationDot } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";

export default function Home() {
  const images = [
    "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    "https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg",
    "https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg",
    "https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D.jpg",
  ];
  const title = ["Biryani & Chicken curry sf", "burger","Fied Rice",   "Noodles"];
  return (
    <div >
      <Navabar />
      <div className={`flex justify-center `}>
        <p className="text-3xl">Food available near you</p>
      </div>
      <div>
        <div className="grid md:grid-cols-3 p-5 justify-items-center">
          {images.map((data, idx) => (
            <div className="card h-[18rem] w-[27rem]  rounded bg-base-100 shadow-xl flex ">
              <div className="w-[50%] my-5 items-center flex flex-col justify-between">
                <img
                  src={data}
                  alt="Test"
                  className="w-[11rem] h-[11rem] rounded-xl shadow-xl "
                />
                <button className="btn bg-[#ffffff] p-3 rounded-lg">
                  More Details
                </button>
              </div>
              <div className="card-body flex flex-col w-[50%] py-4 ">
                <h2 className="card-title line-clamp-1 font-semibold text-xl">
                  {title[idx]}
                </h2>
                <p></p>
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  Kazakootam, Trivandrum
                </div>
                <div className="flex items-center gap-2">
                  <BsCart2 />
                  Quantity: 4
                </div>
                <div className="flex justify-center ">
                  <button className="btn bg-[#ffffff] mt-7 p-3 w-24 rounded-lg">
                    Book Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
