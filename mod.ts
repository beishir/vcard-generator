import {defaultResponse} from "./defaultResponse.ts";

/*
/// <reference path="./deployctl.d.ts" />
*/

async function handleRequest(request:Request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/json")) {
    if (request.method !== "POST") return defaultResponse("ERROR: This endpoint only accepts POST requests");
    const postJSON = await request.json()
    .catch((error)=>{
      return defaultResponse(`ERROR: Couldn't parse JSON ${error}`);
    });
    console.log(postJSON);

    const vcfResponse = "";


    return new Response(
      vcfResponse, {
        headers: {
          "content-type": "text/html; charset=UTF-8",
        },
      }
    );
  }

  return defaultResponse();
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
