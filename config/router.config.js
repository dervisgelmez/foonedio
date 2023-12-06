import Router from "koa-router";
import FixtureController from "../src/controller/fixture.controller.js";
import queryMiddleware from "../middleware/query.middleware.js";
import cacheMiddleware from "../middleware/cache.middleware.js";

const router = new Router({ prefix: "/api" });

const queryMiddlewareHandle = queryMiddleware.handle({require: ['page'], max: {'limit': 100}, min: {'limit': 1}});
const cacheMiddlewareHandle = cacheMiddleware.handle();

router.get("/fixtures",
  queryMiddlewareHandle,
  cacheMiddlewareHandle,
  FixtureController.list
);

export default router;