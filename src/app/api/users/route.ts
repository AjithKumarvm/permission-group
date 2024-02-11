
export async function GET(request: Request) {
  return new Response(JSON.stringify(
    [
      { "user": "Ben Stockton", "email": "ben@dealsplus.io", "organisation": "Dealsplus"},
      { "user": "Sai Padala", "email": "sai@dealsplus.io", "organisation": "Dealsplus"},
      { "user": "Matt Wallis", "email": "matt@dealsplus.io", "organisation": "Phoneix"},
      ]
  ))
}