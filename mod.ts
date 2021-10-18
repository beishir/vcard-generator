import { listenAndServe } from "./deps.ts";
import { handleRequest } from "./handleRequest.ts";


listenAndServe(":8000", (request: Request)=>{
  return handleRequest(request);
});