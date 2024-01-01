export const dynamic = 'force-dynamic' // defaults to auto
 
export async function GET(request, { params }) {
  return new Response(JSON.stringify({p:params, d:Date.now()}))
}