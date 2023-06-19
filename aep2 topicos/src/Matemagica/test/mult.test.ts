import {describe, expect, test} from '@jest/globals'
import { Matemagica } from '../Matemagica'
import { ErrorMessages } from '../errors/errorMessages.enum'

describe('Matemagica mult', () => {
    test('Deve retornar o valor correto da multiplicacao', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(10)
        matemagica.setValor2(10)
        
        expect(matemagica.getMult()).toBe(100)
    })

    test('Deve retornar um erro ao tentar realizar uma multiplicao com passando uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(10)
        // @ts-ignore
        matemagica.setValor2('valor')
        expect(matemagica.getMult()).toBe(ErrorMessages.NOT_NUMBER)
    })

    test('Deve retornar um erro ao tentar realizar uma multiplicao com valor igual a 0', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(10)
        matemagica.setValor2(0)
        
        expect(matemagica.getMult()).toBe(ErrorMessages.MULTI_ZERO)
    })
})