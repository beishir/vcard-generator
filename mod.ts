
import { defaultResponse } from "./defaultResponse.ts";
import { jsonToCard } from "./jsonToCard.ts";

async function handleRequest(request:Request): Promise<Response> {
  if (request.method !== "POST") return defaultResponse("ERROR: This endpoint only accepts POST requests");
  let postError = "";
  const postJSON = await request.json()
  .catch((error:Error)=>{
    postError = `Couldn't parse JSON ${error.message}`;
    console.error(postError);
  })

  if (postError !== "") { return defaultResponse(`Error: ${postError}`)}

  const card = await jsonToCard(postJSON)
  .catch((error:Error) => { 
    postError = `Couldn't create vCard from JSON ${error.message}` 
    console.error(postError);
  });

  if (!card || postError !== "") { return defaultResponse(`Error: ${postError}`) }

  return new Response(
    card, {
      headers: {
        "content-type": "application/octet-stream",
      },
    }
  );

}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
