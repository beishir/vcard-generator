export function errorResponse(errorCode?:number, errorText = ""):Response{
  return new Response(`
    <body style="text-align: center; font-family: Avenir, Helvetica, Arial, sans-serif">
      <p style="color:red;">${errorText}</p>
    </body>
  `,
  {
    status: errorCode ? errorCode : 400,
    headers: {
      "content-type": "text/html; charset=UTF-8",
    },
    
  });
}