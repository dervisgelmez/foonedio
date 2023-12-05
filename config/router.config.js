import Router from "koa-router";
import FixtureController from "../src/controller/fixture.controller.js";

const router = new Router({ prefix: "/api" });

router.get("/fixtures",
  FixtureController.list
);

router.get("/fixtures/:league",
  FixtureController.listByLeague
);

export default router;