import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private _list: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const categories = this._list.execute();
    return response.json(categories);
  }
}
export { ListCategoriesController };
