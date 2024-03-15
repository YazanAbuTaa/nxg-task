import { NextResponse } from "next/server";
import { getAllLogs, logUserLogin} from "@/services/user-login-tracking";

export async function GET(req, res) {
    return NextResponse.json(await getAllLogs());
}

export async function POST(req, res) { 
    if(!req.body.userId) {
        return NextResponse.json({ error: 'Missing userId in body' }, { status: 404 });
    }

    const log = await logUserLogin(req.body.userId);
    return NextResponse.json(log);

}