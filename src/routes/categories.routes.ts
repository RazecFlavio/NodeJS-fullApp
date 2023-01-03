import { response, Router } from "express"
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

import multer from 'multer'

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
categoriesRoutes.post('/import', upload.single("file"), (request, response) => {
    const { file } = request;
    console.log(file);
    return response.send();
});

export { categoriesRoutes }

