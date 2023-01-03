import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }
    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;
        return response.json(this.createSpecificationUseCase.execute({ name, description }));
    }
}
export { CreateSpecificationController }