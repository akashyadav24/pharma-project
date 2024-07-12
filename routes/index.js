const allRoutes = require("express").Router();
const userRouter = require("../modules/users/users.routes");
const pharmaRouter = require("../modules/pharma/pharma.routes");

allRoutes.use(userRouter);
allRoutes.use(pharmaRouter);

module.exports = allRoutes;