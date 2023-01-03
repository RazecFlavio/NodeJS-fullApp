import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateCategoryUseCase {
    constructor(private repository: ICategoriesRepository) { } //Inversion dependency - o serviço não depende do repositorio, pq o repositorio é passado via parametro.

    execute({ name, description }: IRequest): Category {
        const exists = this.repository.findByName(name);
        if (exists) {
            throw new Error("Category already exists! ");
        }

        const result = this.repository.create({ name, description });
        return result;
    }
}

export { CreateCategoryUseCase }