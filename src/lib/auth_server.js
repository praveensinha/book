"use server"

import _MongoClientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/libs/auth_server";


export async function doAuth(prevState, formData) {

    let _d
    await _MongoClientPromise.then(async (client) => {
        //console.log(db);

        const user = await client.db('book').collection("user").findOne({ 'email': formData.get('email'), 'password': formData.get('password') });
        const session_obj = {
            create_at: new Date(),
            data: {
                id: user._id,
                email: user.email,
                name: user.name
            }
        }

        // store it in session
        const dbRes = await client.db('book').collection('session').insertOne(session_obj)
        if (dbRes) {

            const token = await new SignJWT({
                username: body.username,
              })
                .setProtectedHeader({ alg: "HS256" })
                .setIssuedAt()
                .setExpirationTime("30s") 
                .sign(getJwtSecretKey());
              const response = NextResponse.json(
                { success: true },
                { status: 200, headers: { "content-type": "application/json" } }
              );
              response.cookies.set({
                name: "token",
                value: token,
                path: "/",
              });

              
            cookies().set("token", dbRes.insertedId, { httpOnly: true })
        }

        _d = { error: false, 'rId': dbRes }
    })
    console.log(formData.get('email'), formData.get('password'), _d);
    redirect(`/a/${Date.now().toString()}`, 'replace');
    return _d
}

export async function logOut() {
    const token = cookies().get('token')?.value
    //console.log('.........', token)
    //cookies().delete('token');
    cookies().set('token', '', { maxAge: 0 })

    if (token) {
        await _MongoClientPromise.then(async (client) => {
            const dbRes = await client.db('book').collection('session').updateOne(
                { _id: new ObjectId(token) },
                { $set: { 'mode': 'logout', 'expire_at': new Date() } },
                { returnNewDocument: false, upsert: false }
            )
        })
    }
    redirect(`/auth`, 'replace');
    return true;
}
export async function checkAuth(){

}
export async function authTokenValidate(token) {
    await _MongoClientPromise.then(async (client) => {
    });
    return {};
}
