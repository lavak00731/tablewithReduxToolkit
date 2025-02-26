import ProductType from './../interfaces/ProductType';
export default interface ProductService {
    products: ProductType[];
    total: number;
    skip: number;
    limit: number;
}