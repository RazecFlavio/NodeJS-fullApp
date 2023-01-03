import { Specification } from "../../model/Specification";
import { ISpecificationRepositoy } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationUseCase {
    constructor(private repository: ISpecificationRepositoy) { }
    execute({ name, description }: IRequest): Specification {
        const exists = this.repository.findByName(name);
        if (exists) throw new Error("Specification already exists! ")
        const result = this.repository.create({ name, description });
        return result;
    }
}
export { CreateSpecificationUseCase }