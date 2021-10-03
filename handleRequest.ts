import { errorResponse } from "./errorResponse.ts";

import { jsonToCard } from "./jsonToCard.ts";

export async function handleRequest(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return errorResponse(405, "Endpoint only accepts POST method");
  }

  let postError = "";
  const postJSON = await request.json()
    .catch((error: Error) => {
      postError = `Couldn't parse JSON ${error.message}`;
      console.error(postError);
    });

  if (postError !== "") return errorResponse(400, postError);

  const card = await jsonToCard(postJSON)
    .catch((error: Error) => {
      postError = `Couldn't create vCard from JSON ${error.message}`;
      console.error(postError);
    });

  if (!card || postError !== "") {
    return errorResponse(400, `Error: ${postError}`);
  }

  return new Response(card, {
    headers: {
      "content-type": postJSON.contentType ? postJSON.contentType : "application/octet-stream",
    }
  }
);}
