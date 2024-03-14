import { NextResponse } from "next/server";
import { getAllUsers, createUser } from "@/services/database";

export async function GET(req, res) {
    return NextResponse.json(await getAllUsers());
}

export async function POST(req, res) { 
    if(!req.body.firstName || !req.body.lastName || !req.body.email) {
        return NextResponse.json({ error: 'Missing params in body' }, { status: 404 });
    }

    const newUser = await createUser(req.body);

    return NextResponse.json(newUser);
}