import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";

const router = Router();
router.post("/registro", registerCtrl);
router.post("/acceso", loginCtrl);

export { router };
