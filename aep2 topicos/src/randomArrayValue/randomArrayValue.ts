import { ErrorMessages } from "./errors/errorMessages.enum";
import { productType } from "./types/product.type"

export class randomArrayValue {
    private products: Array<productType> = [
        { name: 'Celular', quantity: 2, price: 1899.99 },
        { name: 'Impressora', quantity: 0, price: 649.50 },
        { name: 'Caderno', quantity: 4, price: 27.10 },
        { name: 'Lapis', quantity: 3, price: 5.82 },
        { name: 'Tesoura', quantity: 1, price: 19.99 },
        { name: 'Estojo', quantity: 7, price: 9.99 },
        { name: 'Teclado', quantity: 2, price: 609.99 },
        { name: 'Tenis', quantity: 3, price: 350.99 },
        { name: 'Fone', quantity: 5, price: 198.99 },
        { name: 'Mochila', quantity: 15, price: 150.99 },
    ]
    private numberOfRandomObjects : number;


    private isProductValid(value: productType) {
        return (
          typeof value === 'object' &&
          typeof value.name === 'string' &&
          typeof value.quantity === 'number' &&
          typeof value.price === 'number'
        )
    }

    setProduct(value: productType): void | string {
        if(this.isProductValid(value)) this.products.push(value)
        else return ErrorMessages.INVALID_PRODUCT
        
    }

    getProducts(): Array<object> {
        return this.products
    }

    setNumberOfRandomObjects(number: number): void {
        this.numberOfRandomObjects = number    
    }

    getNumberOfRandomObjects(): number {
        return this.numberOfRandomObjects
    }

    private randomize(): Array<object>{
        let result: any = [];
        while (result.length < this.numberOfRandomObjects) {
            let randomIndex = Math.floor(Math.random() * this.products.length);
            let randomObject: any = this.products[randomIndex];
            if (!result.includes(randomObject)) {
                result.push(randomObject);
            }
        }
        return result;
    }

    getRandomize(): Array<object> | string {
        if( typeof this.numberOfRandomObjects  !== "number") return ErrorMessages.NOT_NUMBER
        if( this.numberOfRandomObjects <= 0) return ErrorMessages.UNDER_MIN
        if( this.numberOfRandomObjects > this.products.length) return ErrorMessages.OVER_LIMIT
        return this.randomize()
    }
}
