import { NextResponse } from "next/server";
import { introduceNewUser } from "@/services/user-login-tracking";

export async function GET(req, res) {

    await introduceNewUser("Test User Name", "", "myemail@mail.com");
    
    return NextResponse.json(["1","2","3"]);

}
