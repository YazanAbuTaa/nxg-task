import { NextResponse } from "next/server";
import { getAllUsers, createUser } from "@/services/database";

export async function GET(req, res) {
    return NextResponse.json(await getAllUsers());
}

export async function POST(req, res) { 
    const newUser = await createUser();
}