import express from "express";
const routerShortlink = express.Router();
import shortlinkController from "../controllers/shortlinkController.js";

routerShortlink.route("/").get(shortlinkController.shortlinkMenu);

routerShortlink
  .route("/config")
  .post(shortlinkController.createSl)
  .patch(shortlinkController.updateSl)
  .delete(shortlinkController.deleteSl);

routerShortlink.route("/not-found").get(shortlinkController.notFound);

routerShortlink.route("/res").get(shortlinkController.createResult);

routerShortlink.route("/get/:id").get(shortlinkController.getByID);

routerShortlink
  .route("/email/:email")
  .get(shortlinkController.getShortlinksPaginated);

export default routerShortlink;
