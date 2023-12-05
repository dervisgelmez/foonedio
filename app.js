import Koa from "koa";
import router from "./config/router.config.js";
import parameter from "./config/parameter.config.js";
import database from "./config/database.config.js";

const app = new Koa();
app
  .use(router.routes())
  .use(router.allowedMethods())
  .use((ctx) => {
    ctx.status = 404;
  });

await database.connect();
app.listen(parameter.PORT);