
export function defaultResponse(pageError = ""):Response{
  return new Response(`
    <body style="text-align: center; font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 1.5rem;">
      <p style="color:red;">${pageError}</p>
    </body>
  `,
  {
    status: pageError === "" ? 200 : 400,
    headers: {
      "content-type": "text/html; charset=UTF-8",
    },
    
  });
}