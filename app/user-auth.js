import { cookies } from "next/headers";

export async function login(email, first_name, last_name) { 
    const expires = new Date(Date.now() + 10 * 1000);
    const session = JSON.stringify({email, first_name, last_name});

    //call api and check here

    cookies.set('session',session, {expires, httpOnly: true});
}