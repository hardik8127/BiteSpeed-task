import express from "express";
import { identifyContact } from "../contollers/customer.controller.js";

const contactRoutes = express.Router();

contactRoutes.post("identify", identifyContact);

export default contactRoutes;
