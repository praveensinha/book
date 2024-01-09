import { jwtVerify, SignJWT } from "jose";
export function getJwtSecretKey() {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
    if (!secret) {
        throw new Error("JWT Secret key is not matched");
    }
    return new TextEncoder().encode(secret);
}

export async function encryptData(data) {
    try {
        return await new SignJWT(data).setProtectedHeader({ alg: "HS256" }).sign(getJwtSecretKey());

    } catch (e) {
        console.log(e)
        return e;
    }
}

export async function verifyJwtToken(token) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey());
        console.log('jose-payload', payload)
        return payload;
    } catch (error) {
        return null;
    }
}