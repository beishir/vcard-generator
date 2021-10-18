export function errorResponse(errorCode?:number, errorText = ""):Response{
  return new Response(errorText,
  {
    status: errorCode ? errorCode : 400,
    statusText: errorText,
    headers: {
      "content-type": "text/plain; charset=UTF-8",
    },
    
  });
}