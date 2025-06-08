import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = 
      `<html>
      <!DOCTYPE html>
      <html lang="zh">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>我的自我介紹</title>
      </head>
      <body>
         <h1>我的自我介紹</h1>
         <ol>
            <li><a href="/name">姓名</a></li>
            <li><a href="/age">年齡</a></li>
            <li><a href="/gender">性別</a></li>
            <li><a href="/hobbie">興趣</a></li>
            <li><a href="/school">就讀大學</a></li>
            <li><a href="/ID">學號</a></li>
         </ol>
      </body>
      </html>`
 } else if (pathname == '/name') {
    ctx.response.body = '簡怡靜'
 } else if (pathname == '/age') {
    ctx.response.body = '18歲' 
 }else if (pathname == '/gender') {
    ctx.response.body = 'female'
 } else if (pathname == '/hobbie') {
    ctx.response.body = '打籃球'
 } else if (pathname == '/school') {
    ctx.response.body = '國立金門大學'
 } else if (pathname == '/ID') {
    ctx.response.body = '111310518'
  } else {
    ctx.response.status = 404;
    ctx.response.body = 'Not Found!';    
  }
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000/')
await app.listen({ port: 8000 })
