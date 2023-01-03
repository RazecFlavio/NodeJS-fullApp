import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const repository = CategoriesRepository.getInstance();
const useCase = new CreateCategoryUseCase(repository);
const createCategoryController = new CreateCategoryController(useCase);


export { createCategoryController }