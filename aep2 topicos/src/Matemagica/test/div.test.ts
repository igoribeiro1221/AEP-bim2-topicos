import {describe, expect, test} from '@jest/globals'
import { Matemagica } from '../Matemagica'
import { ErrorMessages } from '../errors/errorMessages.enum'


describe('Matemagica div', () => {
    test('Deve retornar o valor correto da divisao', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(170)
        matemagica.setValor2(5)
        
        expect(matemagica.getDiv()).toBe(34)
    })

    test('Deve retornar um erro ao tentar realizar uma divisao passando uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(10)
        // @ts-ignore
        matemagica.setValor2('valor')
        expect(matemagica.getDiv()).toBe(ErrorMessages.NOT_NUMBER)
    })

    test('Deve retornar um erro ao tentar realizar a divisao com o divisor igual a 0', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(10)
        matemagica.setValor2(0)
        expect(matemagica.getDiv()).toBe(ErrorMessages.DIVISOR_ZERO)
    })

    test('Deve realizar a divisao com o dividendo igual a 0', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(0)
        matemagica.setValor2(10)
        expect(matemagica.getDiv()).toBe(0)
    })
})