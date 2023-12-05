import Router from "koa-router";
import FixtureController from "../src/controller/fixture.controller.js";
import queryMiddleware from "../middleware/query.middleware.js";

const router = new Router({ prefix: "/api" });

const queryParamsMiddleware = queryMiddleware.handle({require: ['page'], max: {'limit': 100}});

router.get("/fixtures",
  queryParamsMiddleware,
  FixtureController.list
);

router.get("/fixtures/:league",
  queryParamsMiddleware,
  FixtureController.listByLeague
);

export default router;