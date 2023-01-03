import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();
specificationRoutes.post("/", createSpecificationController.handle)
export { specificationRoutes }