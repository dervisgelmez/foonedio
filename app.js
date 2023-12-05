import Koa from "koa";
import database from "./config/database.config.js"

const app = new Koa();
await database.connect();

app.use(async ctx => {
    ctx.body = 'Hello World';
  });
  
app.listen(3000);