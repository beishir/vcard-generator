
import { defaultResponse } from "./defaultResponse.ts";
import { jsonToCard } from "./jsonToCard.ts";
import type { vCard } from "./deps.ts";

/// <reference path="./deployctl.d.ts" />

async function handleRequest(request:Request): Promise<Response> {

  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/json")) {
    if (request.method !== "POST") return defaultResponse("ERROR: This endpoint only accepts POST requests");
    let postError = "";
    const postJSON = await request.json()
    .catch((error:Error)=>{
      console.log("Error parsing JSON!", error.message)
      postError = `Couldn't parse JSON ${error.message}`;
    })
    if (postError !== "") { return defaultResponse(`Error: ${postError}`)}
  
    const card = await jsonToCard(postJSON)
    .catch((error:Error) => { 
      postError = `Couldn't create vCard from JSON ${error.message}` 
    });

    if (!card || postError !== "") { return defaultResponse(`Error: ${postError}`) }

    if (postJSON.callback) {
      const req:RequestInit = {
        method: "POST",
        body: card,
        headers: {
          "content-type":"text-vcard"
        }
      }
      await fetch(postJSON.callback, req)
    }

    return new Response(
      card, {
        headers: {
          "content-type": "text/vcard",
          "hello-hello": "I don't know why you say goodbye.  I say hello"
        },
      }
    );
  }

  if (pathname.startsWith("/example")){

    return new Response(
      await jsonToCard({"firstName": "Bob"}), {
        headers: {
          "content-type": "text/vcard",
          "hello-hello": "I don't know why you say goodbye.  I say hello"
        },
      }
    );

  }

  else return defaultResponse("Error: Unhandled Endpoint")

}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
