import { NextResponse } from "next/server";
import { getAllUsers, createUser} from "@/services/user-login-tracking";

export async function GET(req, res) {
    return NextResponse.json([]);
    // return NextResponse.json(await getAllUsers());
}

export async function POST(req, res) { 
    if(!req.body.first_name || !req.body.last_name || !req.body.email) {
        return NextResponse.json({ error: 'Missing params in body' }, { status: 404 });
    }

    const newUser = await createUser(req.body.first_name, req.body.last_name, req.body.email);
    return NextResponse.json(newUser);
}