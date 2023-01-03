import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}
interface ISpecificationRepositoy {
    create({ name, description }: ICreateSpecificationDTO): Specification;
    findByName(name: string): Specification;

}

export { ISpecificationRepositoy, ICreateSpecificationDTO }