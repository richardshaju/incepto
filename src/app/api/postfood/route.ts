import { dbConnect, disconnect } from "@/app/lib/db";
import food from "@/app/models/food";
import { log } from "console";
import { NextResponse } from "next/server";

export async function POST(req:any) {
   const {name, desp, location, mobile, image} = await req.json();

    try {
        const new_food = await food.create({name, desp, location, mobile, image })
        return NextResponse.json({ message: "Succes" });

    } catch (error) {
        console.log(error);
        
    }
}
