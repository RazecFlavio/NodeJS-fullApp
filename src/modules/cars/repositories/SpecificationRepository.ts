import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepositoy } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepositoy {
    private specification: Specification[];

    constructor() {
        this.specification = [];
    }
    create({ name, description }: ICreateSpecificationDTO): Specification {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specification.push(specification);
        return specification;
    }
    findByName(name: string): Specification {
        return this.specification.find(x => x.name === name);
    }

}

export { SpecificationRepository }