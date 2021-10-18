import { listenAndServe, ServerRequest } from "./deps.ts";
import { handleRequest } from "./handleRequest.ts";


listenAndServe(":8000", (request: ServerRequest)=>{
  return handleRequest(request);
});