export const dynamic = 'force-dynamic' // defaults to auto

import * as functions from './functions';

export async function GET(req, { params }) {
    let _d
    console.log(params)
    const { fun } = params
    if (fun) {
        _d = await functions[fun](req)
    }
    return Response.json(_d);
}