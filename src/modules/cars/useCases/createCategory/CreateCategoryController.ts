import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {

    }
    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;
        return response.status(201).json(this.createCategoryUseCase.execute({ name, description }));
    }
}
export { CreateCategoryController }