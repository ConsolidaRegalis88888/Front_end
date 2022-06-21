import {productRepository} from '../repository'

export default async function getProductById(id)
{
    return productRepository().getProductById(id)
}