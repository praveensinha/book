import * as functions from './functions';

export async function GET(req, { params }) {
    var _d = {}
    const { fun } = params
    if (fun) {
        _d = await functions[fun](req)
    }
    return Response.json(_d);
}