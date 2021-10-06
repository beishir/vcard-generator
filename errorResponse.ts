export function errorResponse(errorCode?:number, errorText = ""):Response{
  return new Response(errorText,
  {
    status: errorCode ? errorCode : 400,
    headers: {
      "content-type": "text/html; charset=UTF-8",
    },
    
  });
}