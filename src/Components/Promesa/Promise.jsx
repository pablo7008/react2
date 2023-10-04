import Bebidas from '../../data/products.json';

export const promesa = () => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Bebidas)
    }, 2000)
})}