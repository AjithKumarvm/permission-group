
export async function GET(request: Request) {
  return new Response(JSON.stringify(["Full access", "No access", "Basic access"]))
}