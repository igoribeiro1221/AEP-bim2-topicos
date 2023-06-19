import { ErrorMessages } from "./errors/errorMessages.enum"


export class Matemagica {
    private valor1: number
    private valor2: number

    public setValor1(valor1: number): void  {
        this.valor1 = valor1
    }
    
    public setValor2(valor2: number): void {
        this.valor2 = valor2
    }

    public getValor1(): number {
        return this.valor1
    }

    public getValor2(): number {
        return this.valor2
    }

    private numberValidator (): string | false {
        if(typeof this.getValor1() !== 'number' || typeof this.getValor2() !== 'number') {
            return ErrorMessages.NOT_NUMBER
        }
        return false
    }

    private sum(): number | string {
        const verifyIsNumber = this.numberValidator()
        if(verifyIsNumber) return verifyIsNumber

        return this.valor1 + this.valor2
    }

    public getSum(): number | string {
        return this.sum()
    }

    private sub(): number | string {
        const verifyIsNumber = this.numberValidator()
        if(verifyIsNumber) return verifyIsNumber

        return this.valor1 - this.valor2
    }

    public getSub(): number | string {
        return this.sub()
    }

    private mult(): number | string {
        const verifyIsNumber = this.numberValidator()
        if(verifyIsNumber) return verifyIsNumber
        if(this.getValor1() === 0  || this.getValor2() === 0) {
            return ErrorMessages.MULTI_ZERO
        }
        return this.valor1 * this.valor2
    }

    public getMult(): number | string {
        return this.mult()
    }

    private div(): number | string {
        const verifyIsNumber = this.numberValidator()
        if(verifyIsNumber) return verifyIsNumber
        if(this.getValor2() === 0) {
            return ErrorMessages.DIVISOR_ZERO
        }
        return this.valor1 / this.valor2
    }

    public getDiv(): number | string {
        return this.div()
    }
}
