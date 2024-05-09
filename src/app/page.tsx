import Image from "next/image";

import Navabar from "./components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";

export default function Home() {
  const images = [
    "http://2.bp.blogspot.com/_j2QZ9toNguk/TVGJSibjAmI/AAAAAAAADlo/gyTOjzsXjkE/s1600/P1020326.JPG",
    "https://wallpapercave.com/wp/wp3495556.jpg",
    "https://cms.qz.com/wp-content/uploads/2015/08/sadhya_dsw.jpg?quality=75&strip=all&w=410&h=231",
    "https://i.ytimg.com/vi/rhlLQLk6SAQ/maxresdefault.jpg",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Cooked-Mutton-Biryani-in-Pot.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.OUbxmOz4f3UDNPM54ZzQSQHaFj&pid=Api&P=0&h=180",
    "https://2.bp.blogspot.com/-ci1erO_l9To/ViiCS1W1GsI/AAAAAAAAUhI/qNemqLNf2io/s1600/Kerala%2BAdai%2BPayasam.jpg"
  
  ]
  const title = ["Ghee Rice", "Samosa","Meals",   "Kappa and Beef" , "Biriyani" ,"Chappathi", "Payasam"];
  return (
    <div >
      <Navabar />
      <div className={`flex justify-center `}>
        <p className="text-3xl">Food available near you</p>
      </div>
      <div>
        <div className="grid md:grid-cols-3 p-5 gap-y-7 justify-items-center">
          {images.map((data, idx) => (
            <div key={idx} className="card h-[18rem] w-[27rem]  rounded bg-base-100 shadow-xl flex flex-row">
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
